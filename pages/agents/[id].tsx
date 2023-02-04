/* eslint-disable @next/next/no-img-element */
import { setNotification, useStateValue } from '@/state';
import { getFromStorage, removeFromStorage } from '@/utils/storage';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import * as Yup from 'yup';

const addListingSchema = Yup.object().shape({
    matterportId: Yup.string().typeError('String is required').required('Required').min(5, 'Too Short!').trim(),
    name: Yup.string().typeError('String is required').required('Required').min(3, 'Too Short!').trim(),
    description: Yup.string().typeError('String is required').required('Required').min(5, 'Too Short!').trim(),
    address: Yup.string().typeError('String is required').required('Required').min(5, 'Too Short!').trim(),
    bathrooms: Yup.number().typeError('Must be a positive number').required('Required').moreThan(0),
    bedrooms: Yup.number().typeError('Must be a positive number').required('Required').moreThan(0),
    price: Yup.number().typeError('Must be a positive number').required('Required').moreThan(0),
})

interface Listing {
    id: string;
    name: string;
    description: string;
    created: string;
    visibility: string;
    state: string;
    image: {
        url: string;
    };
    address: {
        streetAddressLines: string[];
    };
}

const mockData: Listing[] = [
    {
        "id": "zxaRzMEw2kg",
        "name": "MXCAGMPT",
        "description": "",
        "created": "2022-03-25T12:14:24Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/zxaRzMEw2kg/images/Zkk5w98cnq7/Zkk5w98cnq7-Kitchen.jpg?t=2-9d116e9a961941d111072280c1312c08235dee78-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
                "Jalan Perimbun 27/11",
                "591 Damansara SA"
            ]
        }
    },
    {
        "id": "zvsnxftcvJW",
        "name": "OEYTVMUW",
        "description": "B-06-04 The Academia @ South City Plaza",
        "created": "2022-07-19T05:40:52Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/zvsnxftcvJW/images/c7ajeFyJyVU/c7ajeFyJyVU-Bedroom.jpg?t=2-a1f3680bbea9f7b422d82f68e8d947447a48a20a-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
                "Jalan Serdang Raya"
            ]
        }
    },
    {
        "id": "zumY6UWL522",
        "name": "TVAMOUGE",
        "description": "L32-1(S) Hill10 Residence",
        "created": "2022-07-02T03:34:32Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/zumY6UWL522/images/fNT7jcpXXQt/fNT7jcpXXQt-Kitchen.jpg?t=2-057b48f84e76c643f3d07b84fa437ca54edcdb84-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
                "Persiaran Multimedia"
            ]
        }
    },
    {
        "id": "ztWCDuvb1K9",
        "name": "ZAJIFWWV",
        "description": "",
        "created": "2022-03-12T09:26:20Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/ztWCDuvb1K9/images/H9fGE5eg4XT/H9fGE5eg4XT-Living_Room.jpg?t=2-444edadae9845132d3021738c2ecb4a0d75d3326-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
                "2-32 Jalan Klang Lama",
                "Taman Shanghai"
            ]
        }
    },
    {
        "id": "zqdnMNNBrYU",
        "name": "GSVKYZHW",
        "description": "MR1-08-04 Sri Acappella Serviced Apartments",
        "created": "2022-07-05T06:37:51Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/zqdnMNNBrYU/images/1F8NxESSFMt/1F8NxESSFMt-Photo_02.jpg?t=2-bb9b30ce87ead18e4bd9b08758839b4a9f9517c4-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
                "1 Jalan Lompat Tinggi 13/33"
            ]
        }
    },
    {
        "id": "zkzfDVWHywg",
        "name": "LTXDSMXI",
        "description": "",
        "created": "2022-05-09T03:53:34Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/zkzfDVWHywg/images/H1G3xq7eTnC/H1G3xq7eTnC-Living_Room.jpg?t=2-aba9e928dd288b5dbb29147282e724625972429f-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
                "Maju Expressway"
            ]
        }
    },
    {
        "id": "zks9j3rZNmA",
        "name": "TDTJAGQR",
        "description": "",
        "created": "2022-08-13T11:59:16Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/zks9j3rZNmA/images/MLhL8AoShoW/MLhL8AoShoW-Photo_02.jpg?t=2-26380a7c24fc73136da8e840154f41dd4b4a0dc5-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
            ]
        }
    },
    {
        "id": "zhncwX7Zkxp",
        "name": "YCOWZPMB",
        "description": "",
        "created": "2022-04-14T07:52:29Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/zhncwX7Zkxp/images/9JJNEUctBiG/9JJNEUctBiG-Dining_Room.jpg?t=2-f23f490efd49e706e710b59fd3b37bdd2785b1c3-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
                "1 Jalan PJS 8/9",
                "Bandar Sunway"
            ]
        }
    },
    {
        "id": "zdspHrdpiek",
        "name": "STDMMDMP",
        "description": "Mutiara Ville",
        "created": "2022-07-14T11:04:34Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/zdspHrdpiek/images/boZgQ4oqDmi/boZgQ4oqDmi-Living_Room.jpg?t=2-21af2225fbcd8fd864225504ee2378a2eac27be8-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
                "Jalan Tanpa Nama",
                "Cyberjaya"
            ]
        }
    },
    {
        "id": "zasYf22gxpy",
        "name": "BNEWIOCY",
        "description": "C-12-05 (Koi Kinrara Service Suite)",
        "created": "2022-07-23T07:46:52Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/zasYf22gxpy/images/SVRNv4BvaWb/SVRNv4BvaWb-Living_Room.jpg?t=2-3603def2ae814cf13526a25784092e24ec2d2079-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
            ]
        }
    }
]

