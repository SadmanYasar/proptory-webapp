/* eslint-disable @next/next/no-img-element */
import { setNotification, useStateValue } from '@/state';
import { getFromStorage, removeFromStorage } from '@/utils/storage';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import * as Yup from 'yup';
import { ListingDetailed } from '../listings/[id]';
import useSWR from 'swr';
import Agent from '@/db/models/agent';
import { fetcher } from '@/utils/fetcher';

const addListingSchema = Yup.object().shape({
    matterportId: Yup.string().typeError('String is required').required('Required').min(5, 'Too Short!').trim(),
    name: Yup.string().typeError('String is required').required('Required').min(3, 'Too Short!').trim(),
    description: Yup.string().typeError('String is required').required('Required').min(5, 'Too Short!').trim(),
    address: Yup.string().typeError('String is required').required('Required').min(5, 'Too Short!').trim(),
    bathrooms: Yup.number().typeError('Must be a positive number').required('Required').moreThan(0),
    bedrooms: Yup.number().typeError('Must be a positive number').required('Required').moreThan(0),
    price: Yup.number().typeError('Must be a positive number').required('Required').moreThan(0),
})

export interface RoomInfo {
    bathroomCount: number;
    bedroomCount: number;
}
export interface Agent {
    data: Data;
}

interface Data {
    id: string;
    fullname: string;
    listings: ListingDetailed[];
}

export default function AgentProfile() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoading, setLoading] = useState(false);
    // const [agent, setAgent] = useState<Agent | null>(null);
    const [{ searchVal }, dispatch] = useStateValue();
    const router = useRouter();
    const { id } = router.query;
    const { data, error, mutate } = useSWR<Agent | null>(id ? `/api/agents/${id}` : null, id ? fetcher : null);
    const contentType = 'application/json';

    useEffect(() => {
        if (getFromStorage('proptory-token') && getFromStorage('proptory-user')) {
            setLoggedIn(true);
        }
    }, [loggedIn]);

    const addListing = async (values: any) => {
        try {
            const response = await fetch(`/api/agents/${getFromStorage('proptory-user')}`, {
                method: 'POST',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                    Authorization: `Bearer ${getFromStorage('proptory-token')}`
                },
                body: JSON.stringify({
                    ...values
                })
            });

            // Throw error with status code in case Fetch API req failed
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            if (!response.ok) {
                throw new Error(jsonResponse.error);
            }

            data && mutate({
                ...data,
                data: {
                    ...data.data,
                    listings: [...data?.data.listings, jsonResponse]
                }
            });
            dispatch(setNotification({ message: `Successfully added ${values.name}`, type: 'success' }));
        } catch (error: any) {
            dispatch(setNotification({ message: 'Failed to add', type: 'error' }));
        }
    }

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    console.log(data);

    return (
        <>
            <Head>
                <title>Agent Profile</title>
            </Head>
            <div className={`text-black text-3xl py-4 px-12 ${data?.data?.fullname ? '' : 'hidden'}`}>{`${data?.data?.fullname}'s listings`}</div>
            <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1'>
                {data?.data?.listings?.map((listing) =>
                    <Card key={listing.id} data={listing} />
                )}
            </div>
            {loggedIn && <AddListingModal addListing={addListing} />}
        </>
    )
}

interface CardProps {
    data: ListingDetailed;
}
export const Card = ({ data: { id, name, address, price, description, bathrooms, bedrooms } }: CardProps) => {
    const router = useRouter();

    return (
        <>
            <div className='h-96 my-12 mx-12 shadow-lg rounded-md grid grid-rows-2' onClick={() => router.push(`/listings/${id}`)}>
                <div className="w-full h-full relative rounded-t-md bg-pink-200">
                    <div className='w-full h-full flex flex-col items-center justify-center'>
                        {address}
                    </div>
                </div>
                <div className='w-full h-full flex flex-col mx-4 my-4 space-y-4 text-lg'>
                    <div className='text-2xl font-bold'>RM{price}</div>
                    <div>{name}</div>
                    <div className="w-[250px]">
                        <div className='truncate'>{description}</div>
                    </div>
                    <div className='flex flex-row space-x-10'>
                        <div>🛁 {bathrooms}</div>
                        <div>🛏️ {bedrooms}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

interface ModalProps {
    addListing: (values: any) => Promise<void>;
}
const AddListingModal = ({ addListing }: ModalProps) => {
    const router = useRouter();
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <div className='z-50 w-full h-full px-4 py-4 pointer-events-none fixed top-0 flex justify-end items-end'>
                <IoIosAddCircle className='w-20 h-20 pointer-events-auto' onClick={() => setModalShow(true)} />
            </div>
            {modalShow && <div className="w-full h-full fixed backdrop-blur-sm shadow-lg z-50 top-0 flex flex-col items-center justify-center">
                <div className="max-md:w-full md:w-3/6 bg-white shadow-2xl px-4 py-4 space-y-4 rounded-md overflow-auto">
                    <Formik
                        initialValues={{
                            matterportId: '',
                            name: '',
                            address: '',
                            description: '',
                            bathrooms: '',
                            bedrooms: '',
                            price: '',
                        }}
                        validationSchema={addListingSchema}
                        onSubmit={(values) => {
                            addListing(values);
                            setModalShow(false);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="w-full space-y-4">
                                <Field type="text" name="matterportId" placeholder="Matterport Model ID" className="relative block max-md:py-4 w-full placeholder:text-slate-400 bg-white border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" />
                                <ErrorMessage name="matterportId" component="div" className="text-red-500 sm:text-sm md:text-xl" />

                                <Field type="text" name="name" placeholder="Name of listing" className="relative block max-md:py-4 w-full placeholder:text-slate-400 bg-white border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" />
                                <ErrorMessage name="name" component="div" className="text-red-500 sm:text-sm md:text-xl" />

                                <Field type="text" name="address" placeholder="Address" className="relative block max-md:py-4 w-full placeholder:text-slate-400 bg-white border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" />
                                <ErrorMessage name="address" component="div" className="text-red-500 sm:text-sm md:text-xl" />

                                <Field type="text" name="description" placeholder="Description" className="relative block max-md:py-4 w-full placeholder:text-slate-400 bg-white border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" />
                                <ErrorMessage name="description" component="div" className="text-red-500 sm:text-sm md:text-xl" />

                                <Field type="text" name="bathrooms" placeholder="How many bathrooms?" className="relative block max-md:py-4 w-full placeholder:text-slate-400 bg-white border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" />
                                <ErrorMessage name="bathrooms" component="div" className="text-red-500 sm:text-sm md:text-xl" />

                                <Field type="text" name="bedrooms" placeholder="How many bedrooms?" className="relative block max-md:py-4 w-full placeholder:text-slate-400 bg-white border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" />
                                <ErrorMessage name="bedrooms" component="div" className="text-red-500 sm:text-sm md:text-xl" />

                                <Field type="text" name="price" placeholder="Price" className="relative block max-md:py-4 w-full placeholder:text-slate-400 bg-white border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" />
                                <ErrorMessage name="price" component="div" className="text-red-500 sm:text-sm md:text-xl" />

                                <button className='w-full py-4 bg-pink-650 rounded-lg text-center text-xl text-white' type={'submit'} disabled={isSubmitting}>Create</button>
                                <button type='button' className='w-full py-4 bg-white rounded-lg text-center text-xl text-gray-500 border border-gray-400' onClick={() => setModalShow(false)}>Cancel</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>}
        </>
    )
}
