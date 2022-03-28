import React from "react";
import { Link, Navigate } from 'react-router-dom';
import Logo from '../../Assets/logo.jpg'
export default function NavBar() {
  return (
    <div className="container mx-auto p-5">
    <div className="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
      <div className="flex flex-row justify-center">
      <img src={Logo} className="w-10 h-10" />
        <h1 className="text-3xl text-gray-600 ml-2">MegaStore</h1>
      </div>
      <div className="mt-2">
        <Link to="/" className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Home</Link>
        <Link to="#" className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Shop</Link>
        <Link to="#" className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Products</Link>
        <Link to="#" className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Contact</Link>
        <a href="#" className="bg-purple-600 text-gray-50 hover:bg-purple-700 p-3 px-3 sm:px-5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          0
        </a>
        <Link to="/login" className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-3 px-6 text-gray-50 uppercase ml-4 md:self-start ">
            Login In
        </Link>
      </div>
    </div>
    </div>
  );
}
