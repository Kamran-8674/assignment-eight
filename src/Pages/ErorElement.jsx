import React from 'react';
import errorImage from '../assets/error-404.png'
import { Link } from 'react-router';

const ErorElement = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
            <img src={errorImage} alt="" />
            <h1 className='font-bold text-2xl'>Oops, page not found!</h1>
            <p>The page you are looking for is not available.</p>
             <Link to={'/'}> <button class="btn btn-primary mt-3">Go Back!</button></Link>


            </div>

            
        </div>
    );
};

export default ErorElement;