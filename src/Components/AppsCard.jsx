import React from 'react';
import ratingI from '../assets/icon-ratings.png'
import { Link } from 'react-router';

const AppsCard = ({app}) => {
    // console.log(app)
    const{image,title,downloads,ratingAvg,id}=app
    return (
      <Link to={`details/${id}`}>
        <div className="card bg-white p-2  shadow-sm w-80  mx-auto">
  <figure>
    <img className=''
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    
    
  </div>
  <div className="flex justify-between px-2">
       <div>
          <p> {downloads}</p>
       </div> 
       <div className='flex items-center space-x-1 bg-[#FFF0E1] px-2.5 rounded-xl'>
         <img className='w-3 h-5' src={ratingI} alt="" />
        <p> {ratingAvg}</p>
       </div> 
      
    </div>
  </div>
  </Link>
    );
};

export default AppsCard;