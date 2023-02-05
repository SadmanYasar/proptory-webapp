import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import * as Yup from 'yup';

const addListingSchema = Yup.object().shape({
    matterportId: Yup.string().typeError('String is required').required('Required').min(5, 'Too Short!').trim(),
    name: Yup.string().typeError('String is required').required('Required').min(5, 'Too Short!').trim(),
    description: Yup.string().typeError('String is required').required('Required').min(10, 'Too Short!').trim(),
    address: Yup.string().typeError('String is required').required('Required').min(10, 'Too Short!').trim(),
    bathrooms: Yup.number().typeError('Must be a positive number').required('Required').moreThan(0),
    bedrooms: Yup.number().typeError('Must be a positive number').required('Required').moreThan(0),
    price: Yup.number().typeError('Must be a positive number').required('Required').moreThan(0),
})

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

export default AddListingModal;