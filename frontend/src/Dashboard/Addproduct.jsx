// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import {ToastContainer, toast} from "react-toastify"
// import {toast,Toaster} from 'react-hot-toast';

// function Addproduct(props) {

//     // const [postData, setPostData] = useState([])
//     const [name, setName] = useState("")
//     const [price, setPrice] = useState("")
//     const [image, setImage] = useState("")
//     const [category, setCategory] = useState("")
//     const [description, setDescription] = useState("")
//     const [quantity, setQuantity] = useState("")


//     const navigate = useNavigate()

//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         axios.post("https://farnilux-backend.onrender.com/create/product", productData).then(()=>{
            
//             toast.success("successfully")
//             setTimeout(()=>{
//                 navigate("/shop")
//             },2000)
//         })
//     }

//     const productData = new FormData()

//     productData.append("name", name)
//     productData.append("price", price)
//     productData.append("category", category)
//     productData.append("description", description)
//     productData.append("quantity", quantity)
//     productData.append("prImg", image)

//     return (
//         <div className='flex justify-center items-center h-screen '>
//             <div className="l">
//                 <form className='w-96 h-96 border-2 border-slate-800 p-10 rounded-xl shadow-lg '>
//                     <input value={name} onChange={(e)=> setName(e.target.value)} className='w-80 h-10 border-2 border-slate-800 px-4 rounded-xl' type="text" placeholder='add productName' /><br /><br />
//                     <input value={price} onChange={(e)=> setPrice(e.target.value)} className='w-80 h-10 border-2 border-slate-800 px-4 rounded-xl' type="text" placeholder='price' /><br /><br />
//                     <input value={quantity} onChange={(e)=> setQuantity(e.target.value)} className='w-80 h-10 border-2 border-slate-800 px-4 rounded-xl' type="number" placeholder='quantity' /><br /><br />
//                     <input onChange={(e)=> setImage(e.target.files[0])} className='file:w-42 file:h-10' type="file"  /><br /><br />
//                     <button onClick={handleSubmit} className='w-80 h-10 bg-blue-500 text-white rounded-xl '>Add Product</button>
//                 </form>
//             </div>
//             <Toaster position='top-right' autoClose={2000} />
//             {/* <ToastContainer position='top-right' autoClose={2000} /> */}
//         </div>
//     );
// }

// export default Addproduct;




// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import {ToastContainer, toast} from "react-toastify"
// import {toast,Toaster} from 'react-hot-toast';

// function Addproduct(props) {

//     // const [postData, setPostData] = useState([])
//     const [name, setName] = useState("")
//     const [price, setPrice] = useState("")
//     const [image, setImage] = useState("")
//     const [category, setCategory] = useState("")
//     const [description, setDescription] = useState("")
//     const [quantity, setQuantity] = useState("")


//     const navigate = useNavigate()

//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         axios.post("http://localhost:3000/create/product", productData).then(()=>{
            
//             toast.success("successfully")
//             setTimeout(()=>{
//                 navigate("/chart")
//             },2000)
//         })
//     }

//     const productData = new FormData()

//     productData.append("name", name)
//     productData.append("price", price)
//     productData.append("category", category)
//     productData.append("description", description)
//     productData.append("quantity", quantity)
//     productData.append("prImg", image)

//     return (
//         <div className='flex justify-center items-center h-screen '>
//             <div className="l">
//                 <form className='w-96 h-96 border-2 border-slate-800 p-10 rounded-xl shadow-lg '>
//                     <input value={name} onChange={(e)=> setName(e.target.value)} className='w-80 h-10 border-2 border-slate-800 px-4 rounded-xl' type="text" placeholder='add productName' /><br /><br />
//                     <input value={price} onChange={(e)=> setPrice(e.target.value)} className='w-80 h-10 border-2 border-slate-800 px-4 rounded-xl' type="text" placeholder='price' /><br /><br />
//                     <input value={quantity} onChange={(e)=> setQuantity(e.target.value)} className='w-80 h-10 border-2 border-slate-800 px-4 rounded-xl' type="number" placeholder='quantity' /><br /><br />
//                     <input onChange={(e)=> setImage(e.target.files[0])} className='file:w-42 file:h-10' type="file"  /><br /><br />
//                     <button onClick={handleSubmit} className='w-80 h-12 bg-blue-950 text-white text-2xl rounded-xl '>Add Product</button>
//                 </form>
//             </div>
//             <Toaster position='top-right' autoClose={2000} />
//             {/* <ToastContainer position='top-right' autoClose={2000} /> */}
//         </div>
//     );
// }

