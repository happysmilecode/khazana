import React from 'react'
import { stats } from '../constants'
import styles from '../style'
import { icArrow } from '../assets'

// @mui
import {
    FormControl, Button, Typography, IconButton, InputAdornment, Stepper, Step, StepLabel, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Autocomplete,
} from '@mui/material';

const Skills = () => {
  return (
    <section className={`${styles.flexCenter} sm:mb-20 mb-16`}>
        
        <div className='w-full flex flex-col gap-16'>
            <Typography variant='' className='text-white text-[32px] w-full leading-[70px] uppercase'>/ Skills</Typography>
            <div className='w-full flex flex-col gap-5'>
                <div className='flex gap-10 items-center feature-card rounded-[5px] '>
                    <img src={icArrow} className='' />
                    <div className='flex flex-col md:flex-row items-center border-b border-[##7099C7] w-full'>
                        <Typography variant='' className='text-white text-[32px] w-full leading-[70px]'>Back-end</Typography>
                        <p style={{color: 'white'}}>Our back-end expertise spans Python frameworks like Django, Flask, and FastAPI, as well as Node.js with Express and NestJS, PHP with CodeIgniter, Laravel, and CakePHP, and C# with ASP.NET. This diverse range of capabilities allows us to tackle complex server-side challenges and deliver robust, scalable, and secure applications.</p>
                    </div>
                </div>
                <div className='flex gap-10 items-center hover:bg-gradient feature-card rounded-[5px]'>
                    <img src={icArrow} className='' />
                    <div className='flex flex-col md:flex-row items-center border-b border-[##7099C7] w-full'>
                        <Typography variant='' className='text-white text-[32px] w-full leading-[70px]'>Front-end:</Typography>
                        <p style={{color: 'white'}}>In the front-end domain, we excel in building dynamic and responsive user interfaces using popular frameworks such as React, Angular, and Vue. Our front-end developers are adept at crafting visually appealing and intuitive web experiences that engage users and drive business success.</p>
                    </div>
                </div>
                <div className='flex gap-10 items-center feature-card rounded-[5px]'>
                    <img src={icArrow} className='' />
                    <div className='flex flex-col md:flex-row items-center border-b border-[##7099C7] w-full'>
                        <Typography variant='' className='text-white text-[32px] w-full leading-[70px]'>Blockchain:</Typography>
                        <p style={{color: 'white'}}>Recognizing the growing importance of blockchain technology, Codeverse Technologies also offers specialized services in this domain. Our experts are well-versed in developing smart contracts, working with the Solana blockchain, and leveraging Solidity to create innovative decentralized applications.</p>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Skills
