// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function Description() {
//   const params = useParams();
//   const [product, setProduct] = useState([]);
//   const [Name, setName] = useState("");
//   const [Price, setPrice] = useState("");
//   const [Quantity, setQuantity] = useState("");
//   const [Description, setDescription] = useState("")
//   const [Category, setCategory] = useState("")
//   const [Image, setImage] = useState(null)

//   const [selectedColor, setSelectedColor] = useState("");
//   const HandleGetProductDetails = (_id) => {
//     axios.get(`http://localhost:3000/read/singleproduct/${_id}`).then((res) => {
//       setProduct(res.data)
//       // setName(res.data.name),
//       // setPrice(res.data.price),
//       // setCategory(res.data.category)
//       // setDescription(res.data.description)
//       // setQuantity(res.data.quantity)
//       // setImage(res.data.file[0])
//     }).catch((error) => {
//       console.log(error)
//     })
//   }

//   // useEffect(() => {
//   //   const fetchProduct = async () => {
//   //     try {
//   //       const res = await axios.get(`http://localhost:3000/read/singleproduct/${_id}`);
//   //       setProduct(res.data);
//   //       setSelectedColor(res.data.colors[0] || "");
//   //     } catch (err) {
//   //       console.error(err);
//   //     }
//   //   };
//   //   fetchProduct();
//   // }, [id]);

//   useEffect(() => {
//     HandleGetProductDetails()
//   },[])
//   // if (!product) return <div className="text-center text-red-500">Loading...</div>;

//   return (
//     <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px", display: "flex", gap: "40px", flexWrap: "wrap" }}>
//       {/* Images */}
//       <div style={{ flex: "1 1 500px" }}>
//         {/* <img src={Image[0]} alt={Name} style={{ width: "100%", borderRadius: "10px" }} /> */}
//       </div>

//       {/* Details */}
//       <div style={{ flex: "1 1 500px" }}>
//         <h1>{Name}</h1>
//         <p>{Description}</p>
//         <h2 style={{ color: "#2c3e50" }}>${Price}</h2>

//         {/* Color Selection */}
//         <div>
//           <label>Select Color: </label>
//           {/* <select value={selectedColor} onChange={e => setSelectedColor(e.target.value)}>
//             {product.colors.map((color, idx) => (
//               <option key={idx} value={color}>{color}</option>
//             ))}
//           </select> */}
//         </div>

//         <button style={{ marginTop: "20px", backgroundColor: "#e67e22", color: "white", padding: "15px 25px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
//           Add to Cart
//         </button>

//         {/* Features */}
//         <div style={{ marginTop: "20px" }}>
//           <h3>Key Features:</h3>
//           <ul>
//             <li>High-density foam cushions</li>
//             <li>Durable wooden frame</li>
//             <li>Modern design</li>
//             <li>Easy to clean</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Description;


//
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
          <h1 className="text-4xl font-bold mb-4 text-black">Modern Sofa</h1>
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

