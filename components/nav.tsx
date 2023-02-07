/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useRouter } from 'next/router';
import logo from '../public/logo_proptory/icon_only/color_with_background.jpg';
import { login, logout, setSearch, useStateValue } from '@/state';
import Notification from './notification';
import { getFromStorage } from '@/utils/storage';
import SearchBar from './searchBar';

const routesToFilter = [
    '/',
]

export default function Nav() {
    // const [user, loading, error] = useAuthState(auth);
    const [toggled, setToggled] = useState(false);
    const [{ loggedIn }, dispatch] = useStateValue();

    useEffect(() => {
        if (getFromStorage('proptory-token') && getFromStorage('proptory-user')) {
            dispatch(login());
        } else {
            dispatch(logout());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        onClick={() => {
                            dispatch(setSearch(''))
                            router.push('/listings')
                        }}
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