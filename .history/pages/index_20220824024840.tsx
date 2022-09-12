import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components'

const Home: NextPage = () => {
  return (
    <nav className={styles.container}>
      <Head>
        <title>3D porfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Navbar />
      
    </nav>
  )
}

export default Home

const styles = {
  container:`flex min-h-screen flex-col items-center justify-center py-2`
}