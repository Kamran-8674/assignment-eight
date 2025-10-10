import React from 'react';
import nodataImg from '../assets/App-Error.png'

const NoData = () => {
    return (
        // <div className='flex flex-col justify-center items-center mx-auto text-center'>
            <div className='flex flex-col justify-center  items-center '><img  src={nodataImg} alt="" /> 
          <div className='text-center'>  <h1 className='font-bold text-3xl'>OPPS!! APP NOT FOUND</h1>
            <p>The App you are requesting is not found on our system.  please try another apps</p> </div>
            <button class="btn btn-primary">Go Back</button>
            </div>

            
        // </div>
    );
};

export default NoData;