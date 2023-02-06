/* eslint-disable @next/next/no-img-element */
import { setNotification, useStateValue } from '@/state';
import { getFromStorage } from '@/utils/storage';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ListingDetailed } from '../listings/[id]';
import useSWR from 'swr';
import Agent from '@/db/models/agent';
import { fetcher } from '@/utils/fetcher';
import Card from '@/components/card';
import AddListingModal from '@/components/add_listing_modal';

export interface RoomInfo {
    bathroomCount: number;
    bedroomCount: number;
}
export interface Agent {
    data: Data;
}

interface Data {
    id: string;
    fullname: string;
    listings: ListingDetailed[];
}

export default function AgentProfile() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [{ searchVal }, dispatch] = useStateValue();
    const router = useRouter();
    const { id } = router.query;
    const { data, error, mutate } = useSWR<Agent | null>(id ? `/api/agents/${id}` : null, id ? fetcher : null);
    const contentType = 'application/json';

    useEffect(() => {
        if (getFromStorage('proptory-token') && getFromStorage('proptory-user')) {
            setLoggedIn(true);
        }
    }, [loggedIn]);

    const addListing = async (values: any) => {
        try {
            const response = await fetch(`/api/agents/${getFromStorage('proptory-user')}`, {
                method: 'POST',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                    Authorization: `Bearer ${getFromStorage('proptory-token')}`
                },
                body: JSON.stringify({
                    ...values
                })
            });

            // Throw error with status code in case Fetch API req failed
            const jsonResponse = await response.json();
            if (!response.ok) {
                throw new Error(jsonResponse.error);
            }

            data && mutate({
                ...data,
                data: {
                    ...data.data,
                    listings: [...data?.data.listings, jsonResponse]
                }
            });
            dispatch(setNotification({ message: `Successfully added ${values.name}`, type: 'success' }));
        } catch (error: any) {
            dispatch(setNotification({ message: 'Failed to add', type: 'error' }));
        }
    }

    if (error) return <p>Failed to load</p>
    if (!data) return <p>Loading...</p>

    return (
        <>
            <Head>
                <title>Agent Profile</title>
            </Head>
            <div className={`text-black text-3xl py-4 px-12 ${data?.data?.fullname ? '' : 'hidden'}`}>{`${data?.data?.fullname}'s listings`}</div>
            <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1'>
                {data?.data?.listings?.map((listing) =>
                    <Card key={listing.id} data={listing} />
                )}
            </div>
            {loggedIn && <AddListingModal addListing={addListing} />}
        </>
    )
}
