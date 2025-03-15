import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CourseCard from './CourseCard'
import { AppContext } from '../../context/AppContext.jsx'

const CoursesSection = () => {
  const {allCourses}=useContext(AppContext)
  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3x1 font-medium text-gray-800" '>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>Welcome to our Comprehensive Course Section, where learning meets innovation! Whether you're a beginner or an experienced professional, our carefully curated courses are designed to help you master new skills, stay ahead in your career, and achieve your goals. Each course is crafted by industry experts and includes hands-on projects, real-world examples, and interactive lessons to ensure a practical and engaging learning experience. Explore a wide range of topics, from web development and data science to digital marketing and graphic design.</p>
    
    
    <div className='grid grid-cols-auto px-4 md:px-0 md:16   my-10 gap-4'>{allCourses.slice(0,4).map((course,index)=><CourseCard key={index} course={course}/>)}</div>
 
    
    
    <Link to={'/course-list'} onClick={()=> scroll(0,0)} className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'>
    Show all courses</Link>
    
    </div>
  )
}

export default CoursesSection