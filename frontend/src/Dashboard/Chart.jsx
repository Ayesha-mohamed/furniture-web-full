import React, { useEffect, useState } from "react";
import axios from "axios";
import {toast,Toaster} from 'react-hot-toast';

import { Link, NavLink } from "react-router-dom";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";

export default function DashboardChart() {
  const [products, setProducts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [totalSales, setTotalSales] = useState([]);
  const [totalcustomer, setTotalCustomer] = useState([]);

  // API CALLS
  const handleReadProduct = () => {
    axios.get("http://localhost:3000/read/allproduct").then((res) => {
      setProducts(res.data);
    });
  };

  const handleReadTotal = () => {
    axios.get("https://farnilux-backend.onrender.com/readtotal/oder").then((res) => {
      setTotalSales(res.data[0].total);
    });
  };

  const handleReaddAllCustomers = () => {
    axios.get("https://farnilux-backend.onrender.com/total/customer").then((res) => {
      setTotalCustomer(res.data[0].totalCustomer);
    });
  };

  const handleMessages = () => {
    axios.get("https://farnilux-backend.onrender.com/read/contact").then((res) => {
      setMessages(res.data);
    });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/delete/product/${id}`)
      .then(() => {
        toast.success("Deleted successfully");
        handleReadProduct();
      })
      .catch((err) => {
        console.log(err);
      });
  };

//deleted messages
  const handleDeleteMessge = (id) => {
    axios
      .delete(`http://localhost:3000/delete/message/${id}`)
      .then(() => {
        toast.success("Deleted successfully");
        handleMessages()
      })
      .catch((err) => {
        console.log(err);
      });
  };


       const handleLogout = () =>{
    localStorage.removeItem("admin")
  }

  useEffect(() => {
    // handleReadProduct();
    handleMessages()
    handleReadTotal();
    handleReaddAllCustomers();
  }, []);

  const salesData = [
    { month: "Jan", sales: 4000, profit: 2400, customers: 240 },
    { month: "Feb", sales: 3000, profit: 1398, customers: 221 },
    { month: "Mar", sales: 5000, profit: 9800, customers: 229 },
    { month: "Apr", sales: 4780, profit: 3908, customers: 200 },
    { month: "May", sales: 5890, profit: 4800, customers: 218 },
    { month: "Jun", sales: 4390, profit: 3800, customers: 250 },
    { month: "Jul", sales: 4490, profit: 4300, customers: 300 },
    { month: "Aug", sales: 5300, profit: 5400, customers: 320 },
    { month: "Sep", sales: 6100, profit: 6700, customers: 330 },
    { month: "Oct", sales: 7000, profit: 7200, customers: 350 },
    { month: "Nov", sales: 8000, profit: 8200, customers: 370 },
    { month: "Dec", sales: 9500, profit: 9800, customers: 420 },
  ];

  const productBreakdown = [
    { name: "Chairs", value: 400 },
    { name: "Tables", value: 300 },
    { name: "Sofas", value: 300 },
    { name: "Beds", value: 200 },
  ];

  const COLORS = ["#6366F1", "#06B6D4", "#FACC15", "#22C55E"];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-indigo-400">Dashboard</h1>
            <button className="px-4 py-3 bg-indigo-950 hover:bg-indigo-900 transition rounded-xl shadow-md text-white text-sm">
         <NavLink to='/login'>  <button onClick={handleLogout} className='text-2xl font-semibold '><i className="fa-solid fa-right-from-bracket text-2xl "></i>LogOut</button></NavLink>

            </button>
        </header>

        {/* TOP STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800 rounded-2xl p-5 shadow-md hover:shadow-lg transition">
            <div className="text-sm text-gray-400">Total Sales</div>
            <div className="text-3xl font-bold mt-2 text-indigo-400">${totalSales}</div>
            <div className="text-xs text-green-400 mt-1">+6.4% this month</div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-5 shadow-md hover:shadow-lg transition">
            <div className="text-sm text-gray-400">Customers</div>
            <div className="text-3xl font-bold mt-2 text-emerald-400">{totalcustomer}</div>
            <div className="text-xs text-green-400 mt-1">+2.1% this month</div>
          </div>

        <NavLink to='/adminproduct'><div className="bg-gray-800 rounded-2xl h-32 p-5 shadow-md hover:shadow-lg transition">
            <div className="text-3xl font-bold text-center mt-3 text-gray-400">products</div>
            {/* <div className="text-xs text-green-400 mt-1">+</div> */}
          </div></NavLink>

          <div className="bg-gray-800 rounded-2xl p-5 shadow-md hover:shadow-lg transition">
            <div className="text-3xl text-gray-400  font-bold text-center" >Add New Product</div>
                     <Link to="/addproduct">
 <div className=" text-green-400 mt-1 text-center "><i className="fa-solid fa-plus text-3xl"></i></div></Link>
          </div>

        </div>

        {/* PRODUCTS & MESSAGES */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* PRODUCTS
          <div className="bg-gray-800 rounded-2xl p-5 shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-indigo-300">Products</h2>
            <div className="space-y-3">

              {
              products.map((item) => (
                <div
                  className="flex items-center justify-between bg-gray-700 hover:bg-gray-600 transition p-3 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={`http://localhost:3000/allproductimage/${item.prImage}`}
                      alt={item.prImage}
                      className="w-20 h-14 rounded-lg object-cover border border-gray-600"
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.quantity > 0
                          ? "bg-green-900 text-green-300"
                          : "bg-red-900 text-red-300"
                      }`}
                    >
                      {item.quantity > 0 ? "Available" : "Out of Stock"}
                    </span>
                    <i
                      onClick={() => handleDelete(item._id)}
                      className="fa-solid fa-trash text-red-400 hover:text-red-300 cursor-pointer"
                    ></i>
                 <NavLink to={ `/update/product/${item._id}`}>    <i className="fa-solid fa-edit text-green-400 hover:text-green-300 cursor-pointer"></i></NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* MESSAGES */}
          <div className="bg-gray-800 rounded-2xl p-5 shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-indigo-300">Messages</h2>
            <div className="space-y-3">
              {messages.length > 0 ? (
                messages.map((item) => (
                  <div
                    key={item._id}
                    className="p-3 bg-gray-700 rounded-xl hover:bg-gray-600 transition"
                  >
                    <p className="font-medium">{item.name} <span className="text-xs text-gray-400">({item.email})</span></p>
                    <p className="text-gray-300 text-sm">{item.message}</p>
                   
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center">No messages yet.</p>
              )}
            </div>
          </div>
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 bg-gray-800 rounded-2xl p-5 shadow-md">
            <h2 className="text-lg font-semibold text-indigo-300 mb-4">Sales & Profit</h2>
            <div style={{ width: "100%", height: 320 }}>
              <ResponsiveContainer>
                <LineChart data={salesData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#6366F1" strokeWidth={3} />
                  <Line type="monotone" dataKey="profit" stroke="#06B6D4" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <aside className="bg-gray-800 rounded-2xl p-5 shadow-md">
            <h3 className="text-lg font-semibold text-indigo-300 mb-2">Products</h3>
            <div style={{ width: "100%", height: 220 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={productBreakdown}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={4}
                    label
                  >
                    {productBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </aside>
        </div>
      </div>
                  <Toaster position='top-right' autoClose={2000} />

    </div>
  );
}

