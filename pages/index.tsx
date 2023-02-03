/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Inter } from '@next/font/google'
import { AuthPage } from '@/components/auth'

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