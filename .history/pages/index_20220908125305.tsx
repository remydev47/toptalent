import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FeaturedJobs }from '../components/FeaturedJobs'
import { Hero } from '../components/Hero'
import { LatestJobs } from '../components/Latestjobs'
import { TopCompanies } from '../components/TopCompanies'

const Home = () => {
  return (
    <>
     <Hero />
     <main className='mx-auto max-w-screen-xl px-6 sm:px-8'>
      <div className='mt-16 space-y-20'>
       <FeaturedJobs />
       <LatestJobs />
       <TopCompanies />
      </div>
     </main>
    </>
  )
}

export default Home

const styles = {
  container:`flex min-h-screen flex-col items-center justify-center py-2`
}