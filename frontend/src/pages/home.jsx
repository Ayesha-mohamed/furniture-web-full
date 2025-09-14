import React from 'react';

function Home(props) {
    return (
        <div>
        <div className="bg-cover bg-center w-full h-screen bg-[url('https://i.pinimg.com/1200x/90/2d/29/902d29873adecc364c265b10fb2bbdd5.jpg')]">
         <h1 className='text-5xl font-semibold text-white text-center pt-36'>Luxury Furniture That Fits<br></br> Your Lifestyle</h1>
         <button className='px-12 py-3 text-white bg-blue-950 text-3xl rounded-lg ml-[490px] mt-11'>Show more</button>
        </div>
          <div className='bg-blue-950 w-[630px] h-[100px] rounded-lg absolute -bottom-32 ml-72'>
            <div className='flex gap-14 ml-9 text-center '>
          <h1 className='text-white ml-4 mt-3'> 7 <br></br>Years <br></br> Expreience</h1>
          <h1 className='text-white ml-4 mt-3'> 2 <br></br>Opened in  <br></br> Country</h1>
          <h1 className='text-white ml-4 mt-3'>20K+ <br></br>furniture  <br></br> sold</h1>
          <h1 className='text-white ml-4 mt-3'> 260+ <br></br>Variant <br></br> furniture</h1>
          </div>
          </div>
           
           <div className='flex'>
            <div className='mt-20 ml-12'>
                <h1 className='text-3xl font-semibold text-blue-950'>Why Choose Us  </h1>
                <p className='mt-5 text-gray-500'>At luxury , we blend craftsmanship with comfort to deliver
                     timeless<br></br> furniture pieces that elevate every space. Our commitment to quality<br></br>
                      materials, modern designs, and customer satisfaction sets us apart. <br></br>
                      Whether you're furnishing a cozy apartment or a stylish office, <br></br>
                    we help bring your vision to life — beautifully and affordably.</p>
                    <button className='px-8 py-3 text-white text-2xl bg-blue-950 rounded-lg mt-6 ml-6'>Read More...</button>
            </div>
         {/* box4 */}
                <div className='  grid grid-cols-2 ml-36 '>
                <div className="bg-blue-950  w-[150px] h-[130px] text-white rounded-lg  items-center justify-center ml-10 mt-20 shadow-lg hover:scale-105 duration-300 cursor-pointer">
                  <i class="fa-regular fa-truck text-white text-4xl ml-10 mt-6 "></i>  
                <h1 className="text-lg font-semibold text-center mt-2">Free Delivery</h1>
                </div>
                {/* 2 */}
                <div className="bg-blue-950  w-[150px] h-[130px] text-white rounded-lg  items-center justify-center ml-10 mt-20 shadow-lg hover:scale-105 duration-300 cursor-pointer">
                    <i class="fa-solid fa-check text-4xl ml-10 mt-6 "></i>
                <h1 className="text-lg font-semibold text-center mt-2">secure payment</h1>
                </div>
                {/* 3 */}
                <div className="bg-blue-950  w-[150px] h-[130px] text-white rounded-lg  items-center justify-center ml-10 mt-6 shadow-lg hover:scale-105 duration-300 cursor-pointer">
                    <i class="fa-solid fa-inbox text-white text-4xl ml-10 mt-6"></i>
                    <h1 className="text-lg font-semibold text-center mt-2 ">free installation</h1>
                </div>
                {/* 4 */}

                <div className="bg-blue-950  w-[150px] h-[130px] text-white rounded-lg  items-center justify-center ml-10 mt-6 shadow-lg hover:scale-105 duration-300 cursor-pointer">
                 <i class="fa-solid fa-award text-white text-4xl ml-10 mt-6"></i>
                <h1 className="text-lg font-semibold text-center mt-2">Guarantee</h1>
                </div>
             </div>
           
           </div>
         
              <div className=' text-center mt-7'>
                <h1 className='text-4xl text-blue-950 font-semibold'>Shop by Room</h1>
                <p className='text-gray-500 mt-3'>Transform every corner of your home with ease.
                     Whether you're refreshing<br></br> your living room upgrading your bedroom,
                     or organizing your office, <br></br>our curated collections help you find the
                      perfect furniture for every space<br></br>
                     Browse by room and create a home that reflects your style and comfort.</p>
              </div>

              <div className='flex mt-10 ml-12'> 
              <img className='h-96 w-96 rounded-lg' src="https://i.pinimg.com/1200x/86/9d/95/869d950569d47622991d2b5d677e26f9.jpg" alt="" />
              <div className=''>
               <h1 className='text-blue-950 text-4xl font-semibold ml-10 mt-20'>Living Rom</h1>
               <p className='text-gray-500 ml-10 mt-4'>Create a cozy and stylish space where comfort meets design.<br></br>
                 Our living room collection offers everything from elegant sofas<br></br>
                  and modern coffee tables to functional storage and décor pieces.<br></br>
                   Whether you're entertaining guests or relaxing with family,
                 find the<br></br> perfect furniture to bring your living room to life</p>
                 </div>
              </div>

              <div className='flex mt-10 ml-12'>
                <div className=''>
                    <h1 className='text-blue-950 text-4xl font-semibold ml-10 mt-20'>Dinning room</h1>
                    <p className='text-gray-500 ml-10 mt-4'>Create memorable moments around the table<br></br> with our elegant and functional dining room furniture
                      <br></br>   From stylish tables to comfortable chairs,
                         our pieces<br></br> are designed to bring people together in warmth and style</p>
                </div>
              <img className='h-96 w-96 rounded-lg ml-48' src="https://i.pinimg.com/736x/91/8b/e3/918be321c05b3e086b5439ca13bc748a.jpg" alt="" />
              </div>

              <div>

              </div>
            
            {/* best selling */}
            <div className='mt-10 text-center '>
                <h1 className='text-4xl text-blue-950 font-semibold'>Best Selling Products</h1>
                <p className='text-gray-500 mt-3'>Discover our most loved and top-rated products, chosen <br></br> by customers just like you.
                     These bestsellers combine quality,<br></br> style, and functionality  making them perfect additions to any space. 
                 <br></br>   Shop our best selling pieces and see why they're everyone's favorite!</p>
            </div>

            <div className='grid grid-cols-4 ml-8 mt-10'>
           <div className=' border-2 border-blue-950 w-64 h-64'>
           <img className='h-52 w-64' src="https://i.pinimg.com/736x/89/ea/9a/89ea9a0d49daa9154c82dd5849810881.jpg" alt="" />
           <div className='flex gap-28'>
           <h1 className='text-2xl text-blue-950 font-semibold ml-2'>Armchair </h1>
           <i class="fa-solid fa-plus text-yellow-600 text-2xl"></i>
           </div>
           </div>

            
            {/* 2 */}
                <div className='flex ml-2 mb-3'>
           <div className=' border-2 border-blue-950 w-64 h-64'>
           <img className='h-52 w-64' src="https://i.pinimg.com/736x/eb/6c/6f/eb6c6f5bf78883af9802198e830e206a.jpg" alt="" />
           <div className='flex gap-28'>
           <h1 className='text-xl text-blue-950 font-semibold ml-2'> Dining  </h1>
           <i class="fa-solid fa-plus text-yellow-600 text-2xl"></i>
           </div>
           </div>

            </div>

            {/* 3 */}
                <div className='flex ml-2 mb-3'>
           <div className=' border-2 border-blue-950 w-62 h-64'>
           <img className='h-52 w-64' src="https://i.pinimg.com/1200x/ea/3d/75/ea3d75e51cd50b3ea2fc64ceac6ad91c.jpg" alt="" />
           <div className='flex gap-28'>
           <h1 className='text-2xl text-blue-950 font-semibold ml-2'>Bar Stool  </h1>
           <i class="fa-solid fa-plus text-yellow-600 text-2xl"></i>
           </div>
           </div>

            </div>
            {/* 4 */}
                 <div className='flex ml-4 mb-3'>
           <div className=' border-2 border-blue-950 w-60 h-64'>
           <img className='h-52 w-64' src="https://i.pinimg.com/736x/4e/ea/07/4eea07e50b49174349b2fc4f75f6dcbd.jpg" alt="" />
           <div className='flex gap-28'>
           <h1 className='text-2xl text-blue-950 font-semibold ml-2'>Office </h1>
           <i class="fa-solid fa-plus text-yellow-600 text-2xl"></i>
           </div>
           </div>

            </div>

            {/* 5 */}

                 <div className='flex  mb-3'>
           <div className=' border-2 border-blue-950 w-64 h-64'>
           <img className='h-52 w-64' src="https://i.pinimg.com/1200x/31/32/f4/3132f48bab8edecb0eee6690232f80ee.jpg" alt="" />
           <div className='flex gap-28'>
           <h1 className='text-2xl text-blue-950 font-semibold ml-2'> Bed Far  </h1>
           <i class="fa-solid fa-plus text-yellow-600 text-2xl"></i>
           </div>
           </div>

            </div>

         {/* 6 */}

                 <div className='flex ml-2 mb-3'>
           <div className=' border-2 border-blue-950 w-64 h-64'>
           <img className='h-52 w-64' src="https://i.pinimg.com/1200x/05/40/a6/0540a62dd0626612b775bb1e7c05dff2.jpg" alt="" />
           <div className='flex gap-28'>
           <h1 className='text-2xl text-blue-950 font-semibold ml-2'> Dresser   </h1>
           <i class="fa-solid fa-plus text-yellow-600 text-2xl"></i>
           </div>
           </div>

            </div>
            {/* 7 */}
                 <div className='flex ml-2 mb-3'>
           <div className=' border-2 border-blue-950 w-64 h-64'>
           <img className='h-52 w-64' src="https://i.pinimg.com/1200x/89/37/0a/89370a52635f55c6d78ab359508c1bea.jpg" alt="" />
           <div className='flex gap-28'>
           <h1 className='text-2xl text-blue-950 font-semibold ml-2'>  Vanity T   </h1>
           <i class="fa-solid fa-plus text-yellow-600 text-2xl"></i>
           </div>
           </div>

            </div>
            {/* 8 */}
                 <div className='flex ml-2 mb-3'>
           <div className=' border-2 border-blue-950 w-64 h-64'>
           <img className='h-52 w-64' src="https://i.pinimg.com/736x/0c/fc/99/0cfc99237c96413b824ba39296a31a59.jpg" alt="" />
           <div className='flex gap-28'>
           <h1 className='text-2xl text-blue-950 font-semibold ml-2'> Dresser   </h1>
           <i class="fa-solid fa-plus text-yellow-600 text-2xl"></i>
           </div>
           </div>

            </div>
          </div>

          {/* best f */}
          <div className='flex mt-10 relative'>
            <div className='ml-12'>
                <h1 className='text-3xl font-semibold'>The Best Furniture<br></br> <span className='text-yellow-600'> Manufacturer of your choice </span></h1>
                <p className='mt-4 text-gray-500'>Furnitre power is a software as services for multiperpose business<br></br>
                     management system, expecially for them who are running two or<br></br>
                     more business exploree the future Furnitre power is a software as services </p>
            </div>
            <img className='h-96 w-96 rounded-lg ml-72' src="https://i.pinimg.com/736x/93/2f/c5/932fc5f4535c94e228866e8fb566c602.jpg" alt="" />
            <img className=' top-52 absolute w-48 h-56 rounded-lg left-[950px]' src="https://i.pinimg.com/1200x/d8/04/95/d80495514ef9bdf4c5953f7122bbb2e1.jpg" alt="" />
           <h1 className='top-[450px] absolute left-[955px] text-2xl text-blue-950 font-semibold'>Interior Design by us</h1>
          </div>
         {/* commites */}
         <h1 className='text-blue-950 ml-10 text-2xl font-semibold mt-28'>what people are saying about Us</h1>
          <div className='flex mt-10'>
            <div className=''>
            <div className='flex ml-10'>
                <img className='rounded-[50%] w-20 h-20' src="https://i.pinimg.com/736x/22/5f/4c/225f4c968155fcd81cc89182f673583b.jpg" alt="" />
                <div className='ml-5'>
                <h1 className='text-yellow-600 font-semibold'>Maneger of centery</h1>
                <p className='text-gray-500'>"Beautiful designs and very comfortable I’ll definitely shop again"</p>
                 </div>
            </div>
            {/* 2 */}
            <div className='flex ml-10 mt-10'>
                <img className='rounded-[50%] w-20 h-20' src="https://i.pinimg.com/736x/0a/d1/93/0ad19309a59be71b028548801ac38353.jpg" alt="" />
                <div className='ml-5'>
                <h1 className='text-yellow-600 font-semibold'>Maneger of Hayat</h1>
                <p className='text-gray-500'>"Fast delivery and excellent customer service. Highly recommend!"</p>
                 </div>
            </div>
            </div>
           <img className='w-80 h-72 rounded-lg ml-64' src="https://i.pinimg.com/736x/20/6e/71/206e7131ea0993c198a6242426165435.jpg" alt="" />
          </div>
          
        </div>
        
    );
}

export default Home;
