import React from 'react'
import ImageOne from '../img/shopp.svg'

const Main = () => {
    return (
        <div className='flex flex-row justify-center mt-12'>
            <div className="flex flex-col justify-center mr-7">
                <h2 className='text-5xl font-serif text-green-800'>Merhaba Alışveriş Siteme Hoş Geldiniz!!!</h2>
                <hr className='text-gray-800'/>
                <p className='text-xl uppercase text-gray-600'>Bu sitede istediğiniz ürünü kolay bir şekilde bulabilir ve alışverişin tadını çıkarabilirsiniz.</p>
                <p className='text-xl uppercase text-gray-600'>Şimdi Alışverişe Başla!</p>
                <button className='w-20 h-10 bg-red-400 rounded-full text-white text-sm hover:bg-red-600'>Now Run</button>
            </div>
            <div className=''>
            <img src={ImageOne} 
            name='edit-save' 
            className='mb-4'/>
            </div>
        </div>
    )
}

export default Main
