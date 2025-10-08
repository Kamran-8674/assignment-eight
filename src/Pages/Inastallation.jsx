import React from 'react';
import hhh from '../assets/demo-app (4).webp'

const Inastallation = () => {
    return (
        <div className='bg-[#FFF0E1] h-svh p-10'>
           <div className='text-center'> <h1 className='font-bold text-2xl'>Your Installed Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between mt-10'>
                <h1 className='font-bold text-xl'>fsdff</h1>
                <select className='w-15' name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>


            <div className='flex justify-between bg-white p-3 rounded-md mt-2'>
                <div className='flex'>
                    <img width={'12px'} src={hhh} alt="" />

                    <div>
                        <h1 className='font-semibold text-lg'>fsfsdfs</h1>
                        <div className='flex'><span>d</span> <span>d</span></div>
                    </div>

                </div>
                <button class="btn bg-[#00D390]  btn-active btn-secondary">Secondary</button>

            </div>
           
        </div>
    );
};

export default Inastallation;