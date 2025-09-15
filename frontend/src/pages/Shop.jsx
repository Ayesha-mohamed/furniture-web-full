import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

function Shop(props) {

    const [data, setData] = useState([])
    // console.log(data);
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

    //local storage 
    const handleAddtoCart = (item) =>{
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItem = cart.find(cartItem => cartItem._id === item._id);
        if (existingItem) {
            existingItem.quantity += 1; // Increment quantity if item already exists
        } else {
            cart.push({ ...item, quantity: 1 }); // Add new item with quantity 1
        }
        localStorage.setItem("cart", JSON.stringify(cart));

        



    }

    return (
        <>

        <div className='mt-0 mb-20'>
            <div className='bg-center bg-cover w-full h-[550px]' style={{backgroundImage: "url('https://i.pinimg.com/736x/e7/73/b0/e773b09f1432bdf6c73695708fd15f3a.jpg')"}}>
                <h1 className='text-6xl font-bold text-white text-center pt-40 '>shop every where </h1>
                
                
            </div>

            <div className=" absolute right-20 flex gap-5 items-center mt-20">
                <input style={{display: open === false ? "none" : ""}} onChange={handleSearch} className='w-72 h-10 rounded-lg border-2 border-slate-800 px-5 text-xl ' type="search" placeholder='searching...' />
              <i onClick={handleOpen} className='fa-solid fa-magnifying-glass text-2xl '></i>

            </div>

            <div className="mt-20">
              <h1 className='text-4xl font-bold text-center mb-10 mt-20' >Our Products</h1>

            </div>


            {/* <div className="flex flex-wrap justify-center gap-10 mt-20 ml-10 "> */}

                 <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center mb-10 px-10">

        {
         data.length > 0 ?   data.map((item)=>{
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
                    <button onClick={()=> handleAddtoCart(item)} className='bg-[#19183B] border-2 border-none text-2xl text-white rounded-2xl px-10 py-2  '>Add to cart</button>
                    </div> 
              
            </div>
               </> 
            })
            :
            <h1 className='text-4xl font-bold text-center mt-20'>No Product Found</h1>

        }

           </div>
        </div>
        <Footer/>
        </>
    );
}

export default Shop;
