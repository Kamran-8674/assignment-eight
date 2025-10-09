import React, { useState } from 'react';
import useApps from '../hooks/useApps';
import AllCards from '../Components/AllCards';

const Apps = () => {
    
    
    const {apps,loading} =useApps()
    const [search,setSearch]=useState('')
    // console.log(search)

    const joined= search.trim().toLocaleLowerCase()

    const filterSearched = joined? apps.filter(app => app.title.toLocaleLowerCase().includes(joined)):apps
    loading && <p>gygy</p>

    
    
//   console.log(apps)
    return (
        <div>
            <div className='p-6 bg-[#FFF0E1] '>
            <div className='text-center my-3'>
                <h1 className='font-bold text-3xl'>Our All Applications</h1>
                
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
                
            </div>
            <div className='flex justify-between p-4'>
                <h1 className='text-2xl font-bold'>({filterSearched.length})Apps Found</h1>
                <input
                className='bg-white px-5 py-2'
                 value={search}
                 onChange={ e =>setSearch(e.target.value)}   type="search"   placeholder='Search Your App' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                
                {  
                
                filterSearched.map(app=> <AllCards app={app}></AllCards>)
            }
            
            </div>
            
            </div>
            
        </div>
    );
};

export default Apps;