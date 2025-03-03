import React from 'react'

const links = [
    {link:'About Me', section:'about'},
    {link:'Skills', section:'skills'},
    {link:'Experience', section:'experience'},
    {link:'Projects', section:'projects'},
    {link:'Contact', section:'contact'},
];
const NavbarLinks = () => {

  return (
    <ul className='flex gap-4 fond-bold text-center py-4 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-lg sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4'>
        {
            links.map((link, index) => (
                <li key={index} className='group'>
                    <a href={`#${link.section}`} className='cursor-pointer text-lg font-bold hover:text-cyan transition-all duration-500'>{link.link}</a>
                    <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                </li>
            ))
        }
    </ul>
  )
}

export default NavbarLinks
