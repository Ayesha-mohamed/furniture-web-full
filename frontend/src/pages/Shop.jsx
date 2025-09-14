import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';

function Shop(props) {

    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)

    const handleOpen = () =>{
        if(open === false){
            setOpen(true)
        }else{
            setOpen(false)
        }

    }

    const handleRead = () =>{
        axios.get("http://localhost:3000/read/allproduct").then((res)=>{
            setData(res.data)
        })
    }

    useEffect(()=>{
        handleRead()
    },[])

    //searching...
    const handleSearch = (e) =>{
        const key = e.target.value
        if(key === ""){
            handleRead()
            return
        }
        axios.get(`http://localhost:3000/search/product/${key}`).then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            console.log(err);
        })


    }


    return (
        <div className='mt-20 mb-20'>

            <div className=" absolute right-20 flex gap-5 items-center">
                <input style={{display: open === false ? "none" : ""}} onChange={handleSearch} className='w-72 h-10 rounded-lg border-2 border-slate-800 px-5 text-xl ' type="search" placeholder='searching...' />
              <i onClick={handleOpen} className='fa-solid fa-magnifying-glass text-2xl '></i>

            </div>

            <div className="mt-20">
              <h1 className='text-4xl font-bold text-center mb-10 mt-20' >Our Products</h1>

            </div>


            <div className="flex flex-wrap justify-center gap-10 mt-20 ml-10 ">

           
        {
            data.map((item)=>{
                return <>
             <div className="w-80 h-[455px] min-h-[300px] ml-0 shadow-md  bg-gray-100 rounded-lg p- hover:scale-105 duration-300 cursor-pointer " key={item._id}>
                    {/* <div className="flex justify-end gap-1 text-1xl mb-2 mt-4 text-end ">
                     <i className="fa-solid fa-star text-gray-400"></i>
                        <i className="fa-solid fa-star text-gray-400"></i>
                        <i className="fa-solid fa-star text-gray-400"></i>
                        <i className="fa-solid fa-star text-gray-400"></i>
                        <i className="fa-solid fa-star text-gray-400"></i>
                </div> */}
                <img className='w-72 h-80 object-cover  mb-5' src={`http://localhost:3000/allproductimage/${item.prImage}`} alt={item.prImage} />
               <div className="text-center flex justify-around mt-3 ">
               <h1 className='text-xl font-semibold'>{item.name}</h1>
                <h1 className='text-2xl font-semibold text-red-600  '>${item.price}</h1>  
               </div>
                <div className="text-center mt-5">
                    <button className='bg-gray-200 border-2 border-red-600 text-2xl text-red-600 px-10 py-2  '>Add to cart</button>
                    </div> 
              
            </div>
               </> 
            })

        }

           </div>
        </div>
    );
}

export default Shop;