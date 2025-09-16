import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="bg-blue-950 w-full px-10 py-8 text-white ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Info */}
        <div>
          <h1 className="text-3xl font-semibold mb-2">FurniLuxe</h1>
          <p className="text-gray-400 text-sm">  Discover Timeless Furniture for Modern Living </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Navigation</h2>
          <ul className="space-y-1 text-gray-400 text-sm">
        <Link to="/" >   <li>Home</li></Link>
        <Link to="/About"> <li>About</li></Link>    
         <Link to="/shop"><li>Shop</li></Link>   
        <Link to="/Contact"> <li>Contact</li> </Link> 
        {/* <Link to="/dashboard"> <li>Admin login</li> </Link>  */}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Information</h2>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li>+252 614937829</li>
            <li>info@furniture.com</li>
            <li>123 Main Street, City</li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Opening Hours</h2>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li>Mon - Thu: 9:00 - 21:00</li>
            <li>Fri: 8:00 - 21:00</li>
            <li>Sat: 9:30 - 15:00</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
        
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        © 2025 Furniture Co. All rights reserved.
      </div>
    </div>
  )
}

export default Footer