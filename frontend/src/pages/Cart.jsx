// import { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import axios from 'axios'

// function Cart() {

//     const [Data, setData] = useState([])
//     console.log(Data)

//   const handleRead = () =>{
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     setData(cart)

//   }
  
//   useEffect(()=>{
//     handleRead()
//   },[])
         
//     const handleDelete = (id) =>{
//         const filterData = Data.filter((item) => item._id !==  id)

//         localStorage.setItem("cart", JSON.stringify(filterData))
//         setData(filterData)
//     }

//     const TotalPrice = Data.reduce((sum,item) => sum + (Number(item.price) * Number(item.quantity)),0)



//     const handleIncrement = (id) =>{
//       setProducts(pr =>pr.map(
//         item => item._id === id ? {...item, quantity: item.quantity < item.maxQuantity ? item.quantity +1 : item.quantity } : item
//       ))
//     }
//     const handleDecrement = (id) =>{
//       setProducts(pr =>pr.map(
//         item => item._id === id ? {...item, quantity: item.quantity > 1 ? item.quantity -1 : item.quantity } : item
//       ))
//     }


//     //order
//     const user = localStorage.getItem("user")

//     let customerOrder = ""

//     if(user){
//         customerOrder = JSON.parse(user).data?.customer.name
//         console.log(customerOrder);
//     }

//     const placeOrder = () =>{
//         if(!customerOrder){
//             toast.error("Please log in to place an order")
//             return
//         }
        
//         axios.post("http://localhost:3000/create/order",{
//             customer: customerOrder,
//             products: Data.map(item =>{
//                 return {productId: item._id, quantity: item.quantity}
//             })
//         }).then((res)=>{
//             if(res.data.error){
//                 toast.error(res.data.error)
//             }
//             else{
//                 toast.success("Order placed successfully")
//                 localStorage.removeItem("cart")
//                 setData([])
//             }
//             console.log(res.data);
//         }).catch((err)=>{
//             console.log(err);

//         })
//     }


//     return   <>
//             <div className="bg-gray-100 min-h-screen py-10 px-4">
//                 <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg flex flex-col lg:flex-row overflow-hidden">
//                     {/* Left: Cart Items */}
//                     <div className="w-full lg:w-2/1 p-6">
//                         <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

//                         <div className="hidden md:flex justify-between text-gray-600 font-medium border-b pb-3 mb-4">
//                             <span>PRODUCT DETAILS</span>
//                             <span>QUANTITY</span>
//                             <span>PRICE</span>
//                             <span>TOTAL</span>
//                         </div>

//                         {
//                             Data.map((item) => {
//                                 return <div
//                                     className="flex flex-col md:flex-row justify-between items-center py-4 border-b"
//                                 >
//                                     {/* Product Details */}
//                                     <div className="flex items-center gap-4 w-full md:w-40">
//                                         <img
//                                             src={`http://localhost:3000/allproductimage/${item.prImage}`}
//                                             alt=""
//                                             className="w-20 h-20 object-contain"
//                                         />
//                                         <div>
//                                             <h4 className="font-medium text-lg">{item.name}</h4>
//                                             <p className="text-sm text-purple-600">{item.category}</p>
//                                             <i
//                                                 onClick={() => handleDelete(item._id)}

//                                                 className="fa-solid fa-trash  text-red-500 text-sm mt-3"
//                                             >
                                                
//                                             </i>
//                                         </div>
//                                     </div>

//                                     {/* Quantity Controls */}
//                                     <div className="mt-4 md:mt-0 flex items-center gap-2">
//                                         <button
//                                         onClick={()=> handleDecrement(item_id)}
//                                             className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded"
//                                         >
//                                             -
//                                         </button>
//                                         <span className="font-semibold">1</span>
//                                         <button
//                                            onClick={()=> handleIncrement(item_id)}
//                                             className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded"
//                                         >
//                                             +
//                                         </button>
//                                     </div>

//                                     {/* Price */}
//                                     <div className="mt-4 md:mt-0 text-gray-700">
//                                        <h1 className="text-xl mr-10">${item.price}</h1>
//                                     </div>

//                                     {/* Total per item */}
//                                     <div className="mt-4 md:mt-0 text-gray-700">
//                                         {`$${item.price * item.quantity}`}
//                                     </div>
//                                 </div>
//                             })
//                         }





//                      </div>

//                     {/* Right: Order Summary */}
//                     <div className="w-full lg:w-1/3 bg-gray-50 p-6">
//                         <h3 className="text-xl font-semibold mb-4">Summary</h3>

//                         <div className="flex justify-between mb-2 text-gray-700">
//                             <span>ITEMS</span>
//                             <span>{Data.length}</span>
//                         </div>

                       

//                         <div className="flex justify-between font-semibold text-gray-800 border-t pt-3 mb-6">
//                             <span>TOTAL COST</span>
//                             <span>${TotalPrice}</span>
//                         </div>

