import React from 'react'
import ImageHummel from '../img/hummel.jpg'

const Content = () => {
    return (
        <div className='grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
            <div className='shadow-lg rounded-lg'>
                <a href='#'>
                <img src={ImageHummel} alt='' className='rounded-tl-lg rounded-tr-lg'/>
                </a>
                <div className='p-5'>
                    <h3> <a href='#'> Men's Swetsheart </a></h3>
                    <div className='flex flex-row my-3'>
                        <div className='bg-gray-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
                        <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                        <div className='bg-white h-5 w-5 rounded-full shadow-md mr-2'></div>
                        <div className='bg-red-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                        <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
                    </div>
                    <div className='flex flex-row my-3'>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XXL</div>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XL</div>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>L</div>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>M</div>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>S</div>
                    </div>
                    <div className='flex flex-row justify-between' >
                        <button className='flex bg-gray-200 text-red-400 rounded-full justify-center p-2 transition-colors hover:bg-red-400 hover:text-gray-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        Add to cart
                        </button>
                        <button className='flex bg-gray-200 text-red-400 rounded-full justify-center p-2 transition-colors hover:bg-red-400 hover:text-gray-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>
                            View Details
                        </button>
                    </div>
                </div>
            </div>
            <div className='shadow-lg rounded-lg'>
                <a href='#'>
                <img src={ImageHummel} alt='' className='rounded-tl-lg rounded-tr-lg'/>
                </a>
                <div className='p-5'>
                    <h3> <a href='#'> Men's Swetsheart </a></h3>
                    <div className='flex flex-row my-3'>
                        <div className='bg-gray-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
                        <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                        <div className='bg-white h-5 w-5 rounded-full shadow-md mr-2'></div>
                        <div className='bg-red-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                        <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
                    </div>
                    <div className='flex flex-row my-3'>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XXL</div>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XL</div>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>L</div>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>M</div>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>S</div>
                    </div>
                    <div className='flex flex-row justify-between' >
                        <button className='flex bg-gray-200 text-red-400 rounded-full justify-center p-2 transition-colors hover:bg-red-400 hover:text-gray-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        Add to cart
                        </button>
                        <button className='flex bg-gray-200 text-red-400 rounded-full justify-center p-2 transition-colors hover:bg-red-400 hover:text-gray-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>
                            View Details
                        </button>
                    </div>
                </div>
            </div>
            <div className='shadow-lg rounded-lg'>
                <a href='#'>
                <img src={ImageHummel} alt='' className='rounded-tl-lg rounded-tr-lg'/>
                </a>
                <div className='p-5'>
                    <h3> <a href='#'> Men's Swetsheart </a></h3>
                    <div className='flex flex-row my-3'>
                        <div className='bg-gray-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
                        <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                        <div className='bg-white h-5 w-5 rounded-full shadow-md mr-2'></div>
                        <div className='bg-red-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                        <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
                    </div>
                    <div className='flex flex-row my-3'>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XXL</div>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XL</div>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>L</div>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>M</div>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>S</div>
                    </div>
                    <div className='flex flex-row justify-between' >
                        <button className='flex bg-gray-200 text-red-400 rounded-full justify-center p-2 transition-colors hover:bg-red-400 hover:text-gray-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        Add to cart
                        </button>
                        <button className='flex bg-gray-200 text-red-400 rounded-full justify-center p-2 transition-colors hover:bg-red-400 hover:text-gray-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>
                            View Details
                        </button>
                    </div>
                </div>
            </div>
            <div className='shadow-lg rounded-lg'>
                <a href='#'>
                <img src={ImageHummel} alt='' className='rounded-tl-lg rounded-tr-lg'/>
                </a>
                <div className='p-5'>
                    <h3> <a href='#'> Men's Swetsheart </a></h3>
                    <div className='flex flex-row my-3'>
                        <div className='bg-gray-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
                        <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                        <div className='bg-white h-5 w-5 rounded-full shadow-md mr-2'></div>
                        <div className='bg-red-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                        <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
                    </div>
                    <div className='flex flex-row my-3'>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XXL</div>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XL</div>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>L</div>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>M</div>
                        <div className='border-2 border-gray-200 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>S</div>
                    </div>
                    <div className='flex flex-row justify-between' >
                        <button className='flex bg-gray-200 text-red-400 rounded-full justify-center p-2 transition-colors hover:bg-red-400 hover:text-gray-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        Add to cart
                        </button>
                        <button className='flex bg-gray-200 text-red-400 rounded-full justify-center p-2 transition-colors hover:bg-red-400 hover:text-gray-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>
                            View Details
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Content
