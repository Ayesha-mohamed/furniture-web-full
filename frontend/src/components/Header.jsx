import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <div className="flex justify-between px-20 items-center p-4 shadow-xl">
        <h1 className='text-4xl font-bold  '>Furni<span className=''>ture</span></h1>
        <ul className='flex gap-10 '>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/about' >  <li>About</li></NavLink>
       <NavLink to='/shop'>  <li>Shop</li></NavLink> 
       <NavLink to='/contact'> <li>Contact</li></NavLink> 
          <li className='flex gap-2 items-center'>
            <input className='border-2 border-gray-600 h-8 rounded-lg px-4 outline-none' type="search" name="" id="" />
            <i className='fa-solid fa-magnifying-glass text-2xl '></i>
          </li>
        </ul>
        <div className="flex gap-10">
          <button className='bg-blue-500 px-8 py-2  rounded-xl text-white'>Login</button>
          <button className='bg-blue-500 px-8 py-2  rounded-xl '>Sign up</button>

        </div>
      </div>
    </div>
  );
}

export default Header;