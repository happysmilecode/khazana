import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../style'

// @mui
import { Typography, Box, } from '@mui/material';

const Video = () => {
  return (
    <section className={`${styles.flexCenter} sm:mb-20 mb-6`}>
        <div className='w-full flex flex-col items-end gap-10'>
            <Box className="sm:h-[645px] h-[345px] w-full bg-[#333333] flex items-center justify-center">
                <Typography variant='' className='text-[18px] text-white'>Video</Typography>
            </Box>
            <Link to="https://gempad.app/presale/all" className='font-italic text-white font-normal'>https://gempad.app/presale/all</Link>
        </div>
      
    </section>
  )
}

export default Video;
