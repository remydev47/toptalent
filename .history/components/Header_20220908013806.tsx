import React from 'react'
import { Button } from './Button';
import Logo from './Logo';
import { ThemeToggle } from './ThemeToogle';
import Link from 'next/link';

const Header = () => {
  return (
    <>
     <header className={styles.container}>
        <div className={styles.menubtn}>Menu btn</div>
        <div className={styles.logo}>
            <Link href={'/#'} passHref>
             <a className='my-auto flex w-[140px] md:ml-0'>
              <Logo />
             </a>
            </Link>
            <div className='hidden gap-2 md:ml-2 md:flex'>
             <Link href={'/#'} passHref> 
             <Button as='a' variant='ghost' className='hidden md:inline-flex'>
                Companies
             </Button>
            </Link>
            <Button variant='ghost' className='hidden md:inline-flex'>
                Jobs
            </Button>
            </div>
        </div>
        <div className={`${styles.themebtn} relative gap-2`}>
           <Link href={'/#'} passHref> 
             <Button as='a' variant='outline' className='hidden md:inline-flex'>
                For Employers
             </Button>
            </Link>
            <Button className='hidden md:inline-flex'>
                SignIn
            </Button>
            <ThemeToggle />
        </div>
     </header>
    </>
  )
}

export default Header;
const styles ={
    container:`sticky inset-x-0 top-0 z-20 flex items-center justify-between bg-white py-2 px-2 shadow-lg dark:bg-slate-900 sm:py-3 sm:px-8`,
    logo:`flex grow-0 basis-1/3 justify-center md:justify-start`,
    menubtn:`flex grow-0 basis-1/3 md:hidden`,
    themebtn:`flex grow-0 basis-1/3 justify-end`,
}