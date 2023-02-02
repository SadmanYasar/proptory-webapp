/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Inter } from '@next/font/google'
import router, { useRouter } from 'next/router'
import { removeUser, setUser, useStateValue } from '@/state'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Proptory Web App</title>
        <meta name="description" content="Proptory Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginPage />
      <style jsx global>
        {`
      body {
          background: #E61066;
       }
   `}
      </style>
    </>
  )
}

function LoginPage() {
  const router = useRouter();
  const [_, dispatch] = useStateValue();
  const [show, setShow] = useState(true);

  const changeToProfileRoute = () => {
    dispatch(setUser({
      name: 'TestAgent',
      token: '123',
      userName: 'Test Agent'
    }))
    router.push('/agents/1');
  }

  const changeToListingsRoute = () => {
    dispatch(removeUser());
    router.push('/listings');
  }

  return (
    <main className='w-full h-screen flex flex-col space-y-2 items-center bg-pink-650'>
      <img
        referrerPolicy='no-referrer'
        src={'logo_proptory/svg/white_transparent.svg'}
        alt='proptory-logo'
      />
      <div className='max-md:w-10/12 md:w-5/12 px-10 pb-8 bg-white shadow-md rounded-md'>
        <div className='w-full flex flex-col items-center pt-4 space-y-6'>
          <div className='w-full flex justify-around pt-4'>
            <div className={`border w-2/4 ${show ? 'border-pink-650 bg-pink-650 text-white' : 'bg-white border-gray-300 text-gray-400'} rounded-l-lg py-4 px-10`} onClick={() => setShow(!show)}>Login</div>
            <div className={`border w-2/4 ${!show ? 'border-pink-650 bg-pink-650 text-white' : 'bg-white border-gray-300 text-gray-400'} rounded-r-lg py-4 px-10`} onClick={() => setShow(!show)}>Signup</div>
          </div>
          {show && <>
            <label className="relative block max-md:py-4 w-full">
              <span className="sr-only">Username</span>
              <input className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" placeholder="Username" type="text" name="username" />
            </label>
            <label className="relative block max-md:py-4 w-full">
              <span className="sr-only">Password</span>
              <input className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-4 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" placeholder="Password" type="password" name="password" />
            </label>
            <div className='w-full py-4 bg-pink-650 rounded-lg text-center text-xl text-white' onClick={changeToProfileRoute}>Login as agent</div>
          </>}
          {!show && <>
            <label className="relative block max-md:py-4 w-full">
              <span className="sr-only">Username</span>
              <input className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-4 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" placeholder="Username" type="text" name="username" />
            </label>
            <label className="relative block max-md:py-4 w-full">
              <span className="sr-only">Password</span>
              <input className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-4 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-xl" placeholder="Password" type="password" name="password" />
            </label>
            <div className='w-full py-4 bg-pink-650 rounded-lg text-center text-xl text-white' onClick={() => setShow(true)}>Signup</div>
          </>}
          <div className='w-full text-center text-lg text-pink-650 font-bold'>OR</div>
          <div className='w-full text-center text-lg text-pink-650' onClick={changeToListingsRoute}>Continue as visitor</div>
        </div>
      </div>
    </main>
  )
}