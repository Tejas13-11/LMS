import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const { isEducator } = useContext(AppContext);

  const menuItems = [
    { name: 'Dashboard', icon: assets.home_icon, path: '/educator' },
    { name: 'Courses', icon: assets.add_icon, path: '/educator/courses' },
    { name: 'My Courses', icon: assets.my_course_icon, path: '/educator/my-courses' },
    { name: 'Student Enrolled', icon: assets.person_tick_icon, path: '/educator/student-enrolled' },
  ];

  return isEducator && (
    <div className='md:w-64 w-16 border-r min-h-screen text-base border-gray-500 py-2 flex flex-col'>
      {menuItems.map((item, index) => (
        <NavLink key={index} to={item.path} className='flex items-center gap-2 p-2 hover:bg-gray-200'>
          <img src={item.icon} alt={item.name} className='w-6 h-6' />
          <p className='md:block hidden text-center'>{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;