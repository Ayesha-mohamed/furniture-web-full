// import axios from "axios";
// import { act, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import{ ToastContainer, toast} from "react-toastify"
// import Footer from "../components/footer";
 
 
 
//  function LogIn() {

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [activeTab, setActiveTab] = useState("customer")

//   const navigate = useNavigate()

//   const handleLogIn = (e) =>{
//     e.preventDefault()
//     const links = activeTab === "customer" ? "https://farnilux-backend.onrender.com/create/userlogin" : "https://farnilux-backend.onrender.com/login/admin"
//     const info = activeTab === "customer" ? {email: email, password: password} : {email: email, password: password}
//     axios.post(links, info).then((res)=>{
//       toast.success(`${activeTab}login success`)
//       setTimeout(()=>{
//         navigate(activeTab === "customer" ?  "/" : "/dashboard")
//       },2000)
//       localStorage.setItem(activeTab === "customer" ? "user" : "admin", JSON.stringify(res))

//       console.log(res.data);
//     })
//   }


//   return (
//     <>
//     <div className="bg-cover bg-center w-full h-screen bg-[url('https://i.pinimg.com/1200x/ab/a4/13/aba41392d1131949a8bed12fa287fc85.jpg')] flex items-center justify-center">
//       <div className="w-full max-w-md bg-white/55 backdrop-blur-lg  rounded-2xl shadow p-6     ">
//         {/* Buttons */}
//         <div className="flex justify-center gap-10 ">
//           <button onClick={()=> setActiveTab === "customer"} className={`${activeTab === "customer" ? "text-blue-600" : ""}`} >Customer</button>
//           <button onClick={()=> setActiveTab === "admin"} className={`${activeTab === "admin" ? "text-blue-600" : ""}`} >Admin</button>
//           {/* <button  onClick={()=> setActiveTab("admin")} className={`${activeTab === "admin" ? "text-blue-600" : ""}`} >Admin</button> */}

//           {/* <button onClick={()=> setActiveTab === "admin"} >admin</button> */}
//         </div>
//         <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

//         {/* Form */}
//         <form className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700"> Email </label>
//             <input value={email} onChange={(e)=> setEmail(e.target.value)}  type="email"  placeholder="you@example.com"  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
//           </div>

//            <div> 
//             <label className="block text-sm font-medium text-gray-700">  Password </label>
//             <input value={password} onChange={(e) => setPassword(e.target.value)}
//               type="password"  placeholder="••••••••"  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
//           </div>

//           <button onClick={(e)=> handleLogIn(e)} type="submit"  className="w-full bg-blue-950 text-white py-2 rounded-lg hover:bg-blue-900 transition" >
//          {activeTab === "customer" ? "Log In as Customer" : "Log In as Admin"}
//           </button>
//         </form>
//       </div>
//       <ToastContainer position="top-right" autoClose={2000} />
     
//     </div>
//     <Footer/>
//     </>
  
//   );
// }

// export default LogIn



import axios from "axios";
import { act, useState } from "react";
import { useNavigate } from "react-router-dom";
import{ ToastContainer, toast} from "react-toastify"
import Footer from "../components/footer";
 
 
 
 function LogIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [activeTab, setActiveTab] = useState("customer")

  const navigate = useNavigate()

  const handleLogIn = (e) =>{
    e.preventDefault()
    const links = activeTab === "customer" ? "http://localhost:3000/create/userlogin" : "http://localhost:3000/login/admin"
    const info = activeTab === "customer" ? {email: email, password: password} : {email: email, password: password}
    axios.post(links, info).then((res)=>{
      toast.success(`${activeTab}login success`)
      setTimeout(()=>{
        navigate(activeTab === "customer" ?  "/" : "/dashboard")
      },2000)
      localStorage.setItem(activeTab === "customer" ? "user" : "admin", JSON.stringify(res))

      console.log(res.data);
    })
  }


  return (
    <>
    <div className="bg-cover bg-center w-full h-screen bg-[url('https://i.pinimg.com/1200x/ab/a4/13/aba41392d1131949a8bed12fa287fc85.jpg')] flex items-center justify-center">
      <div className="w-full max-w-md bg-white/55 backdrop-blur-lg  rounded-2xl shadow p-6     ">
        {/* Buttons */}
        <div className="flex justify-center gap-10 ">
          <button onClick={()=> setActiveTab === "customer"} className={`${activeTab === "customer" ? "text-blue-600" : ""}`} >Customer</button>
          <button  onClick={()=> setActiveTab("admin")} className={`${activeTab === "admin" ? "text-blue-600" : ""}`} >Admin</button>

          {/* <button onClick={()=> setActiveTab === "admin"} >admin</button> */}
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700"> Email </label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)}  type="email"  placeholder="you@example.com"  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

           <div> 
            <label className="block text-sm font-medium text-gray-700">  Password </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)}
              type="password"  placeholder="••••••••"  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>

          <button onClick={(e)=> handleLogIn(e)} type="submit"  className="w-full bg-blue-950 text-white py-2 rounded-lg hover:bg-blue-900 transition" >
         {activeTab === "customer" ? "Log In as Customer" : "Log In as Admin"}
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
     
    </div>
    <Footer/>
    </>
  
  );
}

export default LogIn
