import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Description() {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Description, setDescription] = useState("")
  const [Category, setCategory] = useState("")
  const [Image, setImage] = useState(null)

  const [selectedColor, setSelectedColor] = useState("");
  const HandleGetProductDetails = (_id) => {
    axios.get(`http://localhost:3000/read/singleproduct/${_id}`).then((res) => {
      setProduct(res.data)
      // setName(res.data.name),
      // setPrice(res.data.price),
      // setCategory(res.data.category)
      // setDescription(res.data.description)
      // setQuantity(res.data.quantity)
      // setImage(res.data.file[0])
    }).catch((error) => {
      console.log(error)
    })
  }

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:3000/read/singleproduct/${_id}`);
  //       setProduct(res.data);
  //       setSelectedColor(res.data.colors[0] || "");
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchProduct();
  // }, [id]);

  useEffect(() => {
    HandleGetProductDetails()
  },[])
  // if (!product) return <div className="text-center text-red-500">Loading...</div>;

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px", display: "flex", gap: "40px", flexWrap: "wrap" }}>
      {/* Images */}
      <div style={{ flex: "1 1 500px" }}>
        {/* <img src={Image[0]} alt={Name} style={{ width: "100%", borderRadius: "10px" }} /> */}
      </div>

      {/* Details */}
      <div style={{ flex: "1 1 500px" }}>
        <h1>{Name}</h1>
        <p>{Description}</p>
        <h2 style={{ color: "#2c3e50" }}>${Price}</h2>

        {/* Color Selection */}
        <div>
          <label>Select Color: </label>
          {/* <select value={selectedColor} onChange={e => setSelectedColor(e.target.value)}>
            {product.colors.map((color, idx) => (
              <option key={idx} value={color}>{color}</option>
            ))}
          </select> */}
        </div>

        <button style={{ marginTop: "20px", backgroundColor: "#e67e22", color: "white", padding: "15px 25px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Add to Cart
        </button>

        {/* Features */}
        <div style={{ marginTop: "20px" }}>
          <h3>Key Features:</h3>
          <ul>
            <li>High-density foam cushions</li>
            <li>Durable wooden frame</li>
            <li>Modern design</li>
            <li>Easy to clean</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Description;
