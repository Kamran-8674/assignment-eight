import AppsCard from '../Components/AppsCard';
import Banner from '../Components/Banner';
import States from '../Components/States';
import useApps from '../hooks/useApps';


const Home = () => {
   
    const data= useApps()
    const {apps,loading}=data
    const trndingApps = apps.slice(0,8)
    
    return (
        
        <div>
            {loading?<p>loooooosfdfhsfhsafhsafhf</p>:''}
            <Banner></Banner>
       
            <States></States>
            
        <div className='p-6 bg-[#FFF0E1] '>
            <div className='text-center my-3'>
                <h1 className='font-bold text-3xl'>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {trndingApps.map(app=> <AppsCard app={app}></AppsCard>)}
            </div>
             <button className=" flex justify-center items-center mx-auto my-5 btn btn-active btn-secondary">Show All</button>

  


            

        </div>
             
            
     </div>
    );
};

export default Home;