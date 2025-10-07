import React from 'react';
import Banner from '../Components/Banner';
import States from '../Components/States';
import useApps from '../hooks/useApps';


const Home = () => {
    const data= useApps()
    console.log(data)
    return (
        <div>
            <Banner></Banner>
        {/* <div className='p-16 text-white bg-blue-400'>
             <h1 className='font-bold text-3xl text-center '>Trusted by Millions, Built for You</h1>
            <div className='flex  justify-evenly mt-6'> 
                <div className='text-center '>
                    <small>Total Downloads</small>
                    <h1 className='font-extrabold text-5xl mt-2 mb-1'>29.6M</h1>
                    <small>21% more than last month</small>
                </div>
                <div className='text-center '>
                    <small>Total Reviews</small>
                    <h1 className='font-extrabold text-5xl mt-2 mb-1'>906K</h1>
                    <small>46% more than last month</small>
                </div>
                <div className='text-center '>
                    <small>Active Apps</small>
                    <h1 className='font-extrabold text-5xl mt-2 mb-1'>132+</h1>
                    <small>31 more will Launch</small>
                </div>
                

            </div>

       </div> */}
            <States></States>
            
             
            
        </div>
    );
};

export default Home;