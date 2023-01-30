import Head from 'next/head'
import { Inter } from '@next/font/google'

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
      <main>
        {/* <iframe
          className="w-full aspect-video"
          src="https://my.matterport.com/show/?m=QKXyLp3Kd6k"
          frameBorder={0}
          allowFullScreen
          allow="xr-spatial-tracking"
        /> */}
      </main>
    </>
  )
}
