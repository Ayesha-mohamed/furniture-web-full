import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard(props) {
    return (
        <div >
            <div className="w-48 h-screen fixed bg-[#19183B] text-white ">
                <div className="mt-32 ml-14">

                <ul className='flex flex-col gap-10 fontsemibold text-lg '>
                  <Link to='/dashboard'> <li>Dashboard</li> </Link> 
                <Link to='/product'>   <li>All Products</li> </Link> 
                 <Link to='/addproduct'>   <li> <i className='fa-solid fa-plus'></i> Add product</li></Link>
                </ul>
            </div>
                </div>
        </div>
    );
}

export default Dashboard;