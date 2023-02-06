import { useEffect, useState } from "react";
import { ListingDetailed } from "./[id]";
import useSWR from 'swr';
import { useRouter } from "next/router";
import { fetcher } from "@/utils/fetcher";
import Card from "@/components/card";
import { useStateValue } from "@/state";
import Head from "next/head";

interface Pagination {
    pagination: {
        count: number;
        pageCount: number;
    },
    items: ListingDetailed[];
}

export default function Listings() {
    const router = useRouter();
    const [{ searchVal }, dispatch] = useStateValue();
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const { data, error } = useSWR<Pagination>(`/api/listings?page=${page}&search=${(searchVal.length === 0 || searchVal.length > 5) ? searchVal : ''}`, fetcher);

    useEffect(() => {
        if (data) {
            setPageCount(data.pagination.pageCount);
        }
    }, [data]);

    function handlePrevious() {
        setPage((p) => {
            if (p === 1) return p;
            return p - 1;
        });
    }

    function handleNext() {
        setPage((p) => {
            if (p === pageCount) return p;
            return p + 1;
        });
    }

    if (error) {
        return <div>{JSON.stringify(error)}</div>;
    }

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Head>
                <title>Listings</title>
                <meta name="description" content="Listings" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="md:text-3xl max-md:xl  mx-12 py-4">{searchVal ? `Search Results on '${searchVal}'` : `${data.pagination.count} Total Listings`}</div>
            <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1'>
                {data.items.map((item) => {
                    return (
                        <Card key={item.id} data={item} />
                    );
                })}
            </div>

            <footer className="w-full flex flex-row items-center justify-center space-x-4 py-4 px-4 max-md:text-md md:text-xl">
                <button disabled={page === 1} onClick={handlePrevious}>
                    Previous
                </button>
                <div>
                    Page {page} of {pageCount}
                </div>
                <button disabled={page === pageCount} onClick={handleNext}>
                    Next
                </button>

                {/* <select
                    value={page}
                    onChange={(event) => {
                        setPage(Number(event.target.value));
                    }}
                >
                    {Array(pageCount)
                        .fill(null)
                        .map((_, index) => {
                            return <option key={index}>{index + 1}</option>;
                        })}
                </select> */}
            </footer>
        </>
    );
}