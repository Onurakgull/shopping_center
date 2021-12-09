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
              <a href="#" className="bg-purple-600 text-gray-50 hover:bg-purple-700 hover:text-gray-300 p-3 px-3 rounded-full transform transition-colors">Cart (0)</a>

            </div>
      </div>
      
    </div>
    )
}

export default Header
