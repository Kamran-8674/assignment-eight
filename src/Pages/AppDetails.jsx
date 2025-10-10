import React, {  useState } from 'react';
import donwloadI from '../assets/icon-downloads.png'
import ratingI from '../assets/icon-ratings.png'
import reviweI from '../assets/icon-review.png'
import { useParams } from 'react-router';
import useApps from '../hooks/useApps';


import { Bar, BarChart, CartesianGrid,  Legend,  XAxis, YAxis } from 'recharts';
import { toast } from 'react-toastify';
// import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';




const AppDetails = () => {
  

  
  const [installed, setInstalled]= useState(false)
  
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
         if(isDuplicate) return toast('app already installed')
          updatedList= [...existedList,finded]

      }
      else{
        updatedList.push(finded)

      }
     



      localStorage.setItem('installated',JSON.stringify(updatedList))
    }
    
    return (
        <div className='p-8 '>
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
      <button  onClick={()=>{
        toast('Compeleted')
        setInstalled(true)
        handleAddToLs()
      
      }
        } is   className={`btn bg-[#00D390] text-white btn-wide mt-5`}>{installed? 'Disabled' : 'Install'} {size} MB</button>
    </div>
   </div>
  </div>


  {/* <LineChart width={600} height={300} data={apps}>
    <CartesianGrid />
    <Line dataKey="reviews" />
    <XAxis dataKey="downloads" />
    <YAxis dataKey='reviews' />
    <Legend />
  </LineChart> */}
   
       
      <BarChart width={666} height={300} data={apps}>
        <CartesianGrid />
        <Legend></Legend>

        <XAxis dataKey='downloads'></XAxis>
        <YAxis dataKey='reviews'></YAxis>
        <Bar dataKey="reviews" fill="#8884d8" />
      </BarChart>
      
    


  

  <div><p>{description}</p></div>
</div>

     
    );
};

export default AppDetails;