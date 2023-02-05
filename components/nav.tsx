/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useRouter } from 'next/router';
import logo from '../public/logo_proptory/icon_only/color_with_background.jpg';
import { login, logout, setSearch, useStateValue } from '@/state';
import Notification from './notification';
import { getFromStorage, removeFromStorage } from '@/utils/storage';

const routesToFilter = [
    '/',
]

export default function Nav() {
    // const [user, loading, error] = useAuthState(auth);
    const [toggled, setToggled] = useState(false);
    const [{ notification, loggedIn }, dispatch] = useStateValue();

    useEffect(() => {
        if (getFromStorage('proptory-token') && getFromStorage('proptory-user')) {
            dispatch(login());
        } else {
            dispatch(logout());
        }
    }, [])

    const router = useRouter();

    // hide nav on login screen
    if (routesToFilter.includes(router.asPath)) {
        return null;
    }

    const handleClick = () => {
        dispatch(logout());
        router.push('/');
    }

    return (
        <div className='bg-pink-650 w-full sticky top-0 z-40'>
            <nav className='py-5 mx-14 text-white'>
                {/* Tablet/Desktop Navbar */}
                <div className='w-full max-md:hidden flex justify-between items-center'>
                    <img
                        referrerPolicy='no-referrer'
                        className='w-12 h-12'
                        src={logo.src}
                        alt='avatar'
                        onClick={() => router.push('/listings?page=1')}
                    />
                    <SearchBar />
                    <div onClick={handleClick} className={!loggedIn ? '' : 'hidden'}>
                        Login as agent
                    </div>
                    <div className={loggedIn ? 'flex flex-row space-x-4' : 'hidden'}>
                        <div onClick={() => router.push(`/agents/${getFromStorage('proptory-user')}`)}>Profile</div>
                        <div onClick={handleClick}>Logout</div>
                    </div>
                </div>

                {/*  Mobile Navbar */}
                <div className='w-full md:hidden flex justify-between items-center'>
                    <img
                        referrerPolicy='no-referrer'
                        className='w-12 h-12'
                        src={logo.src}
                        alt='avatar'
                        onClick={() => router.push('/listings?page=1')}
                    />
                    <HiMenuAlt3 className='fill-white w-12 h-12' onClick={() => setToggled(!toggled)} />
                </div>

                {/* Dropdown */}
                {toggled &&
                    <div className='w-full md:hidden flex flex-col justify-between space-y-4'>
                        <SearchBar />
                        <div onClick={() => router.push(`/agents/${getFromStorage('proptory-user')}`)} className={loggedIn ? '' : 'hidden'}>Profile</div>

                        <div onClick={handleClick} className={!loggedIn ? '' : 'hidden'}>
                            Login as agent
                        </div>
                        <div onClick={handleClick} className={loggedIn ? '' : 'hidden'}>
                            Logout
                        </div>
                    </div>}
            </nav>
            <Notification />
        </div>
    );
}

function SearchBar() {
    const [{ searchVal }, dispatch] = useStateValue();
    const [search, setSearchVal] = useState(searchVal);
    const router = useRouter();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchVal(value);
    }

    const handleClick = () => {
        if (router.pathname !== '/listings') {
            router.push('/listings');
        }
        dispatch(setSearch(search.trim()));
    }

    return (
        <div className='flex flex-row justify-around max-md:py-4 max-md:w-full md:w-6/12'>
            <input className='placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-l-xl py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-slate-400 focus:ring-1 sm:text-sm text-slate-800' placeholder='Search for listings' type='text' name='search' value={search} onChange={onChange} />
            <button onClick={handleClick} className='py-2 px-2 text-white bg-black rounded-r-xl'>
                Search
            </button>
        </div>
        // <label className='relative block max-md:py-4 max-md:w-full md:w-6/12'>
        // <span className='sr-only'>Search</span>
        // {/* <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
        //     <AiOutlineSearch className='w-5 h-5 fill-slate-400' />
        // </span> */}
        // <input className='placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-slate-400 focus:ring-1 sm:text-sm text-slate-800' placeholder='Search for listings' type='text' name='search' value={search} onChange={onChange} />
        // <span className='absolute inset-y-0 h-10 right-0 flex items-center bg-gray-900 rounded-r-lg'>
        //     {/* <AiOutlineSearch className='w-5 h-5 fill-slate-400' /> */}
        //     <button className='py-2 px-2 text-white'>
        //         Search
        //     </button>
        // </span>
        // </label>

    )
}