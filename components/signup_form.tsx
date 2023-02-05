import { useStateValue } from "@/state";
import { setNotification } from "@/state/";
import { removeFromStorage } from "@/utils/storage";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Dispatch, SetStateAction } from "react";
import * as Yup from 'yup';
import Button from "./button";
import Input from "./input";

export const signUpSchema = Yup.object().shape({
    fullname: Yup.string().required('Required').min(3, 'Too Short!').trim(),
    phone: Yup.string().required('Required').length(13, 'Invalid Number').trim(),
    username: Yup.string().required('Required').trim(),
    password: Yup.string().required('Required').min(5, 'Too Short!').trim(),
})
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
        removeFromStorage('proptory-token');
        removeFromStorage('proptory-user');

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
                        <Input type="text" name="fullname" placeholder="Full Name" />
                        <Input type="text" name="phone" placeholder="Phone Number" />
                        <Input type="text" name="username" placeholder="Username" />
                        <Input type="password" name="password" placeholder="Password" />
                        <Button type="submit" disabled={isSubmitting} text={"Signup"} />
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default SignUpForm;