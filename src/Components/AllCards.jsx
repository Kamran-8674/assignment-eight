import React from 'react';

const AllCards = ({app}) => {
    const {image,title,downloads,ratingAvg}=app
    return (
     
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
                 {/* <img className='w-3 h-5' src='' alt="" /> */}
                <p> {ratingAvg}</p>
               </div> 
              
            </div>
             </div>
    );
};

export default AllCards;