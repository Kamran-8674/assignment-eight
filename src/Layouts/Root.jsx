import { ToastContainer } from 'react-toastify';
import Footer from '../Components/Footer';
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
            <Footer></Footer>

             <ToastContainer />
        </div>
    );
};

export default Root;