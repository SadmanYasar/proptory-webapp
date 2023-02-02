import Head from "next/head";
import { useRouter } from "next/router";
import { RoomInfo } from "../agents/[id]";

interface ListingDetailed {
    id: string;
    name: string;
    description: string;
    created: string;
    address: string;
    roomInfo: RoomInfo;
    price: number;
    agent: {
        phone: string;
    }
}
const mockdata: ListingDetailed = {
    "id": "UzuL32m7Drr",
    "name": "MXCAGMPT",
    "description": "Mock Description",
    "created": "2022-03-25T12:14:24Z",
    "address": "Jalan Perimbun 27/11, 591 Damansara SA",
    roomInfo: {
        bathroomCount: 2,
        bedroomCount: 3
    },
    agent: {
        phone: "+601127372883"
    },
    price: 2000
}

export default function Listing() {
    const router = useRouter();
    const { id } = router.query;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(`Check out the property at ${mockdata.address} via this link: http://localhost:3000/listings/${id}`);
    }

    const sendMessage = () => {
        // Regex expression to remove all characters which are NOT alphanumeric
        let number = mockdata.agent.phone.replace(/[^\w\s]/gi, "").replace(/ /g, "");

        // Appending the phone number to the URL
        let url = `https://web.whatsapp.com/send?phone=${number}`;

        // Appending the message to the URL by encoding it
        url += `&text=${encodeURI('This is a test message')}&app_absent=0`;

        // Open our newly created URL in a new tab to send the message
        window.open(url);
    }

    return (
        <>
            <Head>
                <title>Proptory listing</title>
            </Head>
            <div className="w-full h-full flex flex-col space-y-4">
                <div className="text-xl font-bold" onClick={sendMessage}>
                    Send Whatsapp message
                </div>
            </div>
        </>
    )
}