import React from 'react'

const Header = () => {
  return (
    <>
     <header className={styles.container}>
        header
     </header>
    </>
  )
}

export default Header;
const styles ={
    container:`sticky inset-x-0 top-0 z-20 flex items-center justify-between bg-white py-2 px-2 shadow-lg dark:bg-slate-900`
}