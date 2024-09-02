import React from 'react'
import { logo, jpgLogo } from '../assets'
import { contactLink } from '../constants'

const Navbar = () => {

  return (
    <nav className='w-full flex py-10 justify-between items-center navbar'>
      <img src={jpgLogo} alt='hoobank' className='w-[118px]'/>
      <div className='flex flex-row md:mt-0 mt-6'>
        {contactLink.map((item, index) => (
          <img
            src={item.icon}
            key={item.id}
            alt={item.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== item.length - 1 ? 'mr-6' : 'mr-0'}`}
          />
        ))}
      </div>    
    </nav>
  )
}

export default Navbar
