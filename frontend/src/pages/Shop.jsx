// import React, { useEffect, useState } from 'react';
// import axios from "axios"
// import { Link, NavLink } from 'react-router-dom';
// import Footer from '../components/footer';

// function Shop(props) {

//     const [data, setData] = useState([])
//     // console.log(data);
//     const [open, setOpen] = useState(false)
//     const [category, setCategory] = useState("")   // categories state
//     console.log(category)
//     const handleOpen = () =>{
//         if(open === false){
//             setOpen(true)
//         }else{
//             setOpen(false)
//         }

//     }

//     const handleRead = () =>{
//         axios.get("http://localhost:3000/read/allproduct",{
//             "category":category
//         }).then((res)=>{
//             setData(res.data)
//         })
//     }

//     useEffect(()=>{
//         handleRead()
//     },[category])

//     //searching...
//     const handleSearch = (e) =>{
//         const key = e.target.value
//         if(key === ""){
//             handleRead()
//             return
//         }
//         axios.get(`http://localhost:3000/search/product/${key}`).then((res)=>{
//             setData(res.data)
//         }).catch((err)=>{
//             console.log(err);
//         })


//     }

//     //local storage 
//     const handleAddtoCart = (item) =>{
//         let cart = JSON.parse(localStorage.getItem("cart")) || [];
//         const existingItem = cart.find(cartItem => cartItem._id === item._id);
//         if (existingItem) {
//             existingItem.quantity += 1; // Increment quantity if item already exists
//         } else {
//             cart.push({ ...item, quantity: 1 }); // Add new item with quantity 1
//         }
//         localStorage.setItem("cart", JSON.stringify(cart));


        



//     }

//     return (
//         <>

//         <div className='mt-0 mb-20'>
//             <div className='bg-center bg-cover w-full h-[550px]' style={{backgroundImage: "url('https://i.pinimg.com/736x/e7/73/b0/e773b09f1432bdf6c73695708fd15f3a.jpg')"}}>
//                 <h1 className='text-6xl font-bold text-white text-center pt-40 '>shop every where </h1>
                
                
//             </div>

//             <div className=" absolute right-20 flex gap-5 items-center mt-20">
//                 <input style={{display: open === false ? "none" : ""}} onChange={handleSearch} className='w-72 h-10 rounded-lg border-2 border-slate-800 px-5 text-xl ' type="search" placeholder='searching...' />
//               <i onClick={handleOpen} className='fa-solid fa-magnifying-glass text-2xl '></i>

//             </div>

//             <div className="mt-20">
//               <h1 className='text-4xl font-bold text-center mb-10 mt-20' >Our Products</h1>

//             </div>

//             {/* Categories filter */}
//             <div className="flex ml-20 mb-10 gap-0">
//             <input  className='ml-4 text-xl' type="radio" onChange={()=> setCategory("")} name='category' />All
//             <input value='Dining Room' onChange={()=> setCategory("Dining Room")} className='ml-4 text-xl' name='category' type="radio" />Dining Room
//             <input value='Bedroom' onChange={()=> setCategory("Bedroom")} className='ml-4 text-xl' name='category' type="radio" />Bedroom
//             <input value='Office' onChange={()=> setCategory("Office")} className='ml-4 text-xl' name='category' type="radio" />Office
//             </div>


//             {/* <div className="flex flex-wrap justify-center gap-10 mt-20 ml-10 "> */}

//                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center mb-10 px-10">

//         {
//          data.length > 0 ?   data.map((item)=>{
//                 return <>
//            <NavLink to='/describtion'> <div className="w-80 h-[420px] min-h-[300px] ml-0 shadow-md  bg-gray-100 rounded-lg p- hover:scale-105 duration-300 cursor-pointer " key={item._id}>
              
