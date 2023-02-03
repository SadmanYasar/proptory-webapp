import { useStateValue, removeUser } from "@/state";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NextRouter } from "next/router";
import { loginSchema } from "./auth";

interface FormProps {
    router: NextRouter;
}

const LoginForm = ({ router }: FormProps) => {
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

export default LoginForm;