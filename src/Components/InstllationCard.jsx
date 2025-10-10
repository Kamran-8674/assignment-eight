import React from 'react';

const InstllationCard = ({a,handleRemove}) => {
    console.log(a)
    return (
       <div className='flex justify-between items-center bg-white p-3 rounded-md mt-2'>
                <div className='flex'>
                    <img className=' ' width={'40px'} src={a.image} alt="" />

                    <div className='ml-4'>
                        <h1 className='font-semibold text-lg'>{a.title}</h1>
                        <div className='flex space-x-4'>
                            <span className='text-[#00D390]'>{a.downloads}</span>
                            <span className='text-[#FF8811]'>{a.ratingAvg}</span> 
                            <span>{a.size}MB</span></div>
                    </div>

                </div>
                <button  onClick={
                    ()=>handleRemove(a.id)
                    
                    } className="btn bg-[#00D390]  btn-active btn-secondary" >Uninstall</button>

            </div>
    );
};

export default InstllationCard;