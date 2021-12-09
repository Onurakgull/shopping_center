import React from 'react'

const Header = () => {
    return (
        <div className="container h-8 mx-auto p-5">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
            <div className="bg-gradient-to-r from-gray-300 to-red-300 w-10 h-10 rounded-lg"></div>
            <h1 className="text-3xl text-gray-600 ml-2">Logo</h1>
        </div>
        <div className="mt-2 ">
              <a href="#" className="text-gray-600 hover:text-yellow-600 p-4 transform transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-yellow-600 p-4 transform transition-colors">Shop</a>
              <a href="#" className="text-gray-600 hover:text-yellow-600 p-4 transform transition-colors">Blog</a>
              <a href="#" className="text-gray-600 hover:text-yellow-600 p-4 transform transition-colors">Contact</a>
              <a href="#" className="bg-purple-600 text-gray-50 hover:bg-purple-700 hover:text-gray-300 p-3 px-6 rounded-full transform transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
                Cart (0)</a>
            </div>
      </div>
      
    </div>
    )
}

export default Header
