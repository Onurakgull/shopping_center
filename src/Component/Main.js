import React from 'react'
import ImageOne from '../img/shopp.svg'

const Main = () => {
    return (
        <div className='md:flex md:flex-row justify-center mt-12 mb-12'>
            <div className="flex flex-col justify-center mr-7">
                <h2 className='text-5xl -mt-10 font-serif text-green-800 text-center md:self-start md:text-left'>Merhaba Alışveriş Siteme Hoş Geldiniz!!!</h2>
                <hr className='text-gray-800'/>
                <p className='text-xl font-serif  text-gray-600 md:self-start' >Bu sitede istediğiniz ürünü kolay bir şekilde bulabilir ve alışverişin tadını çıkarabilirsiniz.</p>
                <p className='text-xl font-serif  text-gray-600 md:self-start' >Şimdi Alışverişe Başla!</p>
                <hr className='text-gray-800'/>
                <button className='md:self-start py-4 px-8 my-5 bg-red-400 rounded-full text-white text-sm hover:bg-red-600'>Now Run</button>
            </div>
            <div>
            <img src={ImageOne} alt=""
            className='mb-4'/>
            </div>
        </div>
    )
}

export default Main
