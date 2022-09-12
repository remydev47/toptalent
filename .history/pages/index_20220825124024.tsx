import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav

const Home: NextPage = () => {
  return (
    <nav>
      <Head>
        <title>Clean Bees</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </nav>
  )
}

export default Home

const styles = {
  container:`flex min-h-screen flex-col items-center justify-center py-2`
}