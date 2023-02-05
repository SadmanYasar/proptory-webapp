import Layout from "@/components/layout";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Listing() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <Head>
                <title>Proptory listing 3D view</title>
            </Head>
            <div className="w-full h-full z-50 fixed top-0 flex flex-row items-center justify-center">
                <iframe className="w-full h-full aspect-video border-0" src={`https://my.matterport.com/show/?m=${id}`} allowFullScreen></iframe>
            </div>
        </>
    )
}