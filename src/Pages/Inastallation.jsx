import { useContext } from 'react';
import { AppsContext } from '../utility/AppContext';
import InstllationCard from '../Components/InstllationCard';

const Inastallation = () => {
    
    const {app} =useContext(AppsContext)
    console.log(app)
   
   
    
    return (
        <div className='bg-[#FFF0E1] h-svh p-10'>
           <div className='text-center'> <h1 className='font-bold text-2xl'>Your Installed Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between mt-10'>
                <h1 className='font-bold text-xl'></h1>
                <select className='w-15' name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>


           {app.map(a=> <InstllationCard a={a}></InstllationCard>)}
           
        </div>
    );
};

export default Inastallation;