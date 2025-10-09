import React, {   useContext, useState } from 'react';
import donwloadI from '../assets/icon-downloads.png'
import ratingI from '../assets/icon-ratings.png'
import reviweI from '../assets/icon-review.png'
import { useParams } from 'react-router';
import useApps from '../hooks/useApps';
import { Bar, ComposedChart, XAxis, YAxis } from 'recharts';
import { AppsContext } from '../utility/AppContext';

const AppDetails = () => {
  const [installed, setInstalled]= useState(false)
  
  const {handleButton,app}=useContext(AppsContext)
  console.log(app)
  
  

    const {id} = useParams()
    const {apps,loading}=useApps()
    const finded = apps.find(a => a.id=== Number(id))
    if(loading) return <p>loading</p>

    const {image,downloads,companyName, reviews,title,size,description,ratingAvg}=finded 
    
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
        setInstalled(true)}} className="btn bg-[#00D390] text-white btn-wide mt-5">{installed? 'Disabled' : 'Install'} {size} MB</button>
    </div>
   </div>
  </div>


  <ComposedChart width={500} height={450} data={apps}>
    <XAxis dataKey='name' ></XAxis>
    <YAxis dataKey='name'></YAxis>
    <Bar dataKey='uv' ></Bar>
    <Bar dataKey={apps} fill='white' stroke="#ff7300"></Bar>


  </ComposedChart>


  <div><p>{description}</p></div>
</div>

     
    );
};

export default AppDetails;