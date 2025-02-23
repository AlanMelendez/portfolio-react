import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'


const Navbar = () => {

    const [menuOPen, setMenuOpen] = useState(false);
    const handleMenu = () => {
        setMenuOpen(!menuOPen);
    }

  return (
    <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2'>
        <section className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] !border-orange text-white">
            <NavbarLogo  />
            <div className={`${menuOPen ? "sm:block" : "sm:hidden"} lg:block`}>
                <NavbarLinks />
            </div>
            <NavbarBtn />
        </section>
        <section className='flex lg:hidden sm:block p-6 bg-black item-center justify-center rounded-full border-[0.5p] border-r-darkOrange text-white'>
         <button onClick={handleMenu}  className='text-2xl p-3 border rounded-full text-white'>
            <GiHamburgerMenu />
         </button>
        </section>
        
    </nav>
  )
}

export default Navbar
