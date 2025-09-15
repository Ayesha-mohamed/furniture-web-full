import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function Reports(props) {

    const [totalSales, setTotalSales] = useState([]);
    const [totalcustomer, setTotalCustomer] = useState([]);

    const handleReadTotal = () =>{
        axios.get("http://localhost:3000/readtotal/oder").then((res)=>{
            setTotalSales(res.data[0].total)
            // console.log(res.data[0].total);
        })
    }

    const handleReaddAllCustomers = () =>{
        axios.get("http://localhost:3000/total/customer").then((res)=>{
            setTotalCustomer(res.data[0].totalCustomer)
        })
    }

    useEffect(()=>{
        handleReadTotal()
        handleReaddAllCustomers()
    })

    return (
        <div className='ml-48 p-10'>
            <div className="l">
                <h1 className='text-3xl font-bold'>Reports</h1>
                <div className="flex gap-10">

                <div className="k">
                    <h1 className='text-2xl font-semibold mt-10'>Total Sales</h1>
                    <div className="bg-blue-950 w-72 h-32 rounded-lg text-white flex items-center justify-center mt-5">
                        <h1 className='text-4xl font-bold'>${totalSales}</h1>
                    </div>
                </div>
                {/*report2 */}
                <div className="k">
                    <h1 className='text-2xl font-semibold mt-10'>Total customers</h1>
                     <div className="bg-blue-950 w-72 h-32 rounded-lg text-white flex items-center justify-center mt-5">
                        <h1 className='text-4xl font-bold'><i className='fa-solid fa-user'></i>{totalcustomer}</h1>
                    </div>
                </div>
{/* 
                report3 messages
                <div className="k">
                    <h1 className='text-2xl font-semibold mt-10'>Total customers</h1>
                     <div className="bg-blue-950 w-72 h-32 rounded-lg text-white flex items-center justify-center mt-5">
                        <h1 className='text-4xl font-bold'><i className='fa-solid fa-user'></i>{totalcustomer}</h1>
                    </div>
                </div> */}


           </div>
           
           
            </div>


        </div>
    );
}

export default Reports;