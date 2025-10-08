import React from 'react';
import donwloadI from '../assets/icon-downloads.png'
import ratingI from '../assets/icon-ratings.png'
import reviweI from '../assets/icon-review.png'

const AppDetails = () => {
    return (
        <div className='p-8 bg-amber-200'>
        <div className="card h-90 md:card-side  bg-base-100 shadow-sm">
  <figure>
    <img className='p-7'
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
  <div className="">
    <h2 className="card-title mt-8">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className='flex justify-between border-t-2'>
        <div className='mt-9'>
            <img src={donwloadI} alt="" />
            <p>download</p>
            <h1 className='font-bold text-3xl'>8M</h1>
           
        </div>
        <div className='mt-9'>
            <img src={ratingI} alt="" />
            <p>download</p>
            <h1 className='font-bold text-3xl'>8M</h1>
           
        </div>
        <div className='mt-9'>
            <img src={reviweI} alt="" />
            <p>download</p>
            <h1 className='font-bold text-3xl'>8M</h1>
           
        </div>
        
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-wide mt-5">Wide</button>
    </div>
   </div>
  </div>
</div>
    );
};

export default AppDetails;