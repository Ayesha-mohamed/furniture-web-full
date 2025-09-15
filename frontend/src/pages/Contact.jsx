import React from 'react';

function Contact() {
  return (
    <div className="bg-cover bg-center w-full h-screen bg-[url('https://i.pinimg.com/1200x/95/1a/07/951a078a6c4e941686cf94de16303b72.jpg')] flex items-center justify-center">
      <div className="w-full max-w-md bg-white  bg-white/50 backdrop-blur-lg  rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-violet-700">
          Contact Us
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
