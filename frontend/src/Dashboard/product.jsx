import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify'


function Product(props) {

    const [product, setProduct] = useState([])

    const handleReadProduct = () =>{
        axios.get("http://localhost:3000/read/allproduct").then((res) =>{
            setProduct(res.data)
        })
    }

    useEffect(() =>{
        handleReadProduct()
    },[])

    const handleDelete = (id) =>{
        axios.delete(`http://localhost:3000/delete/product/${id}`).then(()=>{
            toast.success("Deleted successfully")
            handleReadProduct()
        }).catch((err)=>{
            console.log(err);
        })
    }


    return (
        <div className='ml-48 p-10 grid grid-cols-3 gap-10 '>

        {
            product.map((item) =>{
                return <>
                
                 <div className="w-80 h-96 shadow-md shadow-gray-600  ">  
            <img className='w-full h-60  ' src={`http://localhost:3000/allproductimage/${item.prImage}`} alt={item.prImage} />
            <div className="flex justify-between px-4 mt-3">
                <h1 className='textt-xl font-semibold '>{item.name}</h1>
                <h1 className='text-xl font-medium text-red-700'>${item.price}</h1>
            </div>

                <h1 className='ml-3 text-xl '>{item.category}</h1>
                <div className="flex justify-between px-4">

             <Link to={`/update/product/${item._id}`}>   <button className='bg-blue-600 text-white px-3 py-1 rounded-md mt-3'>Edit</button></Link>
                <button onClick={()=> handleDelete(item._id)} className='bg-red-600 text-white px-3 py-1 rounded-md mt-3 ml-3'>Delete</button>
                </div>
           </div>
                </>
            })
        }


          <ToastContainer position='top-center' autoClose={2000}/>
        </div>
    );
}

export default Product;