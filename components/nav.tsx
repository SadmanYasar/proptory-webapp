/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../utils/firebase';

export default function Nav() {
    // const [user, loading, error] = useAuthState(auth);
    const [toggled, setToggled] = useState(false);

    return (
        <div className='bg-pink-650 w-full fixed'>
            <nav className='py-5 mx-14 text-white'>
                {/* Tablet/Desktop Navbar */}
                <div className='w-full max-md:hidden flex justify-between items-center'>
                    <img
                        referrerPolicy="no-referrer"
                        className="w-12 h-12"
                        src={'logo_proptory/icon_only/color_with_background.jpg'}
                        alt="avatar"
                    />
                    <SearchBar />
                    <Link href={'/'}>
                        Login as agent
                    </Link>
                </div>

                {/* Mobile Navbar */}
                <div className='w-full md:hidden flex justify-between items-center'>
                    <img
                        referrerPolicy="no-referrer"
                        className="w-12 h-12"
                        src={'logo_proptory/icon_only/color_with_background.jpg'}
                        alt="avatar"
                    />
                    <HiMenuAlt3 className='fill-white w-12 h-12' onClick={() => setToggled(!toggled)} />
                </div>

                {/* Dropdown */}
                {toggled &&
                    <div className='w-full md:hidden flex flex-col justify-between'>
                        <SearchBar />
                        <Link href={'/'}>
                            Login as agent
                        </Link>
                    </div>}

                {/* <ul>
                 {(!user) && (
                     <Link href={'/auth/login'} legacyBehavior>
                         <a className='py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8'>
                             Join Now
                         </a>
                     </Link>
                 )
                 }
                 {user && (
                     <div>
                         <Link href={'/dashboard'}>
                             <img
                                 referrerPolicy="no-referrer"
                                 className="w-12 rounded-full"
                                 src={user.photoURL}
                                 alt="avatar"
                             />
                         </Link>
                     </div>
                 )}
             </ul> */}
            </nav>
        </div>

    );
}

function SearchBar() {
    return (
        <label className="relative block max-md:py-4 max-md:w-full md:w-6/12">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <AiOutlineSearch className='w-5 h-5 fill-slate-400' />
            </span>
            <input className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for listings" type="text" name="search" />
        </label>
    )
}