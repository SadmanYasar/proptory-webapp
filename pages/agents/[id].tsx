/* eslint-disable @next/next/no-img-element */
import Layout from '@/components/layout';
import { useStateValue } from '@/state';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

interface Listing {
    id: string;
    name: string;
    description: string;
    created: string;
    visibility: string;
    state: string;
    image: {
        url: string;
    };
    address: {
        streetAddressLines: string[];
    };
}

const mockData: Listing[] = [
    {
        "id": "zxaRzMEw2kg",
        "name": "MXCAGMPT",
        "description": "",
        "created": "2022-03-25T12:14:24Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/zxaRzMEw2kg/images/Zkk5w98cnq7/Zkk5w98cnq7-Kitchen.jpg?t=2-9d116e9a961941d111072280c1312c08235dee78-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
                "Jalan Perimbun 27/11",
                "591 Damansara SA"
            ]
        }
    },
    {
        "id": "zvsnxftcvJW",
        "name": "OEYTVMUW",
        "description": "B-06-04 The Academia @ South City Plaza",
        "created": "2022-07-19T05:40:52Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/zvsnxftcvJW/images/c7ajeFyJyVU/c7ajeFyJyVU-Bedroom.jpg?t=2-a1f3680bbea9f7b422d82f68e8d947447a48a20a-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
                "Jalan Serdang Raya"
            ]
        }
    },
    {
        "id": "zumY6UWL522",
        "name": "TVAMOUGE",
        "description": "L32-1(S) Hill10 Residence",
        "created": "2022-07-02T03:34:32Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/zumY6UWL522/images/fNT7jcpXXQt/fNT7jcpXXQt-Kitchen.jpg?t=2-057b48f84e76c643f3d07b84fa437ca54edcdb84-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
                "Persiaran Multimedia"
            ]
        }
    },
    {
        "id": "ztWCDuvb1K9",
        "name": "ZAJIFWWV",
        "description": "",
        "created": "2022-03-12T09:26:20Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/ztWCDuvb1K9/images/H9fGE5eg4XT/H9fGE5eg4XT-Living_Room.jpg?t=2-444edadae9845132d3021738c2ecb4a0d75d3326-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
                "2-32 Jalan Klang Lama",
                "Taman Shanghai"
            ]
        }
    },
    {
        "id": "zqdnMNNBrYU",
        "name": "GSVKYZHW",
        "description": "MR1-08-04 Sri Acappella Serviced Apartments",
        "created": "2022-07-05T06:37:51Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/zqdnMNNBrYU/images/1F8NxESSFMt/1F8NxESSFMt-Photo_02.jpg?t=2-bb9b30ce87ead18e4bd9b08758839b4a9f9517c4-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
                "1 Jalan Lompat Tinggi 13/33"
            ]
        }
    },
    {
        "id": "zkzfDVWHywg",
        "name": "LTXDSMXI",
        "description": "",
        "created": "2022-05-09T03:53:34Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/zkzfDVWHywg/images/H1G3xq7eTnC/H1G3xq7eTnC-Living_Room.jpg?t=2-aba9e928dd288b5dbb29147282e724625972429f-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
                "Maju Expressway"
            ]
        }
    },
    {
        "id": "zks9j3rZNmA",
        "name": "TDTJAGQR",
        "description": "",
        "created": "2022-08-13T11:59:16Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/zks9j3rZNmA/images/MLhL8AoShoW/MLhL8AoShoW-Photo_02.jpg?t=2-26380a7c24fc73136da8e840154f41dd4b4a0dc5-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
            ]
        }
    },
    {
        "id": "zhncwX7Zkxp",
        "name": "YCOWZPMB",
        "description": "",
        "created": "2022-04-14T07:52:29Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/zhncwX7Zkxp/images/9JJNEUctBiG/9JJNEUctBiG-Dining_Room.jpg?t=2-f23f490efd49e706e710b59fd3b37bdd2785b1c3-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
                "1 Jalan PJS 8/9",
                "Bandar Sunway"
            ]
        }
    },
    {
        "id": "zdspHrdpiek",
        "name": "STDMMDMP",
        "description": "Mutiara Ville",
        "created": "2022-07-14T11:04:34Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/zdspHrdpiek/images/boZgQ4oqDmi/boZgQ4oqDmi-Living_Room.jpg?t=2-21af2225fbcd8fd864225504ee2378a2eac27be8-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
                "Jalan Tanpa Nama",
                "Cyberjaya"
            ]
        }
    },
    {
        "id": "zasYf22gxpy",
        "name": "BNEWIOCY",
        "description": "C-12-05 (Koi Kinrara Service Suite)",
        "created": "2022-07-23T07:46:52Z",
        "visibility": "private",
        "state": "inactive",
        "image": {
            "url": "https://cdn-2.matterport.com/apifs/models/zasYf22gxpy/images/SVRNv4BvaWb/SVRNv4BvaWb-Living_Room.jpg?t=2-3603def2ae814cf13526a25784092e24ec2d2079-1675307792-1"
        },
        "address": {
            "streetAddressLines": [
            ]
        }
    }
]

