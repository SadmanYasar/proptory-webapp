import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { TelegramIcon, TelegramShareButton, WhatsappShareButton } from "react-share";
import FacebookIcon from "react-share/lib/FacebookIcon";
import FacebookShareButton from "react-share/lib/FacebookShareButton";
import WhatsappIcon from "react-share/lib/WhatsappIcon";
import { RoomInfo } from "../agents/[id]";
import { MdContentCopy } from "react-icons/md"
import { AiFillCloseCircle } from "react-icons/ai"

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
    const [show, setShow] = useState(false);
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
        url += `&text=${encodeURI(`Hi. I am interested to discuss about your listing at ${mockdata.address}`)}&app_absent=0`;

        // Open our newly created URL in a new tab to send the message
        window.open(url);
    }

    return (
        <>
            <Head>
                <title>Proptory listing</title>
            </Head>
            <div className="w-full px-4 grid md:grid-cols-2 max-md:grid-cols-1">
                <div className="bg-red-200 h-96 text-2xl">{mockdata.address}</div>
                <div>
                    <button onClick={() => setShow(true)} data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block text-white bg-pink-650 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                        Share
                    </button>
                </div>
            </div>
            {show &&
                <div className="w-full h-full fixed backdrop-blur-sm space-x-4 space-y-4 shadow-lg z-50 top-0 flex flex-col items-center justify-center">
                    <div className="bg-white shadow-lg rounded-md px-12 py-12 flex flex-row space-x-4">
                        <WhatsappShareButton url={`Check out the property at ${mockdata.address} via this link: http://localhost:3000/listings/${id}`}>
                            <WhatsappIcon className="rounded-md max-md:w-10 max-md:h-10" />
                        </WhatsappShareButton>
                        <FacebookShareButton url={`https://car.com/listings/${id}`}>
                            <FacebookIcon className="rounded-md max-md:w-10 max-md:h-10" />
                        </FacebookShareButton>
                        <TelegramShareButton url={`Check out the property at ${mockdata.address} via this link: http://localhost:3000/listings/${id}`}>
                            <TelegramIcon className="rounded-md max-md:w-10 max-md:h-10" />
                        </TelegramShareButton>
                        <MdContentCopy className="rounded-md max-md:w-10 max-md:h-10 md:w-16 md:h-16" onClick={copyToClipboard} />
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <AiFillCloseCircle className="rounded-md max-md:w-10 max-md:h-10 md:w-16 md:h-16" onClick={() => setShow(false)} />
                    </div>
                </div>}

        </>
    )
}