import axios from 'axios';
import React, { useEffect, useState } from 'react';


function Message(props) {

    const [message, setMessage] = useState([])

    const handlePost = () =>{
        axios.get("https://farnilux-backend.onrender.com/read/contact").then((res)=>{
            setMessage(res.data)
        })
    }
    useEffect(()=>{
        handlePost()
     },[])

    return (
        <div className='ml-[20%]  flex flex-wrap gap-5 pt-10'>

            {
              message.length > 0 ?  message.map((item)=>{
                    return   <div className="w-72 h-52 bg-blue-900 shadow-md  p-4 text-white shadow-black  ">
            <h1 className='font-semibold text-xl '>Name:  <span className='text-1xl font-medium'>{item.name}</span> </h1>
            <h1 className='font-semibold text-xl mt-3 '>Email:  <span className='text-1xl font-medium'>{item.email}</span> </h1>
            <h1 className='font-semibold text-xl mt-5 '>message:  <span className='text-1xl font-medium'>{item.message}</span> </h1>
            </div>
                })
                :
            <h1 className='text-xl text-center mt-40'>no messages hera</h1>
            }
          
        </div>
    );
}

export default Message;