//                 <img className='w-72 h-80 object-cover  mb-5' src={`http://localhost:3000/allproductimage/${item.prImage}`} alt={item.prImage} />
//                <div className="text-center justify-around mt-3 ">
//                <h1 className='text-xl font-medium'>{item.name}</h1>
//                 <h1 className='text-2xl  font-semibold mt-1 text-red-600  '>${item.price}</h1>  
//                </div>
//                 <div className="text-center mt-5">
//                     {/* <button onClick={()=> handleAddtoCart(item)} className='bg-[#19183B] border-2 border-none text-2xl text-white rounded-2xl px-10 py-2  '>Add to cart</button> */}
//                     {/* <button onClick={()=> handleAddtoCart(item)} className='bg-[#19183B] border-2 border-none text-2xl text-white rounded-2xl px-10 py-2  '>Add to cart</button> */}
//                     </div> 
              
//             </div></NavLink> 
//                </> 
//             })
//             :
//             <h1 className='text-4xl font-bold text-center mt-20'>No Product Found</h1>

//         }

//            </div>
//         </div>
//         <Footer/>
//         </>
//     );
// }

// export default Shop;


// 333
// import React, { useEffect, useState } from 'react';
// import axios from "axios"
// import Footer from '../components/footer';

// function Shop() {

//     const [data, setData] = useState([]);
//     const [open, setOpen] = useState(false);
//     const [category, setCategory] = useState("");   // categories state

//     const handleOpen = () => setOpen(!open);

//     // Fetch products with category filter
//     const handleRead = () => {
//         axios.get("http://localhost:3000/read/allproduct", {
//             params: { category }   // <-- use params, not body
//         })
//         .then(res => setData(res.data))
//         .catch(err => console.log(err));
//     }

//     useEffect(() => {
//         handleRead();
//     }, [category]);

//     // Searching
//     const handleSearch = (e) => {
//         const key = e.target.value;
//         if(key === ""){
//             handleRead();
//             return;
//         }
//         axios.get(`http://localhost:3000/search/product/${key}`)
//             .then(res => setData(res.data))
//             .catch(err => console.log(err));
//     }

//     // LocalStorage add to cart
//     const handleAddtoCart = (item) => {
//         let cart = JSON.parse(localStorage.getItem("cart")) || [];
//         const existingItem = cart.find(cartItem => cartItem._id === item._id);
//         if(existingItem){
//             existingItem.quantity += 1;
//         } else {
//             cart.push({ ...item, quantity: 1 });
//         }
//         localStorage.setItem("cart", JSON.stringify(cart));

//     }

//     return <>
       
//         <div className='mt-0 mb-20'>
//             <div className='bg-center bg-cover w-full h-[550px]' style={{backgroundImage: "url('https://i.pinimg.com/736x/e7/73/b0/e773b09f1432bdf6c73695708fd15f3a.jpg')"}}>
//                 <h1 className='text-6xl font-bold text-white text-center pt-40 '>shop every where </h1>
//             </div>

//             <div className="absolute right-20 flex gap-5 items-center mt-20">
//                 <input 
//                     style={{display: open === false ? "none" : ""}} 
//                     onChange={handleSearch} 
//                     className='w-72 h-10 rounded-lg border-2 border-slate-800 px-5 text-xl ' 
//                     type="search" 
//                     placeholder='searching...' 
//                 />
//                 <i onClick={handleOpen} className='fa-solid fa-magnifying-glass text-2xl '></i>
//             </div>

//             <div className="mt-20">
//                 <h1 className='text-4xl font-bold text-center mb-10 mt-20'>Our Products</h1>
//             </div>

//             {/* Categories filter */}

//             <div className="flex ml-20 mb-10 gap-0">
//                 <input onChange={()=> setCategory("")} className='ml-4 text-xl' type="radio" name='category' /> All
//                 <input value='Dining Room' onChange={()=> setCategory("Dining Room")} className='ml-4 text-xl' name='category' type="radio" /> Dining Room
//                 <input value='Bedroom' onChange={()=> setCategory("Bedroom")} className='ml-4 text-xl' name='category' type="radio" /> Bedroom
//                 <input value='Office' onChange={()=> setCategory("Office")} className='ml-4 text-xl' name='category' type="radio" /> Office

