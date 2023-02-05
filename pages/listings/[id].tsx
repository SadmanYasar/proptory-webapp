import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TelegramIcon, TelegramShareButton, WhatsappShareButton } from "react-share";
import FacebookIcon from "react-share/lib/FacebookIcon";
import FacebookShareButton from "react-share/lib/FacebookShareButton";
import WhatsappIcon from "react-share/lib/WhatsappIcon";
import { RoomInfo } from "../agents/[id]";
import { MdContentCopy } from "react-icons/md"
import { AiFillCloseCircle } from "react-icons/ai"
import { BsShareFill } from "react-icons/bs"
import Link from "next/link";

export interface ListingDetailed {
    id: string;
    name: string;
    description: string;
    address: string;
    bathrooms: number;
    bedrooms: number;
    matterportId: string;
    price: number;
    agent: {
        id: string;
        phone: string;
    }
}

export default function Listing() {
    const [show, setShow] = useState(false);
    const [listing, setListing] = useState<ListingDetailed | null>(null);
    const router = useRouter();
    const { id } = router.query;
    const contentType = 'application/json';

    useEffect(() => {
        const loadListing = async () => {
            if (!router.isReady) return;
            try {
                const response = await fetch(`/api/listings/${id}`, {
                    method: 'GET',
                    headers: {
                        Accept: contentType,
                        'Content-Type': contentType,
                    },
                })
                const jsonResponse = await response.json();

                if (!response.ok) {
                    throw new Error(jsonResponse.error);
                }

                setListing(jsonResponse.data);
                console.log(jsonResponse);
                console.log(jsonResponse.data);
            } catch (error) {
                router.push('/');
            }
        }

        loadListing();
    }, [router.isReady])

    const copyToClipboard = () => {
        navigator.clipboard.writeText(`Check out the property at ${listing?.address} via this link: ${process.env.NEXT_PUBLIC_URI!}/${id}`);
    }

    const sendMessage = () => {
        // Regex expression to remove all characters which are NOT alphanumeric
        let number = listing?.agent.phone.replace(/[^\w\s]/gi, "").replace(/ /g, "");

        // Appending the phone number to the URL
        let url = `https://web.whatsapp.com/send?phone=${number}`;

        // Appending the message to the URL by encoding it
        url += `&text=${encodeURI(`Hi. I am interested to discuss about your listing at ${listing?.address}`)}&app_absent=0`;

        // Open our newly created URL in a new tab to send the message
        window.open(url);
    }

    return (
        <>
            <Head>
                <title>Proptory listing</title>
            </Head>
            <div className="w-full px-4 pt-4 grid md:grid-cols-2 max-md:grid-cols-1">
                <div className="bg-red-200 h-96 text-2xl text-slate-500">{listing?.address}</div>
                <div className="flex flex-col space-x-8 space-y-4 px-4 py-4 bg-red-50">
                    <div className="flex flex-row space-x-8 justify-between px-4 py-4 bg-red-50">
                        <div className="flex flex-row space-x-8">
                            <BsShareFill className="max-md:w-10 max-md:h-10 md:w-12 md:h-12" onClick={() => setShow(true)} />
                            <WhatsappIcon className="max-md:w-10 max-md:h-10 md:w-12 md:h-12 rounded-md" onClick={sendMessage} />
                        </div>
                        <div className="text-lg font-bold text-pink-650">
                            <Link href={`/listings/view3d/${listing?.matterportId}`} className="">View in 3D</Link>
                        </div>
                    </div>
                    <div className="text-2xl font-bold">{listing?.name}</div>
                    <div className="text-xl break-words">{listing?.description}</div>
                    <div className="text-lg font-bold text-pink-650">
                        <Link href={`/agents/${listing?.agent.id}`} className="">Agent Details</Link>
                    </div>
                    <div className="text-xl">🛁 {listing?.bathrooms}</div>
                    <div className="text-xl">🛏️ {listing?.bedrooms}</div>
                    <div className="text-4xl font-bold text-right">RM{listing?.price}</div>
                </div>
            </div>
            {show &&
                <div className="w-full h-full fixed backdrop-blur-sm space-x-4 space-y-4 shadow-lg z-50 top-0 flex flex-col items-center justify-center">
                    <div className="bg-white shadow-lg rounded-md px-12 py-12 flex flex-row space-x-4">
                        <WhatsappShareButton url={`Check out the property at ${listing?.address} via this link: ${process.env.NEXT_PUBLIC_URI!}/${listing?.matterportId}`}>
                            <WhatsappIcon className="rounded-md max-md:w-10 max-md:h-10" />
                        </WhatsappShareButton>
                        <FacebookShareButton url={`${process.env.NEXT_PUBLIC_URI!}/${listing?.matterportId}`}>
                            <FacebookIcon className="rounded-md max-md:w-10 max-md:h-10" />
                        </FacebookShareButton>
                        <TelegramShareButton url={`Check out the property at ${listing?.address} via this link: ${process.env.NEXT_PUBLIC_URI!}/${listing?.matterportId}`}>
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