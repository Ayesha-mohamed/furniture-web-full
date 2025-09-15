import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard(props) {
    return (
        <div >
            <div className="w-48 h-screen fixed bg-[#19183B] text-white ">
                <div className="mt-32 ml-12">

                <ul className='flex flex-col gap-10 fontsemibold text-lg '>
                  <Link to='/dashboard'> <li className='text-2xl font-semibold'>Dashboard</li> </Link> 
                <Link to='/product'>   <li className='text-2xl font-semibold' >Products</li> </Link> 
                 <Link to='/addproduct'>   <li className='text-2xl font-semibold mr-2'> <i className='fa-solid fa-plus'></i>product</li></Link>
                 <li className='text-2xl font-semibold'>Messages</li>
                </ul>
            </div>
                </div>
        </div>
    );
}

export default Dashboard;