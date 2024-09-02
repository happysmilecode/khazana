import React from 'react'
import { stats } from '../constants'
import styles from '../style'
import { icArrow, portfolio_1, portfolio_2, portfolio_3, portfolio_4, } from '../assets'

// @mui
import {
    Grid, Button, Typography, IconButton, InputAdornment, Stepper, Step, StepLabel, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Autocomplete,
} from '@mui/material';

const Portfolio = () => {
  return (
    <section className={`${styles.flexCenter} sm:mb-20 mb-6`}>
        <div className='flex flex-col gap-16'>
            <p className='font-nunito font-normal text-[32px] text-white uppercase'>/ PORTFOLIO</p>
            <Grid container spacing={4} >
                <Grid item md={6} xs={12}>
                    <div className='w-full p-10 flex flex-col gap-6 bg-[#333333]'>
                        <img src={portfolio_1} className='w-full h-full over-cover' />
                        <div className='flex justify-between items-end'>
                            <div className='flex flex-col gap-3'>
                                <Typography variant='' className='text-[30px] text-white'>VARLEY</Typography>
                                <Typography variant='' className='text-[16px] text-white'>Design for an online women's wear shop</Typography>
                            </div>
                            <div className='cursor-pointer bg-[#2A9CDC] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[77px] h-[77px] flex items-center justify-center'>
                                <img src={icArrow} className='w-[22px]' />
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <div className='w-full p-10 flex flex-col gap-6 bg-[#333333]'>
                        <img src={portfolio_2} className='w-full h-full over-cover' />
                        <div className='flex justify-between items-end'>
                            <div className='flex flex-col gap-3'>
                                <Typography variant='' className='text-[30px] text-white'>MOONX</Typography>
                                <Typography variant='' className='text-[16px] text-white'>LAUNCH PAD For Brands & People</Typography>
                            </div>
                            <div className='cursor-pointer bg-[#2A9CDC] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[77px] h-[77px] flex items-center justify-center'>
                                <img src={icArrow} className='w-[22px]' />
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <div className='w-full p-10 flex flex-col gap-6 bg-[#333333]'>
                        <img src={portfolio_3} className='w-full h-full over-cover' />
                        <div className='flex justify-between items-end'>
                            <div className='flex flex-col gap-3'>
                                <Typography variant='' className='text-[30px] text-white'>LODGISTICS</Typography>
                                <Typography variant='' className='text-[16px] text-white'>Cloud-based hotel operations</Typography>
                            </div>
                            <div className='cursor-pointer bg-[#2A9CDC] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[77px] h-[77px] flex items-center justify-center'>
                                <img src={icArrow} className='w-[22px]' />
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <div className='w-full p-10 flex flex-col gap-6 bg-[#333333]'>
                        <img src={portfolio_4} className='w-full h-full over-cover' />
                        <div className='flex justify-between items-end'>
                            <div className='flex flex-col gap-3'>
                                <Typography variant='' className='text-[30px] text-white'>GEMPAD</Typography>
                                <Typography variant='' className='text-[16px] text-white'>Cutting-edge platform for multi-chain decentralized launchpad</Typography>
                            </div>
                            <div className='cursor-pointer bg-[#2A9CDC] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[77px] h-[77px] flex items-center justify-center'>
                                <img src={icArrow} className='w-[22px]' />
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    </section>
  )
}

export default Portfolio;
