import { removeNotification, useStateValue } from "@/state";

export default function Notification() {
    const [{ notification }, dispatch] = useStateValue();

    const clearNotification = () => {
        dispatch(removeNotification());
    }

    if (!notification.message) {
        return null;
    }

    return (
        <div onClick={clearNotification} className={`w-full py-4 px-4 text-xl text-center ${notification.type === 'success' ? 'bg-green-400' : 'bg-red-400'}`}>
            {notification.message}
        </div>
    )
}