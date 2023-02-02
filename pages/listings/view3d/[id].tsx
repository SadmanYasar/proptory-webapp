import Layout from "@/components/layout";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Listing() {
    const router = useRouter();
    const { id } = router.query;
    console.log(id);
    return (
        <>
            <Head>
                <title>Proptory listing 3D view</title>
            </Head>
            <iframe className="w-full h-full aspect-video" src={`https://my.matterport.com/show/?m=${id}`} allowFullScreen frameBorder={0}></iframe>
        </>
    )
}