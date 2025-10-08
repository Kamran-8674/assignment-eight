import React from 'react';
import useApps from '../hooks/useApps';
import AllCards from '../Components/AllCards';

const Apps = () => {

  const {apps} =useApps()
  console.log(apps)
    return (
        <div>
            <div className='p-6 bg-[#FFF0E1] '>
            <div className='text-center my-3'>
                <h1 className='font-bold text-3xl'>Our All Applications</h1>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between'>
                <h1>sffgdsfg</h1>
                <input className='bg-white' type="search" name="" id="" />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                apps.map(app=> <AllCards app={app}></AllCards>)
            }
            </div>
            
            </div>
            
        </div>
    );
};

export default Apps;