import React from 'react';
import Footer from '../components/footer';
import { NavLink } from 'react-router-dom';

function About(props) {
    return (
      <>
        <div>
             <section
     
     className=" sm:[90vh] h-screen bg-cover bg-center flex items-center justify-center text-white relative"
      style={{ backgroundImage: "url('https://i.pinimg.com/1200x/0c/5a/a6/0c5aa624cef2ac5844ab51c9fb69fc2d.jpg')" }}
    >
      {/* Overlay madow yar */}
      <div className="absolute inset-0 bg-black/50"></div>
       
      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-6  ">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
      </div>
    </section>

            <div className='w-full  mt-8 sm:flex pt-4  justify-around gap-20'>
        <div>

                <div className=' flex items-center gap-2 '>
                    <i className="fa-regular fa-clock text-2xl font-semibold  text-gray-400"></i>
                    <p className='text-2xl font-semibold'> Shop Online</p>
                </div>
                <p>Our online furniture shop, where you can find stylish and comfortable furniture for every room in your home.</p>
        </div>
           
            <div>
                <div className='flex items-center gap-2'>
                    <i className="fa-solid fa-briefcase text-2xl font-semibold  text-gray-400" ></i>
                    <p className='text-2xl font-semibold'> Free Shipping</p>
                </div>
                <p>We offer free shipping on all orders, so you can shop for your favorite furniture without worrying about extra costs.</p>        
            </div>
            <div>
                <div className='flex   items-center gap-2'>
                    <i className="fa-solid fa-credit-card text-2xl font-semibold text-gray-400"></i>
                    <p className='text-2xl font-semibold'> Return Policy</p>
                </div>
                <p>We want you to be happy with your purchase. If you are not satisfied, you can return your items within 30 days for a full refund or exchange. Returns are easy and hassle-free.</p>
        </div>

    
                <div>
                <div className='flex items-center gap-2'>
                    <i className="fa-regular fa-file-invoice-dollar text-2xl font-semibold text-gray-400"></i>
                    <p className='text-2xl font-semibold'> Payment</p>
                </div>
                <p>We offer secure and easy payment options for all orders. You can pay using credit cards, debit cards, or online payment methods.</p>
        </div>
        </div>

        <div>
            <section
                
     className="w-[100%] sm:[90vh]  h-[700px] bg-cover bg-center  mt-20"
      style={{ backgroundImage: "url('https://i.pinimg.com/1200x/9b/af/7b/9baf7b6bc570094488db8884b8bc6488.jpg')" }}
      >

      </section>
         
        </div>
        <div className='w-full sm:[90vh] px-7 py-4  sm:flex   flex-col-3 justify-around gap-20 mt-20'>
        <div>
            <h2 className='text-2xl font-semibold'>Functionality meets perfection</h2>
            <p>Welcome to our online furniture store, where style, comfort, and quality come together to create the perfect home environment. We offer a wide range of furniture, including sofas, beds, dining tables, chairs, <br /> and storage solutions, all designed to suit different tastes and lifestyles. Each piece is carefully crafted using durable materials to ensure long-lasting use while adding elegance to your living space.</p>
        </div>

       
        <div className='w-[300px]'> 
            <div className="flex justify-between mb-1">
          <span className="text-2xl font-medium text-gray-700">Creativity</span>
          <span className="text-sm font-medium text-gray-500">72%</span>
        </div>
         <div
            className="bg-blue-400 h-2 rounded-full transition-all duration-700 ease-out"
            style={{ width: "72%" }}
          ></div>
            <div className="flex justify-between mb-1">
          <span className="text-2xl font-medium text-gray-700">Advertising</span>
          <span className="text-sm font-medium text-gray-500">84%</span>
        </div>
         <div
            className="bg-black h-2 rounded-full transition-all duration-700 ease-out"
            style={{ width: "84%" }}
          ></div>
            <div className="flex justify-between mb-1">
          <span className="text-2xl font-medium text-gray-700">Design</span>
          <span className="text-sm font-medium text-gray-500">80%</span>
        </div>
         <div
            className="bg-blue-400 h-2 rounded-full transition-all duration-700 ease-out"
            style={{ width: "80%" }}
          ></div>
        </div>
         </div >
          <h1 className='text-3xl font-semibold mb-5 ml-8 mt-3'>Latest Our Products</h1>
         <div className='w-full flex-col-2  items-center sm:flex mb-40 ml-10  justify-around text-center gap-2'>
           
            <div  className='w-[350px]  rounded-3xl  '>
                <img  className='w-[300px] h-[300px] rounded-lg'  src="https://i.pinimg.com/1200x/aa/26/5c/aa265cd71b567e57cc629ab96d958e98.jpg" alt="" />
                <h3 className='font-semibold'>sep 13 2025</h3>
                <p>Paint your office in natural colors only</p>
              <NavLink to={"/shop"}> <button className=' px-8 py-2 text-blue-600 border-b-2 font-semibold'>Read More</button> </NavLink>
            </div>
            <div className='w-[350px] rounded-3xl ' >
                <img className='w-[300px] h-[300px] rounded-lg' src="https://i.pinimg.com/1200x/68/69/62/68696297a529fe57fb579a75a4f86905.jpg" alt="" />
                <h3 className='font-semibold'>sep 13 2025</h3>
                <p>Paint your office in natural colors only</p>
               <NavLink to={"/shop"}><button className='px-8 py-2 text-blue-600 border-b-2 font-semibold'>Read More</button></NavLink>
            </div>
            <div className='w-[350px] rounded-3xl'>
                <img className='w-[300px] h-[300px] rounded-lg' src="https://i.pinimg.com/1200x/ab/f9/b8/abf9b8faa5be1797b0044f2b43160045.jpg" alt="" />
                <h3 className='font-semibold'>sep 13 2025</h3>
                <p>Paint your office in natural colors only</p>
               <NavLink to={"/shop"}>  <button className=' px-8 py-2 border-b-2 text-blue-600 font-semibold'>Read More</button></NavLink>
            </div>
            <div className='w-[350px]  rounded-3xl mr-7'>
                <img className='w-[300px] h-[300px] rounded-lg ' src="https://i.pinimg.com/736x/57/10/00/571000c64b3765975d8d49acf40f165d.jpg" alt="" />
                <h3 className='font-semibold'>sep 13 2025</h3>
                <p>Paint your office in natural colors only</p>
              <NavLink to={"/shop"}> <button className=' px-8 py-2 border-b-2 text-blue-600 font-semibold'>Read More</button></NavLink> 
            </div>
         </div>
        
        </div>

        <Footer/>
        </>
    );
}

export default About;