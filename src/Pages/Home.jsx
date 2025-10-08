import React from 'react';
import Banner from '../Components/Banner';
import States from '../Components/States';
import useApps from '../hooks/useApps';
import AppsCard from '../Components/AppsCard';


const Home = () => {
    const data= useApps()
    const {apps,loading}=data
    const trndingApps = apps.slice(0,8)
    
    return (
        
        <div>
            {loading?<p>loooooosfdfhsfhsafhsafhf</p>:''}
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
            
        <div className='p-6 bg-[#FFF0E1] '>
            <div className='text-center my-3'>
                <h1 className='font-bold text-3xl'>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {trndingApps.map(app=> <AppsCard app={app}></AppsCard>)}
            </div>
             <button className=" flex justify-center items-center mx-auto my-5 btn btn-active btn-secondary">Show All</button>

  


            

        </div>
             
            
     </div>
    );
};

export default Home;