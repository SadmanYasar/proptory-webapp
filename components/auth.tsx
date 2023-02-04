/* eslint-disable @next/next/no-img-element */
import { useStateValue, removeNotification } from "@/state";
import { useRouter } from "next/router";
import { useState } from "react";
import LoginForm from "./login_form";
import SignUpForm from "./signup_form";
import Notification from "./notification";

export function AuthPage() {
    const router = useRouter();
    const [show, setShow] = useState(true);
    const [_, dispatch] = useStateValue();

    const changeToListingsRoute = () => {
        dispatch(removeNotification());
        router.push('/listings?page=1');
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