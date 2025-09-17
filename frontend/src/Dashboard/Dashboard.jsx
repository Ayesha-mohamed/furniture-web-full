
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Dashboard(props) {

      const handleLogout = () =>{
    localStorage.removeItem("admin")
  }


    return (
        <div >
            <div className="w-48 h-screen fixed bg-[#19183B] text-white ">
                <div className="mt-32 ml-12">

                <ul className='flex flex-col gap-10 fontsemibold text-lg '>
                  <Link to='/dashboard'> <li className='text-2xl font-semibold'>Dashboard</li> </Link> 
                <Link to='/product'>   <li className='text-2xl font-semibold' >Products</li> </Link> 
                 <Link to='/addproduct'>   <li className='text-2xl font-semibold mr-2'> <i className='fa-solid fa-plus'></i>product</li></Link>
              <Link to='/message'>  <li className='text-2xl font-semibold'>Messages</li></Link> 
            <NavLink to='/login'>  <button onClick={handleLogout} className='text-2xl font-semibold '><i className="fa-solid fa-right-from-bracket text-2xl "></i>LogOut</button></NavLink>
                </ul>
            </div>
                </div>
        </div>
    );
}

export default Dashboard;