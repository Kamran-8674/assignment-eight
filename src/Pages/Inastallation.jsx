import {  useEffect, useState } from 'react';
import InstllationCard from '../Components/InstllationCard';

const Inastallation = () => {
    const [installation,setInstallation]= useState([])
    const [sortOrder, setSortOrder] = useState()

    useEffect(()=>{
         const savedInstallation = JSON.parse(localStorage.getItem('installated'))
    if(savedInstallation){
        setInstallation(savedInstallation)
    }

    },[])

    const sortedItems = () => {
        if(sortOrder === 'ascn-desn') {
            return [...installation].sort((a,b) => b.size - a.size)
        }
        else if(sortOrder==='desn-ascn'){
             return [...installation].sort((a,b) => a.size - b.size)
        }
        else{
            return installation
        }
    }
    const removeHandle =(id)=>{
 const existedList = JSON.parse(localStorage.getItem('installated'))
 let updatedList = existedList.filter(a=> a.id!==id)
    setInstallation(updatedList)
    localStorage.setItem('installated',JSON.stringify(updatedList))

    }
   
    
   
   
   
    
    return (
        <div className='bg-[#FFF0E1] h-svh p-10'>
           <div className='text-center'> <h1 className='font-bold text-2xl'>Your Installed Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between mt-10'>
                <h1 className='font-bold text-xl'>{sortedItems().length} Apps Found</h1>
             <select value={sortOrder} onChange={e => setSortOrder( e.target.value)} className="select select-neutral">
               <option value='none'>Select By Size</option>
               <option value='ascn-desn'>High-Low</option>
                <option value='desn-ascn'>Low-High</option>
 
              </select>
            </div>


           {/* {app.map(a=> <InstllationCard a={a}></InstllationCard>)} */}
           {sortedItems().map(a=> <InstllationCard a={a} handleRemove={removeHandle}></InstllationCard>)}
           
        </div>
    );
};

export default Inastallation;