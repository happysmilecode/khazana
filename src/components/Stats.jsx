import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} sm:mb-20 mb-6`}>
      <div className='w-full flex flex-col gap-6 sm:gap-16'>
        <p className='font-nunito font-normal text-[32px] text-white uppercase'>/ OUR EXPERIENCE</p>
        <div className='w-full flex justify-between'>
          {stats.map((stat) => (
            <div key={stat.id} className={`sm:flex-1 flex-col text-center`}>
              <h4 className='font-nunito font-semibold md:text-[116px] xs:text-[40px] text-[30px] text-gradient sm:leading-[116px]'>{stat.value}</h4>
              <p className='font-nunito font-normal xs:text-[24px] text-[15px] text-white'>{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default Stats
