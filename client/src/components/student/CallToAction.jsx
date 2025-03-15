import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
        <h1 className='text-xl md:text-4x1 text-gray-800 font-semibold'>Learn anything, anytime, anywhere</h1>
        <p className='text-gray-500 sm:text-sm'>"Unlock your potential today! 🚀 Join thousands of learners who are transforming their lives
           with our expert-led courses. Whether you're looking to upskill, switch careers, or follow your 
           passion, we have the right course for you. Don't wait—start your journey now and take the first step 
           toward success! Enroll today and make your dreams a reality."</p>
           <div className='flex item-center font-medium gap-6 mt-4'>
            <button className='px-10 py-3 rounded-md text-white bg-blue-600'>Get started</button>
            <button className='flex items-center gap-2'>Learn More <img src={assets.arrow_icon} alt="arrow_icon" /></button>
           </div>
        
        </div>
  )
}

export default CallToAction