import Image from 'next/image'

export const Hero = () => {
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
                    {<InnerBanner/>}
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
                    search form
                </div>
              </div>
           </div> 
         </div>
        </>
    )
}

export const InnerBanner = () => {
    return(
        <div className={styles.mainBanner}>
            <p>
                Welcome to <span className='font-bold'>HIREDLA</span>. An easier and 
                faster job discovery Platform
            </p>
        </div>
    )
}

const styles ={
    container:`relative h-[640px] w-full  bg-red-500/20 sm:h-[55vh] md:h-[440px]`,
    wrapper:`absolute inset-0 bg-neutral-900/70`,
    wrapper2:`mx-auto max-w-screen-lg `,
    innerbanner:`text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl`,
    mainBanner:`relative rounded bg-gradient-to-r from-purple-500 to-indigo-800 py-3 px-8 text-white shadow-lg md:rounded-full`
}