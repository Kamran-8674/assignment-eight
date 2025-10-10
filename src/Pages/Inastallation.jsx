import { useContext, useEffect, useState } from 'react';
import { AppsContext } from '../utility/AppContext';
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
   
    
    const {app} =useContext(AppsContext)
    console.log(app)
   
   
    
    return (
        <div className='bg-[#FFF0E1] h-svh p-10'>
           <div className='text-center'> <h1 className='font-bold text-2xl'>Your Installed Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between mt-10'>
                <h1 className='font-bold text-xl'></h1>
             <select value={sortOrder} onChange={e => setSortOrder( e.target.value)} className="select select-neutral">
               <option value='none'>Select BY Size</option>
               <option value='ascn-desn'>Large to Small</option>
                <option value='desn-ascn'>Small to Large</option>
 
              </select>
            </div>


           {/* {app.map(a=> <InstllationCard a={a}></InstllationCard>)} */}
           {sortedItems().map(a=> <InstllationCard a={a}></InstllationCard>)}
           
        </div>
    );
};

export default Inastallation;