import { useStateValue, removeUser } from "@/state";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Dispatch, SetStateAction } from "react";
import { signUpSchema } from "./auth";

interface SignUpProps {
    setShow: Dispatch<SetStateAction<boolean>>;
}

type SignupInputs = {
    fullname: string,
    phone: string,
    username: string,
    password: string
}
const SignUpForm = ({ setShow }: SignUpProps) => {
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

export default SignUpForm;