/* eslint-disable @next/next/no-img-element */
import { useStateValue, setUser, removeUser } from "@/state";
import router, { NextRouter, useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
    username: Yup.string().required('Required').trim(),
    password: Yup.string().required('Required').min(5, 'Too Short!').trim(),
})

export const signUpSchema = Yup.object().shape({
    fullname: Yup.string().required('Required').min(3, 'Too Short!').trim(),
    phone: Yup.string().required('Required').length(13, 'Invalid Number').trim(),
    username: Yup.string().required('Required').trim(),
    password: Yup.string().required('Required').min(5, 'Too Short!').trim(),
})

export function AuthPage() {
    const router = useRouter();
    const [show, setShow] = useState(true);

    const changeToListingsRoute = () => {
        router.push('/agents/1');
    }

    return (
        <main className='w-full h-screen flex flex-col space-y-2 items-center bg-pink-650'>
            <img
                referrerPolicy='no-referrer'
                src={'logo_proptory/svg/white_transparent.svg'}
                alt='proptory-logo'
            />
            <div className='max-md:w-10/12 md:w-5/12 px-10 pb-8 bg-white shadow-md rounded-md'>
                <div className='w-full flex flex-col items-center pt-4 space-y-6'>
                    <div className='w-full flex justify-around pt-4'>
                        <div className={`border w-2/4 ${show ? 'border-pink-650 bg-pink-650 text-white' : 'bg-white border-gray-300 text-gray-400'} rounded-l-lg py-4 px-10`} onClick={() => setShow(!show)}>Login</div>
                        <div className={`border w-2/4 ${!show ? 'border-pink-650 bg-pink-650 text-white' : 'bg-white border-gray-300 text-gray-400'} rounded-r-lg py-4 px-10`} onClick={() => setShow(!show)}>Signup</div>
                    </div>
                    {show && <LoginForm router={router} />}
                    {!show && <SignUpForm router={router} setShow={setShow} />}
                    <div className='w-full text-center text-lg text-pink-650 font-bold'>OR</div>
                    <div className='w-full text-center text-lg text-pink-650' onClick={changeToListingsRoute}>Continue as visitor</div>
                </div>
            </div>
        </main>
    )
}

export interface FormProps {
    router: NextRouter;
}

export const LoginForm = ({ router }: FormProps) => {
    const [_, dispatch] = useStateValue();

    const login = (values: { username: string, password: string }) => {
        dispatch(removeUser());
        fetch('/api/auth/signup', {
            // headers: {
            //     ''
            // }
        })
        router.push('/agents/1');
    }

    return (
        <>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                validationSchema={loginSchema}
                onSubmit={(values) => login(values)}
            >
                {({ isSubmitting }) => (
                    <Form className="w-full space-y-4">
                        <Field type="text" name="username" placeholder="Username" className="relative block max-md:py-4 w-full placeholder:text-slate-400 bg-white border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" />
                        <ErrorMessage name="username" component="div" className="text-red-500 sm:text-sm md:text-xl" />

                        <Field type="password" name="password" placeholder="Password" className="relative block max-md:py-4 w-full placeholder:text-slate-400 bg-white border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" />
                        <ErrorMessage name="password" component="div" className="text-red-500 sm:text-sm md:text-xl" />

                        <button className='w-full py-4 bg-pink-650 rounded-lg text-center text-xl text-white' type={'submit'} disabled={isSubmitting}>Login</button>
                    </Form>
                )}
            </Formik>
            {/* <button className='w-full py-4 bg-pink-650 rounded-lg text-center text-xl text-white' onClick={login}>Login as agent</bu> */}
            {/* <label className="relative block max-md:py-4 w-full">
                <span className="sr-only">Username</span>
                <input className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" placeholder="Username" type="text" name="username" />
            </label>
            <label className="relative block max-md:py-4 w-full">
                <span className="sr-only">Password</span>
                <input className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-4 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" placeholder="Password" type="password" name="password" />
            </label> */}
        </>
    )
}

export interface SignUpProps extends FormProps {
    setShow: Dispatch<SetStateAction<boolean>>;
}

type SignupInputs = {
    fullname: string,
    phone: string,
    username: string,
    password: string
}
export const SignUpForm = ({ router, setShow }: SignUpProps) => {
    const [_, dispatch] = useStateValue();

    const signUp = async (values: SignupInputs) => {
        dispatch(removeUser());
        try {
            const response = await fetch('/api/auth/signup', {
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    ...values
                })
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }

        setShow(true);
    }

    return (
        <>
            <Formik
                initialValues={{
                    fullname: '',
                    phone: '',
                    username: '',
                    password: ''
                }}
                validationSchema={signUpSchema}
                onSubmit={(values: SignupInputs) => signUp(values)}
            >
                {({ isSubmitting }) => (
                    <Form className="w-full space-y-4">
                        <Field type="text" name="fullname" placeholder="Full Name" className="relative block max-md:py-4 w-full placeholder:text-slate-400 bg-white border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" />
                        <ErrorMessage name="fullname" component="div" className="text-red-500 sm:text-sm md:text-xl" />

                        <Field type="text" name="phone" placeholder="Phone Number" className="relative block max-md:py-4 w-full placeholder:text-slate-400 bg-white border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" />
                        <ErrorMessage name="phone" component="div" className="text-red-500 sm:text-sm md:text-xl" />

                        <Field type="text" name="username" placeholder="Username" className="relative block max-md:py-4 w-full placeholder:text-slate-400 bg-white border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" />
                        <ErrorMessage name="username" component="div" className="text-red-500 sm:text-sm md:text-xl" />

                        <Field type="password" name="password" placeholder="Password" className="relative block max-md:py-4 w-full placeholder:text-slate-400 bg-white border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" />
                        <ErrorMessage name="password" component="div" className="text-red-500 sm:text-sm md:text-xl" />

                        <button className='w-full py-4 bg-pink-650 rounded-lg text-center text-xl text-white' type={'submit'} disabled={isSubmitting}>Signup</button>
                    </Form>
                )}
            </Formik>
            {/* <label className="relative block max-md:py-4 w-full">
                <span className="sr-only">FullName</span>
                <input className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" placeholder="Full Name" type="text" name="fullname" />
            </label>
            <label className="relative block max-md:py-4 w-full">
                <span className="sr-only">Phone Number</span>
                <input className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" placeholder="Phone Number" type="text" name="phonenumber" />
            </label>
            <label className="relative block max-md:py-4 w-full">
                <span className="sr-only">Username</span>
                <input className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" placeholder="Username" type="text" name="username" />
            </label>
            <label className="relative block max-md:py-4 w-full">
                <span className="sr-only">Password</span>
                <input className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-4 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" placeholder="Password" type="password" name="password" />
            </label>
            <input className='w-full py-4 bg-pink-650 rounded-lg text-center text-xl text-white' type={'button'}>Signup</input>
         */}</>
    )
}