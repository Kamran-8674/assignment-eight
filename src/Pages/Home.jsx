import { Link } from 'react-router';
import AppsCard from '../Components/AppsCard';
import Banner from '../Components/Banner';
import States from '../Components/States';
import useApps from '../hooks/useApps';
import { Key } from 'lucide';


const Home = () => {
   
    const data= useApps()
    const {apps,loading}=data
    const trndingApps = apps.slice(0,8)
    
    return (
        
        <div>
            {loading?<p className='flex justify-center items-center'><span className="loading loading-spinner loading-xl"></span>
</p>:''}
            <Banner></Banner>
       
            <States></States>
            
        <div className='p-6 bg-[#FFF0E1] '>
            <div className='text-center my-3'>
                <h1 className='font-bold text-3xl'>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {trndingApps.map(app=>  <AppsCard app={app} key={app.id}></AppsCard>)}
            </div>
            <Link to={'apps'}> <button className=" flex justify-center items-center mx-auto my-5 btn btn-active btn-secondary">Show All</button></Link>

  


            

        </div>
             
            
     </div>
    );
};

export default Home;