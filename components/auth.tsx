/* eslint-disable @next/next/no-img-element */
import { useStateValue, setUser, removeUser, removeNotification } from "@/state";
import router, { NextRouter, useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import LoginForm from "./login_form";
import SignUpForm from "./signup_form";
import Notification from "./notification";

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
    const [_, dispatch] = useStateValue();

    const changeToListingsRoute = () => {
        dispatch(removeNotification());
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
                    <Notification />
                    {show && <LoginForm router={router} />}
                    {!show && <SignUpForm setShow={setShow} />}
                    <div className='w-full text-center text-lg text-pink-650 font-bold'>OR</div>
                    <div className='w-full text-center text-lg text-pink-650' onClick={changeToListingsRoute}>Continue as visitor</div>
                </div>
            </div>
        </main>
    )
}