interface RoomInfo {
    bathroomCount: number;
    bedroomCount: number;
}
interface Listing2 {
    id: string;
    name: string;
    description: string;
    created: string;
    address: {
        streetAddressLines: string[];
    }
    roomInfo: RoomInfo;
    price: number;
}

const mockData2: Listing2[] = [
    {
        "id": "zxaRzMEw2kg",
        "name": "MXCAGMPT",
        "description": "Mock Description",
        "created": "2022-03-25T12:14:24Z",
        "address": {
            "streetAddressLines": [
                "Jalan Perimbun 27/11",
                "591 Damansara SA"
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 2000
    },
    {
        "id": "zvsnxftcvJW",
        "name": "OEYTVMUW",
        "description": "B-06-04 The Academia @ South City Plaza",
        "created": "2022-07-19T05:40:52Z",
        "address": {
            "streetAddressLines": [
                "Jalan Serdang Raya"
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 1500
    },
    {
        "id": "zumY6UWL522",
        "name": "TVAMOUGE",
        "description": "L32-1(S) Hill10 Residence",
        "created": "2022-07-02T03:34:32Z",
        "address": {
            "streetAddressLines": [
                "Persiaran Multimedia"
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 2200
    },
    {
        "id": "ztWCDuvb1K9",
        "name": "ZAJIFWWV",
        "description": "",
        "created": "2022-03-12T09:26:20Z",
        "address": {
            "streetAddressLines": [
                "2-32 Jalan Klang Lama",
                "Taman Shanghai"
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 1300
    },
    {
        "id": "zqdnMNNBrYU",
        "name": "GSVKYZHW",
        "description": "MR1-08-04 Sri Acappella Serviced Apartments",
        "created": "2022-07-05T06:37:51Z",
        "address": {
            "streetAddressLines": [
                "1 Jalan Lompat Tinggi 13/33"
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 500
    },
    {
        "id": "zkzfDVWHywg",
        "name": "LTXDSMXI",
        "description": "",
        "created": "2022-05-09T03:53:34Z",
        "address": {
            "streetAddressLines": [
                "Maju Expressway"
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 800
    },
    {
        "id": "zks9j3rZNmA",
        "name": "TDTJAGQR",
        "description": "",
        "created": "2022-08-13T11:59:16Z",
        "address": {
            "streetAddressLines": [
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 900
    },
    {
        "id": "zhncwX7Zkxp",
        "name": "YCOWZPMB",
        "description": "",
        "created": "2022-04-14T07:52:29Z",
        "address": {
            "streetAddressLines": [
                "1 Jalan PJS 8/9",
                "Bandar Sunway"
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 250
    },
    {
        "id": "zdspHrdpiek",
        "name": "STDMMDMP",
        "description": "Mutiara Ville",
        "created": "2022-07-14T11:04:34Z",
        "address": {
            "streetAddressLines": [
                "Jalan Tanpa Nama",
                "Cyberjaya"
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 20
    },
    {
        "id": "zasYf22gxpy",
        "name": "BNEWIOCY",
        "description": "C-12-05 (Koi Kinrara Service Suite)",
        "created": "2022-07-23T07:46:52Z",
        "address": {
            "streetAddressLines": [
            ]
        },
        roomInfo: {
            bathroomCount: 2,
            bedroomCount: 3
        },
        price: 300
    }
]

export default function AgentProfile() {
    const [loggedIn, setLoggedIn] = useState(true);
    const [{ searchVal }] = useStateValue();

    // check if loggedin
    // if so, 
    //      show 'Your listings'
    //      show Edit option in each listing'
    //      show add button
    // else show '${Agentname}'s listings'

    return (
        <>
            <Head>
                <title>Agent Profile</title>
            </Head>
            <div className='text-black text-3xl py-4 px-12'>{loggedIn ? 'Your Listings' : ''}</div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1'>
                {mockData2.map(({ id, name, description, address, price, roomInfo }) => {
                    return (
                        <div key={id} className='h-96 my-12 mx-12 shadow-lg rounded-md grid grid-rows-2'>
                            <div className="w-full h-full relative rounded-t-md bg-pink-200">
                                {/* <Image
                                src={'/assets/listingImg.jpg'}
                                alt="listing-image"
                                fill
                                style={{
                                    objectFit: 'cover'
                                }}
                                className="rounded-l-md"
                            /> */}
                                <div className='w-full h-full flex flex-col items-center justify-center'>
                                    {address.streetAddressLines.map((a, i) =>
                                        <div key={i} className='text-2xl'>
                                            {a}
                                        </div>)}
                                </div>
                            </div>
                            <div className='w-full h-full flex flex-col mx-4 my-4 space-y-4 text-lg'>
                                <div className='text-2xl font-bold'>RM{price}</div>
                                <div>{name}</div>
                                <div className="w-[250px]">
                                    <div className='truncate'>{description}</div>
                                </div>
                                <div className='flex flex-row space-x-10'>
                                    <div>bath: {roomInfo.bathroomCount}</div>
                                    <div>bed: {roomInfo.bedroomCount}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}