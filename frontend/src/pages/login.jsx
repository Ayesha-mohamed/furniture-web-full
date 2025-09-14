import axios from "axios";
import { useState } from "react";

 
 
 
 function LogIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogIn = (e) =>{
    e.preventDefault()
    axios.post("http://localhost:3000/create/userlogin",{
      email: email,
      password: password
    }).then((res)=>{
      console.log(res.data);
    })
  }


  return (
    <div className="bg-blue-950 min-h-screen grid place-items-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <h2>Customer</h2>
          <h2>Admin</h2>
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

          <button onChange={()=> handleLogIn} type="button"  className="w-full bg-blue-950 text-white py-2 rounded-lg hover:bg-blue-900 transition" >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn
