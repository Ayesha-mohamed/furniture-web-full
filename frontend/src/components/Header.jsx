import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const getUser = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
  };

  const cartCount = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cartCount.length;

  return (
    <header className="shadow-md w-full fixed top-0 left-0 bg-white/20 z-50">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        
        {/* Brand */}
        <h1 className="text-3xl font-bold">
          Furni<span className="text-yellow-800">Luxe</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center">
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/about"><li>About</li></NavLink>
          <NavLink to="/shop"><li>Shop</li></NavLink>
          <NavLink to="/contact"><li>Contact</li></NavLink>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-6">
          {getUser ? (
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-yellow-800 flex items-center justify-center text-white font-bold">
                {JSON.parse(getUser).data?.customer.name[0]}
              </div>
              <Link to="/login">
                <button onClick={handleLogout}>
                  <i className="fa-solid fa-right-from-bracket text-2xl"></i>
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-4">
              <NavLink to="/login">
                <button className="bg-blue-950 px-6 py-2 rounded-md text-white">
                  Login
                </button>
              </NavLink>
              <NavLink to="/signUp">
                <button className="border-2 border-black px-6 py-2 rounded-md">
                  Sign up
                </button>
              </NavLink>
            </div>
          )}

          <div className="relative">
            <NavLink to="/cart">
              <i className="fa-solid fa-cart-shopping text-2xl"></i>
            </NavLink>
            <span className="bg-red-500 text-white rounded-full px-2 text-xs absolute -top-2 -right-3">
              {count}
            </span>
          </div>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full shadow-md">
          <ul className="flex flex-col items-center gap-6 py-6">
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/shop" onClick={() => setIsOpen(false)}>Shop</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>

            {getUser ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="text-red-600"
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink to="/login" onClick={() => setIsOpen(false)}>
                  <button className="bg-blue-950 px-6 py-2 rounded-md text-white">
                    Login
                  </button>
                </NavLink>
                <NavLink to="/signUp" onClick={() => setIsOpen(false)}>
                  <button className="border-2 border-black px-6 py-2 rounded-md">
                    Sign up
                  </button>
                </NavLink>
              </>
            )}

            <div className="relative">
              <NavLink to="/cart" onClick={() => setIsOpen(false)}>
                <i className="fa-solid fa-cart-shopping text-2xl"></i>
              </NavLink>
              <span className="bg-red-500 text-white rounded-full px-2 text-xs absolute -top-2 -right-3">
                {count}
              </span>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
