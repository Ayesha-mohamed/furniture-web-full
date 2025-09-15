
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../components/footer";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("customer");

  const navigate = useNavigate();

  const handelPost = (e) => {
    e.preventDefault();
    const links =
      activeTab === "customer"
        ? "http://localhost:3000/create/user"
        : "http://localhost:3000/create/admin";
    const info =
      activeTab === "customer"
        ? { name, email, address, phone, password }
        : { name, email, password };

    axios
      .post(links, info)
      .then(() => {
        toast.success(`${activeTab} success`);
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
        alert("error");
      });
  };

  return (
    <>
    <div className="bg-cover bg-center w-full min-h-screen bg-[url('https://i.pinimg.com/736x/5d/0e/ed/5d0eed1f2e5de0a2a0d97a5e5a6d4872.jpg')] flex items-center justify-center">
      <div className="w-full  max-w-md mt-20 mb-10 bg-white/55 backdrop-blur-lg  rounded-2xl shadow p-6 ">
        <div className="flex justify-center gap-8 mb-6">
          <button
            onClick={() => setActiveTab("customer")}
            className={`${activeTab === "customer" ? "text-blue-600" : ""}`}
          >
            Customer
          </button>
          <button
            onClick={() => setActiveTab("admin")}
            className={`${activeTab === "admin" ? "text-blue-600" : ""}`}
          >
            Admin
          </button>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

        <form onSubmit={handelPost} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="your name"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {activeTab === "customer" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="phone"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="address"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {activeTab === "customer" ? "Sign Up as Customer" : "Sign Up as Admin"}
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default SignUp;

