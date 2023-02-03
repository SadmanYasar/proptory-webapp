import { useStateValue } from "@/state";
import { setNotification } from "@/state/";
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

    const contentType = 'application/json';

    const signUp = async (values: SignupInputs) => {
        localStorage.removeItem('proptory-token');

        try {
            console.log(values);
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                },
                body: JSON.stringify({
                    ...values
                })
            });

            // Throw error with status code in case Fetch API req failed
            if (!response.ok) {
                throw new Error(response.status.toString());
            }

            const data = await response.json();
            console.log(data);
            setShow(true);

        } catch (error) {
            console.log(error);
            dispatch(setNotification({ message: 'Failed to sign up', type: 'error' }));
        }
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
        </>
    )
}

export default SignUpForm;