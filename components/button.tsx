interface ButtonProps {
    type: 'submit' | 'button';
    text: string;
    disabled: boolean;
}

const Button = ({ type, text, disabled }: ButtonProps) => {
    return (
        <button className='w-full py-4 bg-pink-650 rounded-lg text-center text-xl text-white' type={type} disabled={disabled}>{text}</button>
    )
}

export default Button;