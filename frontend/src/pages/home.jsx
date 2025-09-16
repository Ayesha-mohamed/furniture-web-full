import React, { useState } from 'react';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

function Home(props) {
 
    return (
        <div>
          {/* 1 */}
        <div className="bg-cover bg-center w-full sm:h-[90vh] md:h-screen h-screen bg-[url('https://i.pinimg.com/1200x/90/2d/29/902d29873adecc364c265b10fb2bbdd5.jpg')] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">  Luxury Furniture That Fits <br /> Your Lifestyle  </h1>
      <Link to="/shop"> <button className="mt-8 px-6 sm:px-12 py-2 sm:py-3 text-lg sm:text-2xl  md:text-3xl text-white bg-blue-950 rounded-lg"> Show more </button></Link> 
          </div>
       {/* 2 */}
       <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 bg-blue-950 rounded-lg w-[90%] sm:w-[630px] py-4">
     <div className="grid grid-cols-2 sm:flex sm:justify-around gap-6 text-center">
    <h1 className="text-white text-sm sm:text-base md:text-lg">  7 <br /> Years <br /> Experience </h1>
    <h1 className="text-white text-sm sm:text-base md:text-lg">  2 <br /> Opened in <br /> Country </h1>
    <h1 className="text-white text-sm sm:text-base md:text-lg">   20K+ <br /> Furniture <br /> Sold </h1>
    <h1 className="text-white text-sm sm:text-base md:text-lg">  260+ <br /> Variant <br /> Furniture </h1>
     </div>
    </div>

         <div className="flex flex-col md:flex-row items-center md:items-start mt-36 px-6 md:px-12 gap-12">
  {/* Left text section */}
  <div className="md:w-1/2 text-center md:text-left">
    <h1 className="text-2xl sm:text-3xl font-semibold text-blue-950">
      Why Choose Us
    </h1>
    <p className="mt-5 text-gray-500 text-sm sm:text-base leading-relaxed">
      At Luxury, we blend craftsmanship with comfort to deliver timeless
      furniture pieces that elevate every space. Our commitment to quality
      materials, modern designs, and customer satisfaction sets us apart.
      Whether you're furnishing a cozy apartment or a stylish office, we help
      bring your vision to life — beautifully and affordably.
    </p>
    <button className="px-6 sm:px-8 py-2 sm:py-3 text-white text-lg sm:text-2xl bg-blue-950 rounded-lg mt-6">
      Read More...
    </button>
  </div>

  {/* Right features grid */}
  <div className="grid grid-cols-2 gap-6 md:gap-8 md:w-1/2">
    {/* 1 */}
    <div className="bg-blue-950 w-full h-[130px] text-white rounded-lg flex flex-col items-center justify-center shadow-lg hover:scale-105 duration-300 cursor-pointer">
      <i className="fa-regular fa-truck text-3xl sm:text-4xl"></i>
      <h1 className="text-sm sm:text-lg font-semibold mt-2">Free Delivery</h1>
    </div>

    {/* 2 */}
    <div className="bg-blue-950 w-full h-[130px] text-white rounded-lg flex flex-col items-center justify-center shadow-lg hover:scale-105 duration-300 cursor-pointer">
      <i className="fa-solid fa-check text-3xl sm:text-4xl"></i>
      <h1 className="text-sm sm:text-lg font-semibold mt-2">Secure Payment</h1>
    </div>

    {/* 3 */}
    <div className="bg-blue-950 w-full h-[130px] text-white rounded-lg flex flex-col items-center justify-center shadow-lg hover:scale-105 duration-300 cursor-pointer">
      <i className="fa-solid fa-inbox text-3xl sm:text-4xl"></i>
      <h1 className="text-sm sm:text-lg font-semibold mt-2">Free Installation</h1>
    </div>

    {/* 4 */}
    <div className="bg-blue-950 w-full h-[130px] text-white rounded-lg flex flex-col items-center justify-center shadow-lg hover:scale-105 duration-300 cursor-pointer">
      <i className="fa-solid fa-award text-3xl sm:text-4xl"></i>
      <h1 className="text-sm sm:text-lg font-semibold mt-2">Guarantee</h1>
      </div>
     </div>
      </div>
         {/* qebt4 */}
     <div className="text-center mt-10 px-4 sm:px-8">
  <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-950 font-semibold"> Shop by Room</h1>
  <p className="text-gray-500 mt-4 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
    Transform every corner of your home with ease. Whether you're refreshing
    your living room, upgrading your bedroom, or organizing your office, our
    curated collections help you find the perfect furniture for every space.
    Browse by room and create a home that reflects your style and comfort.</p>
</div>

 <div className="flex flex-col md:flex-row items-center md:items-start mt-10 px-4 md:px-12 gap-8">
  <img className="w-full md:w-96 h-auto rounded-lg object-cover" src="https://i.pinimg.com/1200x/86/9d/95/869d950569d47622991d2b5d677e26f9.jpg" alt="Living Room" />
  <div className="md:ml-10 text-center md:text-left">
    <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-950 font-semibold mt-6 md:mt-20"> Living Room </h1>
    <p className="text-gray-500 mt-4 text-sm sm:text-base leading-relaxed max-w-xl">
      Create a cozy and stylish space where comfort meets design. Our living
      room collection offers everything from elegant sofas and modern coffee
      tables to functional storage and décor pieces. Whether you're entertaining
      guests or relaxing with family, find the perfect furniture to bring your
      living room to life. </p>
      </div>
       </div>
       {/* Q5 */}
  <div className="flex flex-col md:flex-row items-center md:items-start mt-10 px-4 md:px-12 gap-8">
  <div className="md:mr-10 text-center md:text-left">
    <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-950 font-semibold mt-6 md:mt-20">  Dining Room </h1>
    <p className="text-gray-500 mt-4 text-sm sm:text-base leading-relaxed max-w-xl">
      Create memorable moments around the table with our elegant and functional
      dining room furniture. From stylish tables to comfortable chairs, our
      pieces are designed to bring people together in warmth and style. </p>
  </div>
  <img className="w-full md:w-96 h-auto rounded-lg object-cover"  src="https://i.pinimg.com/736x/91/8b/e3/918be321c05b3e086b5439ca13bc748a.jpg"  alt="Dining Room" />
</div>

    {/* best selling */}
   <div className="mt-10 text-center px-4 sm:px-8">
  <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-950 font-semibold">  Best Selling Products </h1>
  <p className="text-gray-500 mt-4 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
    Discover our most loved and top-rated products, chosen by customers just like you.
    These bestsellers combine quality, style, and functionality, making them perfect
    additions to any space. Shop our best selling pieces and see why they're everyone's favorite!</p>
   </div>

   {/* Q7 */}

   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 px-4 sm:px-8">
  {/* 1 */}
  <div className="border-2 border-blue-950 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-300 cursor-pointer">
    <img  className="w-full h-52 object-cover"  src="https://i.pinimg.com/736x/89/ea/9a/89ea9a0d49daa9154c82dd5849810881.jpg"  alt="Armchair" />
    <div className="flex justify-between items-center p-2">
      <h1 className="text-lg sm:text-xl text-blue-950 font-semibold">Armchair</h1>
  <Link to="/shop" > <i class="fa-solid fa-shop text-yellow-600 text-xl sm:text-2xl "></i> </Link>
    </div>
  </div>

  {/* 2 */}
  <div className="border-2 border-blue-950 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-300 cursor-pointer">
    <img  className="w-full h-52 object-cover"  src="https://i.pinimg.com/736x/eb/6c/6f/eb6c6f5bf78883af9802198e830e206a.jpg"  alt="Dining"/>
    <div className="flex justify-between items-center p-2">
      <h1 className="text-lg sm:text-xl text-blue-950 font-semibold">Dining</h1>
    <Link to="/shop">  <i class="fa-solid fa-shop text-yellow-600 text-xl sm:text-2xl "></i></Link> 
    </div>
  </div>

  {/* 3 */}
  <div className="border-2 border-blue-950 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-300 cursor-pointer">
    <img className="w-full h-52 object-cover"  src="https://i.pinimg.com/1200x/ea/3d/75/ea3d75e51cd50b3ea2fc64ceac6ad91c.jpg" alt="Bar Stool"  />
    <div className="flex justify-between items-center p-2">
      <h1 className="text-lg sm:text-xl text-blue-950 font-semibold">Bar Stool</h1>
    <Link to="/shop">  <i class="fa-solid fa-shop text-yellow-600 text-xl sm:text-2xl "></i></Link>
    </div>
  </div>

  {/* 4 */}
  <div className="border-2 border-blue-950 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-300 cursor-pointer">
    <img className="w-full h-52 object-cover" src="https://i.pinimg.com/736x/4e/ea/07/4eea07e50b49174349b2fc4f75f6dcbd.jpg" alt="Office" />
    <div className="flex justify-between items-center p-2">
      <h1 className="text-lg sm:text-xl text-blue-950 font-semibold">Office</h1>
   <Link to="/shop">  <i class="fa-solid fa-shop text-yellow-600 text-xl sm:text-2xl "></i></Link> 
    </div>
  </div>

  {/* 5 */}
  <div className="border-2 border-blue-950 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-300 cursor-pointer">
    <img className="w-full h-52 object-cover" src="https://i.pinimg.com/1200x/31/32/f4/3132f48bab8edecb0eee6690232f80ee.jpg"  alt="Bed Far" />
    <div className="flex justify-between items-center p-2">
      <h1 className="text-lg sm:text-xl text-blue-950 font-semibold">Bed Far</h1>
  <Link to="/shop">  <i class="fa-solid fa-shop text-yellow-600 text-xl sm:text-2xl "></i> </Link> 
    </div>
  </div>

  {/* 6 */}
  <div className="border-2 border-blue-950 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-300 cursor-pointer">
    <img  className="w-full h-52 object-cover"  src="https://i.pinimg.com/1200x/05/40/a6/0540a62dd0626612b775bb1e7c05dff2.jpg"  alt="Dresser" />
    <div className="flex justify-between items-center p-2">
      <h1 className="text-lg sm:text-xl text-blue-950 font-semibold">Dresser</h1>
   <Link to="/shop">    <i class="fa-solid fa-shop text-yellow-600 text-xl sm:text-2xl "></i></Link>
    </div>
  </div>

  {/* 7 */}
  <div className="border-2 border-blue-950 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-300 cursor-pointer">
    <img className="w-full h-52 object-cover" src="https://i.pinimg.com/1200x/89/37/0a/89370a52635f55c6d78ab359508c1bea.jpg"  alt="Vanity T"  />
    <div className="flex justify-between items-center p-2">
      <h1 className="text-lg sm:text-xl text-blue-950 font-semibold">Vanity T</h1>
      <Link to="/shop" > <i class="fa-solid fa-shop text-yellow-600 text-xl sm:text-2xl "></i></Link>
    </div>
  </div>

  {/* 8 */}
  <div className="border-2 border-blue-950 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-300 cursor-pointer">
    <img  className="w-full h-52 object-cover"  src="https://i.pinimg.com/736x/0c/fc/99/0cfc99237c96413b824ba39296a31a59.jpg"  alt="Dresser"  />
    <div className="flex justify-between items-center p-2">
      <h1 className="text-lg sm:text-xl text-blue-950 font-semibold">Dresser</h1>
   <Link to="/shop">     <i class="fa-solid fa-shop text-yellow-600 text-xl sm:text-2xl "></i> </Link>
    </div>
    </div>
   </div>
   {/* Q8 */}
 <div className="flex flex-col md:flex-row mt-20 relative items-start md:items-center">
 
  <div className="ml-6 md:ml-12  mb-6 md:mb-0">
    <h1 className="text-3xl font-semibold">   The Best Furniture<br /> <span className="text-yellow-600">Manufacturer of your choice</span> </h1>
    <p className="mt-4 text-gray-500 max-w-md ">
      Furnitre power is a software as services for multiperpose business
      management system, especially for them who are running two or
      more business. Explore the future. Furnitre power is a software as services.
    </p>
  </div>

  <div className="relative md:ml-48 ml-10">
    <img className="h-64 w-64 md:h-96 md:w-96 rounded-lg mx-auto md:mx-0"  src="https://i.pinimg.com/736x/93/2f/c5/932fc5f4535c94e228866e8fb566c602.jpg"  alt="" />
    <img  className="absolute md:top-52 md:left-40 top-16 left-1/2 transform -translate-x-1/2 md:translate-x-0 w-40 h-56 rounded-lg"
    src="https://i.pinimg.com/1200x/d8/04/95/d80495514ef9bdf4c5953f7122bbb2e1.jpg"  alt="" />
    {/* <h1 className="absolute md:top-[450px] md:left-[255px]   top-[240px] mt-20 text-2xl text-blue-950 font-semibold text-center ">
      Interior Design by us</h1> */}
    </div>
   </div>

       {/* Commits Section */}
<div className="mt-40 px-4 md:px-10 md:mb-10 mb-10">
  <h1 className="text-blue-950 text-2xl font-semibold text-center md:text-left">  What people are saying about Us</h1>

  <div className="flex flex-col md:flex-row mt-10 items-center md:items-start">
    {/* Testimonials */}
    <div className="flex flex-col space-y-10 md:space-y-12">
      {/* Testimonial 1 */}
      <div className="flex items-start md:ml-0">
        <img   className="rounded-full w-20 h-20"   src="https://i.pinimg.com/736x/22/5f/4c/225f4c968155fcd81cc89182f673583b.jpg"   alt="" />
        <div className="ml-5">
          <h1 className="text-yellow-600 font-semibold">Manager of Century</h1>
          <p className="text-gray-500 max-w-xs">
            "Beautiful designs and very comfortable. I’ll definitely shop again."
          </p>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="flex items-start md:ml-0">
        <img  className="rounded-full w-20 h-20"  src="https://i.pinimg.com/736x/0a/d1/93/0ad19309a59be71b028548801ac38353.jpg"  alt="" />
        <div className="ml-5">
          <h1 className="text-yellow-600 font-semibold">Manager of Hayat</h1>
          <p className="text-gray-500 max-w-xs">
            "Fast delivery and excellent customer service. Highly recommend!"
          </p>
        </div>
      </div>
    </div>

    <div className="mt-10  md:mt-0 md:ml-72">
      <img  className="w-64 h-64 md:w-80 md:h-72 rounded-lg mx-auto md:mx-0"  src="https://i.pinimg.com/736x/20/6e/71/206e7131ea0993c198a6242426165435.jpg"  alt=""  />
    </div>
  </div>
</div>

          <Footer/>
        </div>
        
        
    );
}

export default Home;