// export default Addproduct;





// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import {ToastContainer, toast} from "react-toastify"
// import {toast,Toaster} from 'react-hot-toast';

// function Addproduct(props) {

//     // const [postData, setPostData] = useState([])
//     const [name, setName] = useState("")
//     const [price, setPrice] = useState("")
//     const [image, setImage] = useState("")
//     const [category, setCategory] = useState("")
//     const [description, setDescription] = useState("")
//     const [quantity, setQuantity] = useState("")


//     const navigate = useNavigate()

//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         axios.post("http://localhost:3000/create/product", productData).then(()=>{
//             toast.success("successfully")
//             setTimeout(()=>{
//                 navigate("/dashboard")
//             },2000)
//         })
//     }

//     const productData = new FormData()

//     productData.append("name", name)
//     productData.append("price", price)
//     productData.append("category", category)
//     productData.append("description", description)
//     productData.append("quantity", quantity)
//     productData.append("prImg", image)

//     return (
//         <div className='flex justify-center items-center h-screen '>
//             <div className="l">
//                 <form className='w-96 h-[500px] border-2 border-slate-800 p-10 rounded-xl shadow-lg '>
//                     <input value={name} onChange={(e)=> setName(e.target.value)} className='w-80 h-10 border-2 border-slate-800 px-4 rounded-xl' type="text" placeholder='add productName' /><br /><br />
//                     <input value={price} onChange={(e)=> setPrice(e.target.value)} className='w-80 h-10 border-2 border-slate-800 px-4 rounded-xl' type="text" placeholder='price' /><br /><br />
//                     <input value={quantity} onChange={(e)=> setQuantity(e.target.value)} className='w-80 h-10 border-2 border-slate-800 px-4 rounded-xl' type="number" placeholder='quantity' /><br /><br />
//                     <input value={category} onChange={(e)=> setCategory(e.target.value)} className='w-80 h-10 border-2 border-slate-800 px-4 rounded-xl' type="text" placeholder='category' /><br /><br />
//                     <input value={description} onChange={(e)=> setDescription(e.target.value)} className='w-80 h-10 border-2 border-slate-800 px-4 rounded-xl' type="text" placeholder='description' /><br /><br />
                   
//                     <input onChange={(e)=> setImage(e.target.files[0])} className='file:w-42 file:h-10' type="file"  /><br /><br />
//                     <button onClick={handleSubmit} className='w-80 h-10 bg-blue-500 text-white rounded-xl '>Add Product</button>
//                 </form>
//             </div>
//             <Toaster position='top-right' autoClose={2000} />
//             {/* <ToastContainer position='top-right' autoClose={2000} /> */}
//         </div>
//     );
// }

// export default Addproduct;







import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

function Addproduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = new FormData();
    productData.append("name", name);
    productData.append("price", price);
    productData.append("category", category);
    productData.append("description", description);
    productData.append("quantity", quantity);
    productData.append("prImg", image); // <-- la mid ah multer .single("prImage")

    try {
      await axios.post("http://localhost:3000/create/product", productData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Product added successfully");
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (err) {
      console.error(err);
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <form
          className="w-96 border-2 border-slate-800 p-10 rounded-xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-80 h-10 border-2 border-slate-800 px-4 rounded-xl"
            type="text"
            placeholder="Product Name"
          />
          <br />
          <br />

          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-80 h-10 border-2 border-slate-800 px-4 rounded-xl"
            type="number"
            placeholder="Price"
          />
          <br />
          <br />

          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-80 h-10 border-2 border-slate-800 px-4 rounded-xl"
            type="number"
            placeholder="Quantity"
          />
          <br />
          <br />

          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-80 h-10 border-2 border-slate-800 px-4 rounded-xl"
            type="text"
            placeholder="Category"
          />
          <br />
          <br />

          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-80 h-10 border-2 border-slate-800 px-4 rounded-xl"
            type="text"
            placeholder="Description"
          />
          <br />
          <br />

          <input
            onChange={(e) => setImage(e.target.files[0])}
            className="file:w-42 file:h-10"
            type="file"
          />
          <br />
          <br />

          <button
            type="submit"
            className="w-80 h-10 bg-blue-500 text-white rounded-xl"
          >
            Add Product
          </button>
        </form>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default Addproduct;
