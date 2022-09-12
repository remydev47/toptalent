import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FeaturedJobs from '../components/FeaturedJobs'
import { Hero } from '../components/Hero'

const Home = () => {
  return (
    <>
     <Hero />
     <main>
       <FeaturedJobs />
     </main>
    </>
  )
}

export default Home

const styles = {
  container:`flex min-h-screen flex-col items-center justify-center py-2`
}