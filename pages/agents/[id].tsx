import Layout from "@/components/layout";
import { useStateValue } from "@/state";
import Head from "next/head";
import { useState } from "react";

export default function AgentProfile() {
    const [loggedIn, setLoggedIn] = useState(true);
    const [{ searchVal }] = useStateValue();

    // check if loggedin
    // if so, 
    //      show "Your listings"
    //      show Edit option in each listing"
    //      show add button
    // else show "${Agentname}'s listings"

    return (
        <>
            <Head>
                <title>Agent Profile</title>
            </Head>
            <div className="text-black text-3xl">{loggedIn ? 'Your Listings' : ''}</div>
            <div className="text-black text-3xl">{searchVal}</div>
        </>
    )
}