export interface RoomInfo {
    bathroomCount: number;
    bedroomCount: number;
}
export interface Listing2 {
    id: string;
    name: string;
    description: string;
    created: string;
    address: {
        streetAddress: string[];
    }
    roomInfo: RoomInfo;
    price: number;
}

const mockData2: Listing2[] = [
    {
        "id": "UzuL32m7Drr",
        "name": "MXCAGMPT",
        "description": "Mock Description",
        "created": "2022-03-25T12:14:24Z",
        "address": {
            "streetAddress": [
                "Jalan Perimbun 27/11",
                "591 Damansara SA"
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 2000
    },
    {
        "id": "zvsnxftcvJW",
        "name": "OEYTVMUW",
        "description": "B-06-04 The Academia @ South City Plaza",
        "created": "2022-07-19T05:40:52Z",
        "address": {
            "streetAddress": [
                "Jalan Serdang Raya"
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 1500
    },
    {
        "id": "zumY6UWL522",
        "name": "TVAMOUGE",
        "description": "L32-1(S) Hill10 Residence",
        "created": "2022-07-02T03:34:32Z",
        "address": {
            "streetAddress": [
                "Persiaran Multimedia"
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 2200
    },
    {
        "id": "ztWCDuvb1K9",
        "name": "ZAJIFWWV",
        "description": "",
        "created": "2022-03-12T09:26:20Z",
        "address": {
            "streetAddress": [
                "2-32 Jalan Klang Lama",
                "Taman Shanghai"
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 1300
    },
    {
        "id": "zqdnMNNBrYU",
        "name": "GSVKYZHW",
        "description": "MR1-08-04 Sri Acappella Serviced Apartments",
        "created": "2022-07-05T06:37:51Z",
        "address": {
            "streetAddress": [
                "1 Jalan Lompat Tinggi 13/33"
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 500
    },
    {
        "id": "zkzfDVWHywg",
        "name": "LTXDSMXI",
        "description": "",
        "created": "2022-05-09T03:53:34Z",
        "address": {
            "streetAddress": [
                "Maju Expressway"
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 800
    },
    {
        "id": "zks9j3rZNmA",
        "name": "TDTJAGQR",
        "description": "",
        "created": "2022-08-13T11:59:16Z",
        "address": {
            "streetAddress": [
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 900
    },
    {
        "id": "zhncwX7Zkxp",
        "name": "YCOWZPMB",
        "description": "",
        "created": "2022-04-14T07:52:29Z",
        "address": {
            "streetAddress": [
                "1 Jalan PJS 8/9",
                "Bandar Sunway"
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 250
    },
    {
        "id": "zdspHrdpiek",
        "name": "STDMMDMP",
        "description": "Mutiara Ville",
        "created": "2022-07-14T11:04:34Z",
        "address": {
            "streetAddress": [
                "Jalan Tanpa Nama",
                "Cyberjaya"
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 20
    },
    {
        "id": "zasYf22gxpy",
        "name": "BNEWIOCY",
        "description": "C-12-05 (Koi Kinrara Service Suite)",
        "created": "2022-07-23T07:46:52Z",
        "address": {
            "streetAddress": [
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 300
    }
]

export default function AgentProfile() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [{ searchVal }] = useStateValue();

    // check if loggedin
    // if so, 
    //      show 'Your listings'
    //      show Edit option in each listing'
    //      show add button
    // else show '${Agentname}'s listings'
    useEffect(() => {
        if (getFromStorage('proptory-token') && getFromStorage('proptory-user')) {
            setLoggedIn(true);
        }
    }, []);


    return (
        <>
            <Head>
                <title>Agent Profile</title>
            </Head>
            <div className='text-black text-3xl py-4 px-12'>{loggedIn ? 'Your Listings' : "Agent's listings"}</div>
            <Card data={mockData2} />
            {loggedIn && <AddListingModal />}
        </>
    )
}

interface CardProps {
    data: Listing2[];
}
const Card = ({ data }: CardProps) => {
    const router = useRouter();

    return (
        <>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1'>
                {data?.map(({ id, name, description, address, price, roomInfo }) => {
                    return (
                        <div key={id} className='h-96 my-12 mx-12 shadow-lg rounded-md grid grid-rows-2' onClick={() => router.push(`/listings/${id}`)}>
                            <div className="w-full h-full relative rounded-t-md bg-pink-200">
                                <div className='w-full h-full flex flex-col items-center justify-center'>
                                    {address?.streetAddress?.map((a, i) => <div key={i} className='text-2xl'>
                                        {a}
                                    </div>)}
                                </div>
                            </div>
                            <div className='w-full h-full flex flex-col mx-4 my-4 space-y-4 text-lg'>
                                <div className='text-2xl font-bold'>RM{price}</div>
                                <div>{name}</div>
                                <div className="w-[250px]">
                                    <div className='truncate'>{description}</div>
                                </div>
                                <div className='flex flex-row space-x-10'>
                                    <div>🛁 {roomInfo?.bathroomCount}</div>
                                    <div>🛏️ {roomInfo?.bedroomCount}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}
const AddListingModal = () => {
    const [_, dispatch] = useStateValue();
    const router = useRouter();
    const [modalShow, setModalShow] = useState(false);
    const contentType = 'application/json';

    const submit = async (values: any) => {
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
            const data = await response.json();
            console.log(data);
            if (!response.ok) {
                throw new Error(data.error);
            }

            dispatch(setNotification({ message: `Successfully added ${values.name}`, type: 'success' }));
        } catch (error: any) {
            dispatch(setNotification({ message: 'Failed to add', type: 'error' }));
        }
        setModalShow(false);
    }

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
                        onSubmit={(values) => submit(values)}
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
