import React from 'react'
import { PiArrowDownRightBold } from "react-icons/pi";

const NavbarBtn = () => {
  return (
    <button className='px-4 py-2 rounded-full text-xl font-bold border-cyan flex items-center gap-2 bg-gradient-to-r from-cyan to-blue hover:scale-110 transition-all duration-300'>
        Hire Me
        <div className='sm:hidden md:block'>
             <PiArrowDownRightBold />
        </div>
    </button >
  )
}
export default NavbarBtn
