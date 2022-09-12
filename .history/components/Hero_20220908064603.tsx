import React, {useState} from 'react'
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { IconButton } from './Button'

export const Hero = () => {
    const [showBanner, setShowBanner] = useState(true)
    return (
        <>
         <div className={styles.container}>
            <Image 
              src="/img/corporate.jpg"
              layout='fill'
              alt='corporate'
              objectFit='cover'
            />
           <div className={styles.wrapper}>
              <div className={styles.wrapper2}>
                <div className='m-6 min-h-[60px]'>
                    {<InnerBanner
                      show={showBanner}
                      onClose={() => setShowBanner(false)}
                    />}
                </div>
              </div>
              <div className='mx-4 mt-16 flex flex-col items-center text-center '>
                <h1 className={styles.innerbanner}>
                    Discover your future
                </h1>
                <span className='text-xl text-white sm:text-2xl'>
                    Find your next Job
                </span>
                <div className='mt-8'>
                    <SearchForm />
                </div>
              </div>
           </div> 
         </div>
        </>
    )
}

export const InnerBanner: React.FC<{ show: boolean; onClose: () => void }> = ({ show, onClose,}) => {
    return(
        <Transition
         show={show}
         enter="transition-opacity duration-75"
         enterFrom="opacity-0"
         enterTo="opacity-100"
         leave="transition-opacity duration-150"
         leaveFrom="opacity-100"
         leaveTo="opacity-0"
        >
        <div className={styles.mainBanner}>
            <p>
                Welcome to <span className='font-bold'>HIREDLA</span>. An easier and 
                faster job discovery Platform
            </p>
            <span className="absolute top-1 right-1 sm:top-2 sm:right-2">
          <IconButton
            aria-label="close banner"
            variant="ghost"
            size="sm"
            
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
          </span>
         </div>
        </Transition>
    )
}

const SearchForm = () => {
    return(
         <form onSubmit={(e) => e.preventDefault()} className='' >
            <div className={styles.formcontainer}>
                <input type="text" aria-label='search' placeholder='Job title...' />
                <button className='hidden sm:block' type='submit'>
                    Discover Now!
                </button>
            </div>
         </form>
    )
}

const styles ={
    container:`relative h-[640px] w-full  bg-red-500/20 sm:h-[55vh] md:h-[440px]`,
    wrapper:`absolute inset-0 bg-neutral-900/70`,
    wrapper2:`mx-auto max-w-screen-lg `,
    innerbanner:`text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl`,
    mainBanner:`relative rounded bg-gradient-to-r from-purple-500 to-indigo-800 py-3 px-8 text-white shadow-lg md:rounded-full`,
    formcontainer:`flex items-center overflow-hidden rounded-full bg-white shadow-md`
}