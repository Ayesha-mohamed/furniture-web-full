// import React from 'react';

// function Contact(props) {
//     return (
//         <div className='w-[400px] h-[500px] ml-5'>
//             <h1>Contact Form</h1>
//             <div className='bg-violet-700 px-12 py-6'>

//             <form>
//                 <h1 className='text-2xl font-semibold text-white'>Send Us message</h1>
//                     <label>Name</label><br /> 
//                 <input className='w-[200px]' type="text" placeholder='' /> <br /> <br />
//                     <label>Email</label>
//                     <br />
//                 <input className='w-[200px]' type="text" placeholder='' /> <br /> <br />
//                 <div>
//                     <label>message</label><br /> 
//                <textarea className='px-2 py-2 outline-none w-[200px] h-[100px] rounded-2xl placeholder:message' >Message</textarea>
//                <button className='px-7 py-3 bg-red-700 rounded-xl'>Send Us Message</button>
//                </div>
//             </form>
//             </div>
    
//         </div>
    
//     );
// }

// export default Contact;


import React from 'react';

function Contact() {
    
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-violet-700">
          Contact Form
        </h1>

        <form className="space-y-5">
          {/* Name */}
          <div >
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg outline-none focus ring focus ring-violet-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-violet-500 h-28 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-violet-700 text-white font-semibold py-3 rounded-lg hover:bg-violet-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      
    </div>
  );
}

export default Contact;
