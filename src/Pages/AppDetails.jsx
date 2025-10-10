import React, {   useContext, useState } from 'react';
import donwloadI from '../assets/icon-downloads.png'
import ratingI from '../assets/icon-ratings.png'
import reviweI from '../assets/icon-review.png'
import { useParams } from 'react-router';
import useApps from '../hooks/useApps';

import { AppsContext } from '../utility/AppContext';



const AppDetails = () => {
  

  
  const [installed, setInstalled]= useState(false)
  
  const {handleButton,app}=useContext(AppsContext)
  

  

  console.log(app)
  
  

    const {id} = useParams()
    const {apps,loading}=useApps()
    const finded = apps.find(a => a.id=== Number(id))
    console.log(finded)
    
    
    if(loading) return <p>loading</p>
    

    const {image,downloads,companyName, reviews,title,size,description,ratingAvg}=finded 

    const handleAddToLs=()=>{
      const existedList = JSON.parse(localStorage.getItem('installated'))
      let updatedList = []
      if(existedList){
         const isDuplicate =existedList.find(e=> e.id===finded.id)
         if(isDuplicate) return alert ('app already installed')
          updatedList= [...existedList,finded]

      }
      else{
        updatedList.push(finded)

      }
     



      localStorage.setItem('installated',JSON.stringify(updatedList))
    }
    
    return (
        <div className='p-8 bg-amber-200'>
        <div className="card h-90 md:card-side  bg-base-100 shadow-sm">
  <figure>
    <img className='p-7'
      src={image}
      alt="Album" />
  </figure>
  <div className="">
    <h2 className="card-title mt-8">{title}</h2>
    <p className='mb-4'>Developed by {companyName }</p>
    <div className='flex justify-between gap-15 border-t-1'>
        <div className='mt-9 flex flex-col items-center'>
            <img src={donwloadI} alt="" />
            <p>downlaod</p>
            <h1 className='font-bold text-3xl'>{downloads}</h1>
            
           
        </div>
        <div className='mt-9 flex flex-col items-center'>
            <img src={ratingI} alt="" />
            <p>Average Ratings</p>
            <h1 className='font-bold text-3xl'>{ratingAvg}</h1>
           
        </div>
        <div className='mt-9 flex flex-col items-center'>
            <img src={reviweI} alt="" />
            <p>Total Reviews</p>
            <h1 className='font-bold text-3xl'>{reviews}</h1>
           
        </div>
        
    </div>
    <div className="card-actions justify-end">
      <button onClick={()=>{
        handleButton(finded)
        setInstalled(true)
        handleAddToLs()
      
      }
        } className="btn bg-[#00D390] text-white btn-wide mt-5">{installed? 'Disabled' : 'Install'} {size} MB</button>
    </div>
   </div>
  </div>

  
  

{/* <Rechart></Rechart> */}

  

  <div><p>{description}</p></div>
</div>

     
    );
};

export default AppDetails;