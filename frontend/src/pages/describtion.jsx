


import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from 'react-router-dom';

export default function ProductDetails() {


    const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Description, setDescription] = useState("")
  const [Category, setCategory] = useState("")
  const [Image, setImage] = useState(null)





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

    


  
    const params = useParams();
  
    const handleReadSingleData = () => {
      axios.get(`https://farnilux-backend.onrender.com/read/singleproduct/${params.id}`)
    .then((res) => {
      setName(res.data[0].name);
      setPrice(res.data[0].price);
      setQuantity(res.data[0].quantity);
      setCategory(res.data[0].category);
      setDescription(res.data[0].Description);
      setImage();
    })
    .catch((err)=>{
      console.log(err);
      toast.error("Failed to fetch product");
    });
    };
  
    useEffect(() => {
      handleReadSingleData();
    }, []);



  return (
    <div className="min-h-screen bg-gray-50 text-white flex justify-center items-center p-10">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-100 rounded-2xl shadow-2xl p-8">
        
        {/* Product Image */}
        <div className="flex justify-center items-center text-black">
          <img
            src="https://i.pinimg.com/1200x/c5/97/79/c59779eabfde67dcf0a5bb185e3b7757.jpg"
            alt="Product"
            className="w-full h-[450px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-black"></h1>
          <p className="text-gray-600 text-lg mb-2">Category: Living Room</p>
          <p className="text-red-600 text-3xl font-bold mb-4">$350</p>
          <p className="text-gray-600 text-base mb-6 leading-relaxed">
            This modern sofa is designed with comfort and style in mind. 
            Crafted from high-quality materials, it features soft cushions, 
            sturdy wooden legs, and a sleek minimalistic design that perfectly 
            fits any living room.
          </p>

          {/* <p className="text-gray-400 mb-2">Quantity: <span className="text-white font-semibold">10</span></p> */}

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
            onClick={()=> handleAddtoCart(item)}
             className="bg-blue-950 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-xl shadow-md">
              Add to Cart
            </button>
          <NavLink to='/shop'> <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md">
              Back to Shop
            </button></NavLink> 
          </div>
        </div>
      </div>
    </div>
  );
}








