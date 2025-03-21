import React from 'react';

import { assets,dummyTestimonial } from '../../assets/assets';

const TestimonialsSection = () => {
  return (
    <div className='pb-14 px-8 md:px-40'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3'>
        Hear from your learners as they share their journey of transformation, success, and growth with our courses. 
        Learn how our platform has helped them achieve their goals and dreams.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14'>
        {dummyTestimonial.map((testimonial, index) => (
          <div key={index} className='text-sm text-left border border-gray-500/30 p-5 rounded-lg bg-white shadow-md overflow-hidden'>
            {/* Testimonial Header */}
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
              <img src={testimonial.image} alt={testimonial.name} className='w-12 h-12 rounded-full' />
              <div>
                <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                <p className='text-gray-800/80'>{testimonial.role}</p>
              </div>
            </div>
 {/* Star Rating */}
 <div className='p-5 pb-7'>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    className='h-5'
                    alt="star"
                  />
                ))}
              </div>
             
            </div>
            {/* Testimonial Feedback */}
            <p className='text-gray-500 mt-5'>{testimonial.feedback}</p>

           
            <a href="#" className='text-blue-500 underline px-5'>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;