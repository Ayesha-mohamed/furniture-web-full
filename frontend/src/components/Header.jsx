import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header(props) {

  const getUser = localStorage.getItem("user")

  const handleLogout = () =>{
    localStorage.removeItem("user")
  }

  const cartCount = JSON.parse(localStorage.getItem("cart")) || []

  const count = cartCount.length

  


  return (
    <div>
      <div className="flex justify-between px-20 items-center p-4 ">
        <h1 className='text-4xl font-bold  '>Furni<span className='text-yellow-800'>ture</span></h1>
        
        <ul className='flex gap-10 '>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/about' >  <li>About</li></NavLink>
       <NavLink to='/shop'>  <li>Shop</li></NavLink> 
       <NavLink to='/contact'> <li>Contact</li></NavLink> 
        </ul>

    {
      getUser ? <div className="flex ">
        <div className="w-10 h-10 rounded-full bg-yellow-800 text-center mr-5">

        <h1 className='  text-center text-2xl font-bold text-black '>{JSON.parse(getUser).data?.customer.name[0]}</h1>
        <h1 className=' text-white text-center pt-2 '>{JSON.parse(getUser).data?.customer.name[0]}</h1>
        </div>
                         
 <Link to='/login'> <button onClick={handleLogout}  className=' px-3 py-2 mr-10' ><i className="fa-solid fa-right-from-bracket text-2xl "></i></button></Link>

      </div>

:
<div className="flex gap-10">
          <NavLink to="/login"><button className='bg-blue-950 px-8 py-2  rounded-md text-white'>Login</button></NavLink>
          <NavLink to="/signUp"><button className='bg-transparent px-8 py-2 border-2 border-black  rounded-md '>Sign up</button></NavLink>
</div>
      
    }


        <div className="flex items-center gap-10">

          <NavLink to='/cart'> <i className="fa-solid fa-cart-shopping text-3xl"></i></NavLink>
            <span className='bg-red-500 text-white rounded-full px-2 absolute right-16 -mt-3 ml-3 text-sm'>{count}</span>

        </div>
      </div>
    </div>
  );
}

export default Header;