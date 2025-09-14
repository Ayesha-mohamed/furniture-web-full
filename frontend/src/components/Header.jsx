import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <div className="flex justify-between px-20 items-center p-4 ">
        <h1 className='text-4xl font-bold  '>Furni<span className=''>ture</span></h1>
        <ul className='flex gap-10 '>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/about' >  <li>About</li></NavLink>
       <NavLink to='/shop'>  <li>Shop</li></NavLink> 
       <NavLink to='/contact'> <li>Contact</li></NavLink> 
        </ul>
        <div className="flex items-center gap-10">
          <NavLink to="/login"><button className='bg-blue-500 px-8 py-2  rounded-md text-white'>Login</button></NavLink>
          <NavLink to="/signUp"><button className='bg-transparent px-8 py-2 border-2 border-black  rounded-md '>Sign up</button></NavLink>
          <NavLink to='/cart'> <i className="fa-solid fa-cart-shopping text-3xl"></i></NavLink>
            <span className='bg-red-500 text-white rounded-full px-2 absolute right-16 -mt-3 ml-3 text-sm'>0</span>

        </div>
      </div>
    </div>
  );
}

export default Header;