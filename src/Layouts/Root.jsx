import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
// import { AppsContext } from '../utility/AppContext';

const Root = () => {

    
  // const{app}=AppsContext()
    // console.log(app)
      
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>

            
        </div>
    );
};

export default Root;