//                         <button
//                             onClick={placeOrder}
//                          className="w-full bg-[#19183B] text-white py-3 rounded shadow hover:bg-[#3A3A7B] transition duration-300">
//                             CHECKOUT
//                         </button>
//                     </div>
//                 </div>
//             </div>
//                   <ToastContainer position="top-right" autoClose={2000} />

//         </>

  
// }

// export default Cart

///

import { useEffect, useState } from "react";
import axios from "axios";  
import { ToastContainer, toast } from "react-toastify";

function Cart() {

    const [Data, setData] = useState([])
    console.log(Data)

  const handleRead = () =>{
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    setData(cart)

  }
  
  useEffect(()=>{
    handleRead()
  },[])
         
    const handleDelete = (id) =>{
        const filterData = Data.filter((item) => item._id !==  id)

        localStorage.setItem("cart", JSON.stringify(filterData))
        setData(filterData)
    }

    const TotalPrice = Data.reduce((sum,item) => sum + (Number(item.price) * Number(item.quantity)),0)



    const handleIncrement = (id) =>{
      setData(pr =>pr.map(
        item => item._id === id ? {...item, quantity: item.quantity ? item.quantity +1 : item.quantity } : item
      ))
    }
    const handleDecrement = (id) =>{
      setData(pr =>pr.map(
        item => item._id === id ? {...item, quantity: item.quantity > 1 ? item.quantity -1 : item.quantity } : item
      ))
    }


    //order
    const user = localStorage.getItem("user")

    let customerOrder = ""

    if(user){
        customerOrder = JSON.parse(user).data?.customer.name
        console.log(customerOrder);
    }

    const placeOrder = () =>{
        if(!customerOrder){
            toast.error("Please log in to place an order")
            return
        }
        
        axios.post("http://localhost:3000/create/order",{
            customer: customerOrder,
            products: Data.map(item =>{
                return {productId: item._id, quantity: item.quantity}
            })
        }).then((res)=>{
            if(res.data.error){
                toast.error(res.data.error)
            }
            else{
                toast.success("Order placed successfully")
                localStorage.removeItem("cart")
                setData([])
            }
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);

        })
    }


    return   <>
            <div className="bg-gray-100 min-h-screen py-10 px-4 ">
                <div className="max-w-6xl mx-auto bg-white- shadow-md rounded-lg flex flex-col lg:flex-row overflow-hidden mt-24">
                    {/* Left: Cart Items */}
                    <div className="w-full lg:w-2/1 p-6">
                        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

                        <div className="hidden md:flex justify-between text-gray-600 font-medium border-b pb-3 mb-4">
                            <span>PRODUCT DETAILS</span>
                            <span>QUANTITY</span>
                            <span>PRICE</span>
                            <span>TOTAL</span>
                        </div>

                        {
                            Data.map((item) => {
                                return <div
                                    className="flex flex-col md:flex-row justify-between items-center py-4 border-b"
                                >
                                    {/* Product Details */}
                                    <div className="flex items-center gap-4 w-full md:w-40">
                                        <img
                                            src={`http://localhost:3000/allproductimage/${item.prImage}`}
                                            alt=""
                                            className="w-20 h-20 object-contain"
                                        />
                                        <div>
                                            <h4 className="font-medium text-lg">{item.name}</h4>
                                            <p className="text-sm text-purple-600">{item.category}</p>
                                            <i
                                                onClick={() => handleDelete(item._id)}

                                                className="fa-solid fa-trash  text-red-500 text-sm mt-3"
                                            >
                                                
                                            </i>
                                        </div>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="mt-4 md:mt-0 flex items-center gap-2">
                                        <button
                                        onClick={()=> handleDecrement(item._id)}
                                            className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded"
                                        >
                                            -
                                        </button>
                                        <span className="font-semibold">{item.quantity}</span>
                                        <button
                                           onClick={()=> handleIncrement(item._id)}
                                            className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Price */}
                                    <div className="mt-4 md:mt-0 text-gray-700">
                                       <h1 className="text-xl mr-10">${item.price}</h1>
                                    </div>

                                    {/* Total per item */}
                                    <div className="mt-4 md:mt-0 text-gray-700">
                                        {`$${item.price * item.quantity}`}
                                    </div>
                                </div>
                            })
                        }





                     </div>

                    {/* Right: Order Summary */}
                    <div className="w-full lg:w-1/3 bg-gray-50 p-6">
                        <h3 className="text-xl font-semibold mb-4">Summary</h3>

                        <div className="flex justify-between mb-2 text-gray-700">
                            <span>ITEMS</span>
                            <span>{Data.length}</span>
                        </div>

                       

                        <div className="flex justify-between font-semibold text-gray-800 border-t pt-3 mb-6">
                            <span>TOTAL COST</span>
                            <span>${TotalPrice}</span>
                        </div>

                        <button
                            onClick={placeOrder}
                         className="w-full bg-[#19183B] text-white py-3 rounded shadow hover:bg-[#3A3A7B] transition duration-300">
                            CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
                  <ToastContainer position="top-right" autoClose={2000} />

        </>

  
}

export default Cart
