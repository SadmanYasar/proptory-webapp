/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Inter } from '@next/font/google'
import { AuthPage } from '@/components/auth'
import { getFromStorage } from '@/utils/storage'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { setSearch, useStateValue } from '@/state'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [_, dispatch] = useStateValue();

  const router = useRouter();
  useEffect(() => {
    dispatch(setSearch(''));

    if (getFromStorage('proptory-token') && getFromStorage('proptory-user')) {
      router.push(`/agents/${getFromStorage('proptory-user')}`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>Proptory Web App</title>
        <meta name="description" content="Proptory Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthPage />
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