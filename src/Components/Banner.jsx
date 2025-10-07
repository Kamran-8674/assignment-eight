import React from 'react';
import heroPng from '../assets/hero.png'



const Banner = () => {
    return (
        <div className='text-center pt-15 bg-[#FFF0E1] '>
                <h1 className='font-bold text-5xl mb-5'>We Build <br /> <span className='text-[#834AEB]'>Productive </span> Apps</h1>
                <p>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                  <div className='space-x-2 mt-5'>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><i className="fa-solid fa-play text-blue-500"></i>Google Play</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><i className="fa-brands fa-app-store-ios text-blue-500 font-bold"></i>App Store</button>
                 </div>
                <div className='flex justify-center items-center mt-5'> <img src={heroPng} alt="" /> </div>
             </div>
    );
};

export default Banner;