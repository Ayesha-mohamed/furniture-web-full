import { useState } from "react";


function SignUp() {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const [address, setAddress] = useState("")



  return (
    <div className="bg-blue-950 min-h-screen grid place-items-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <h2>Customer</h2>
          <h2>Admin</h2>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6">signup</h2>

        {/* Form */}
        <form className="space-y-4">
            <div>
                <label className="blok text-sm font-medium text-gray-600">Name</label>
                <input type="name" placeholder="your name" className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 "  />
            </div>
          <div>
            <label className="block text-sm font-medium text-gray-700"> Email </label>
            <input  type="email"  placeholder="you@example.com"  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

           <div>
            <label className="block text-sm font-medium text-gray-700"> phone </label>
            <input  type="phone"  placeholder="phone"  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

           <div>
            <label className="block text-sm font-medium text-gray-700"> address </label>
            <input  type="address"  placeholder="address"  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

           <div> 
            <label className="block text-sm font-medium text-gray-700">  Password </label>
            <input
              type="password"  placeholder="••••••••"  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>

          <button type="button"  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" >
            signUp
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp
