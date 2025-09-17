// // import axios from 'axios';
// // import React, { useState } from 'react';
// // import { useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import {ToastContainer, toast} from 'react-toastify'


// // function Product(props) {

// //     const [product, setProduct] = useState([])

// //     const handleReadProduct = () =>{
// //         axios.get("https://farnilux-backend.onrender.com/read/allproduct").then((res) =>{
// //             setProduct(res.data)
// //         })
// //     }

// //     useEffect(() =>{
// //         handleReadProduct()
// //     },[])

// //     const handleDelete = (id) =>{
// //         axios.delete(`https://farnilux-backend.onrender.com/delete/product/${id}`).then(()=>{
// //             toast.success("Deleted successfully")
// //             handleReadProduct()
// //         }).catch((err)=>{
// //             console.log(err);
// //         })
// //     }


// //     return (
// //         <div className='ml-48 p-10 grid grid-cols-3 gap-10 '>

// //         {
// //             product.map((item) =>{
// //                 return <>
                
// //                  <div className="w-80 h-96 shadow-md shadow-gray-600  ">  
// //             <img className='w-full h-60  ' src={`https://farnilux-backend.onrender.com/allproductimage/${item.prImage}`} alt={item.prImage} />
// //             <div className="flex justify-between px-4 mt-3">
// //                 <h1 className='textt-xl font-semibold '>{item.name}</h1>
// //                 <h1 className='text-xl font-medium text-red-700'>${item.price}</h1>
// //             </div>

// //                 <h1 className='ml-3 text-xl '>{item.category}</h1>
// //                 <div className="flex justify-between px-4">

// //              <Link to={`/update/product/${item._id}`}>   <button className='bg-blue-600 text-white px-3 py-1 rounded-md mt-3'>Edit</button></Link>
// //                 <button onClick={()=> handleDelete(item._id)} className='bg-red-600 text-white px-3 py-1 rounded-md mt-3 ml-3'>Delete</button>
// //                 </div>
// //            </div>
// //                 </>
// //             })
// //         }


// //           <ToastContainer position='top-center' autoClose={2000}/>
// //         </div>
// //     );
// // }

// // export default Product;





// import axios from 'axios';
// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import {ToastContainer, toast} from 'react-toastify'


// function Product(props) {

//     const [product, setProduct] = useState([])

//     const handleReadProduct = () =>{
//         axios.get("http://localhost:3000/read/allproduct").then((res) =>{
//             setProduct(res.data)
//         })
//     }

//     useEffect(() =>{
//         handleReadProduct()
//     },[])

//  

//     return (
//         <div className='ml-48 p-10 grid grid-cols-3 gap-10 '>

//         {
//             product.map((item) =>{
//                 return <>
                
//                  <div className="w-80 h-96 shadow-md shadow-gray-600  ">  
//             <img className='w-full h-60  ' src={`http://localhost:3000/allproductimage/${item.prImage}`} alt={item.prImage} />
//             <div className="flex justify-between px-4 mt-3">
//                 <h1 className='textt-xl font-semibold '>{item.name}</h1>
//                 <h1 className='text-xl font-medium text-red-700'>${item.price}</h1>
//             </div>

//                 {/* <h1 className='ml-3 text-xl '>{item.quantity}</h1> */}
//                 <div className="flex justify-between px-4">

//              <Link to={ `/update/product/${item._id}`}>   <button className='bg-blue-600 text-white px-3 py-1 rounded-md mt-3'>Edit</button></Link>
//                 <button onClick={()=> handleDelete(item._id)} className='bg-red-600 text-white px-3 py-1 rounded-md mt-3 ml-3'>Delete</button>
//                 </div>
//            </div>
//                 </>
//             })
//         }


//           <ToastContainer position='top-center' autoClose={2000}/>
//         </div>
//     );
// }

// export default Product;








// //new product page
// function Product(){
//     return <>
    
    
//     </>
// }   

// export default 







import React, { useEffect, useState } from "react";
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify'



export default function AdminProducts() {

    // const [products, setProducts] = useState([]);

  
 


   const handleDelete = (id) =>{
        axios.delete(`http://localhost:3000/delete/product/${id}`).then(()=>{
            toast.success("Deleted successfully")
            handleReadProduct()
        }).catch((err)=>{
            console.log(err);
        })
    }



const [product, setProduct] = useState([])

    const handleReadProduct = () =>{
        axios.get("https://farnilux-backend.onrender.com/read/allproduct").then((res) =>{
            setProduct(res.data)
        })
    }

    useEffect(() =>{
        handleReadProduct()
   },[])

  return (
    <div className="min-h-screen bg-gray-900 p-10">
      <h1 className="text-4xl font-bold mb-10 text-center text-white">
        Admin Products
      </h1>


      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  

     {
      product.map((item) =>{
        return    <div className="bg-gray-800 rounded-2xl shadow-xl p-5 flex flex-col hover:scale-105 duration-300">
          <img
            src={`http://localhost:3000/allproductimage/${item.prImage}`}
            alt={item.prImage}
            className="w-full h-64 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-semibold mb-1 text-white">
            {item.name}
          </h2>
          {/* <p className="text-gray-400 mb-1">Category:{item.category}</p> */}
          <p className="text-red-400 font-bold mb-1">${item.price}</p>
          <p className="text-gray-300 mb-1">

                <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.quantity > 0
                          ? "bg-green-900 text-green-300"
                          : "bg-red-900 text-red-300"
                      }`}
                    >
                      {item.quantity > 0 ? "Available" : "Out of Stock"}
                    </span>
           <button
            onClick={()=> handleDelete(item._id)} 
            className='bg-red-600 text-white px-3 py-1 rounded-md mt-3 ml-20'><i className="fa-solid fa-trash"></i></button>

                    
          </p>
        </div>
      })
     }

     
      </div>
        <ToastContainer position='top-center' autoClose={2000}/>

    </div>
  );
}
