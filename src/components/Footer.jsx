import React from 'react'
import styles from '../style'
import { logo, jpgLogo } from '../assets'
import { contactLink } from '../constants'
import { Typography } from '@mui/material'

// Components
import WhiteTextField from './WhiteTextField';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#333333]'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} flex flex-col gap-10 pt-10 pb-20`}>
          <div className='w-full flex flex-col sm:flex-row justify-between sm:items-center'>
            <Typography variant='' className='w-full text-[52px] sm:text-[116px] text-gradient uppercase'>Get in touch</Typography>
            <Typography variant='' className='text-white sm:max-w-[260px]'>Leave your name and phone number so we can contact you as soon as possible</Typography>
          </div>
          <div className='flex flex-col sm:flex-row justify-between gap-16'>
            <div className='w-full flex flex-col sm:flex-row items-center gap-6'>
              <WhiteTextField className='white-input'
                label="Your name"
                name="name"
                type="text"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder='Enter your name'
              />
              <WhiteTextField className='white-input'
                label="Phone"
                name="name"
                type="text"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder='+1 111 111 11 11'
              />
            </div>

            <button type='button' className={`w-full sm:w-[291px] py-4 px-6 bg-blue-gradient font-nunito font-medium text-[18px] text-white outline-none rounded-[10px]`}>
              Submit
            </button>
          </div>
        </div>
        
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} border-t-[1px] border-t-white`}>
        <div className={`${styles.boxWidth} my-6`}>
          <div className='w-full flex flex-col sm:flex-row justify-between items-center'>
            <Link to="/">
              <img src={jpgLogo} alt='logo' className='w-[106px] object-contain' />  
            </Link>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