//             <div className="flex-col ml-20 mb-10 gap-10 font-semibold shadow-md w-[550px]">
//             <input  className='ml-4 text-xl' type="radio" onChange={()=> setCategory("")} name='category' />All
//             <input value='Dining Room' onChange={()=> setCategory("Dining Room")} className='ml-4 text-xl' name='category' type="radio" />Dining Room
//             <input value='Bedroom' onChange={()=> setCategory("Bedroom")} className='ml-4 text-xl' name='category' type="radio" />Bedroom
//             <input value='Office' onChange={()=> setCategory("Office")} className='ml-4 text-xl' name='category' type="radio" />Office

//             </div>

//             {/* Products Grid */}
//             <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center mb-10 px-10">
//                 {
//                     data.length > 0 ? data.map((item) => (
//                         <div className="w-80 h-[455px] min-h-[300px] ml-0 shadow-md bg-gray-100 rounded-lg p- hover:scale-105 duration-300 cursor-pointer" key={item._id}>
//                             <img className='w-72 h-80 object-cover mb-5' src={`http://localhost:3000/allproductimage/${item.prImage}`} alt={item.prImage} />
//                             <div className="text-center flex justify-around mt-3">
//                                 <h1 className='text-xl font-semibold'>{item.name}</h1>
//                                 <h1 className='text-2xl font-semibold text-red-600'>${item.price}</h1>  
//                             </div>
//                             <div className="text-center mt-5">
//                                 <button onClick={()=> handleAddtoCart(item)} className='bg-[#19183B] text-2xl text-white rounded-2xl px-10 py-2'>Add to cart</button>
//                             </div>
//                         </div>
//                     )) : <h1 className='text-4xl font-bold text-center mt-20'>No Product Found</h1>
//                 }
//             </div>
//         </div>
//         <Footer/>
//         </>
   
// }

// export default Shop;




import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link, NavLink } from 'react-router-dom';
import Footer from '../components/footer';

function Shop(props) {

    const [data, setData] = useState([])
    // console.log(data);
    const [open, setOpen] = useState(false)
    const [category, setCategory] = useState("")   // categories state
    console.log(category)
    const handleOpen = () =>{
        if(open === false){
            setOpen(true)
        }else{
            setOpen(false)
        }

    }

    const handleRead = () =>{
        axios.get("http://localhost:3000/read/allproduct",{
            "category":category
        }).then((res)=>{
            setData(res.data)
        })
    }

    useEffect(()=>{
        handleRead()
    },[category])

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

            {/* Categories filter */}
            <div className="flex-col ml-20 mb-10 gap-10 font-semibold shadow-md w-[550px]">
            <input  className='ml-4 text-xl' type="radio" onChange={()=> setCategory("")} name='category' />All
            <input value='Dining Room' onChange={()=> setCategory("Dining Room")} className='ml-4 text-xl' name='category' type="radio" />Dining Room
            <input value='Bedroom' onChange={()=> setCategory("Bedroom")} className='ml-4 text-xl' name='category' type="radio" />Bedroom
            <input value='Office' onChange={()=> setCategory("Office")} className='ml-4 text-xl' name='category' type="radio" />Office
            </div>


            {/* <div className="flex flex-wrap justify-center gap-10 mt-20 ml-10 "> */}

                 <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center mb-10 px-10">

        {
         data.length > 0 ?   data.map((item)=>{
                return <>
           {/* <NavLink to={`/desc/${item._id}`}>  */}
           <div className="w-80 h-[470px] min-h-[300px] ml-0 shadow-md  bg-gray-100 rounded-lg p- hover:scale-105 duration-300 cursor-pointer " key={item._id}>
              
                <img className='w-72 h-80 object-cover  mb-5' src={`http://localhost:3000/allproductimage/${item.prImage}`} alt={item.prImage} />
               <div className="text-center justify-around mt-3 flex ">
               <h1 className='text-xl font-medium'>{item.name}</h1>
                <h1 className='text-2xl  font-semibold mt-1 text-red-600  '>${item.price}</h1>  
               </div>
                <div className="text-center mt-5">
                    {/* <button onClick={()=> handleAddtoCart(item)} className='bg-[#19183B] border-2 border-none text-2xl text-white rounded-2xl px-10 py-2  '>Add to cart</button> */}
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

export default Shop;


