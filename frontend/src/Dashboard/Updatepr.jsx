import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = new FormData();
    productData.append("name", name);
    productData.append("price", price);
    productData.append("category", category);
    productData.append("description", description);
    productData.append("quantity", quantity);
    productData.append("prImg", image);

    axios.put(`http://localhost:3000/update/product/${id}`, productData)
      .then(() => {
        toast.success("Product updated successfully");
        setTimeout(() => navigate("/product"), 2000);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update product");
      });
  };

  const params = useParams()

  const handleReadSingleData = () =>{
    axios.get(`http:localhost:3000/read/singleproduct/${params.id}`).then((res)=>{
      setName(res.data[0].name)
    })
  }

  useEffect(()=>{
    handleReadSingleData()
  })

  return (
    <div className='flex justify-center items-center h-screen '>
      <div className="l">
        <form onSubmit={handleSubmit} className='w-96 border-2 border-slate-800 p-10 rounded-xl shadow-lg'>
          <input value={name} onChange={(e)=> setName(e.target.value)} className='w-80 h-10 border-2 border-slate-800 px-4 rounded-xl' type="text" placeholder='add productName' /><br /><br />
          <input value={price} onChange={(e)=> setPrice(e.target.value)} className='w-80 h-10 border-2 border-slate-800 px-4 rounded-xl' type="text" placeholder='price' /><br /><br />
          <input value={quantity} onChange={(e)=> setQuantity(e.target.value)} className='w-80 h-10 border-2 border-slate-800 px-4 rounded-xl' type="text" placeholder='quantity' /><br /><br />
          <input value={category} onChange={(e)=> setCategory(e.target.value)} className='w-80 h-10 border-2 border-slate-800 px-4 rounded-xl' type="text" placeholder='category' /><br /><br />
          <input value={description} onChange={(e)=> setDescription(e.target.value)} className='w-80 h-10 border-2 border-slate-800 px-4 rounded-xl' type="text" placeholder='description' /><br /><br />
          <input onChange={(e)=> setImage(e.target.files[0])} className='file:w-42 file:h-10' type="file" /><br /><br />
          <button type="submit" className='w-80 h-10 bg-blue-500 text-white rounded-xl'>Update Product</button>
        </form>
      </div>

      <ToastContainer position='top-right' autoClose={2000} />
    </div>
  );
}

export default UpdateProduct;
