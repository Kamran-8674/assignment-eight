import React from 'react';

const Footer = () => {
    return (
      
        <div className=' bg-black flex justify-around p-12'>
            <div className='text-white space-y-4'>
                <h1 className='font-semibold text-xl'>Explore</h1>
                <div className='flex flex-col  space-y-2.5'><a href="Apps">Apps</a>
                <a href="">Games</a>
                <a href="">Developers</a></div>
            </div>
            <div className='text-white space-y-4'>
                <h1 className='font-semibold text-xl'>Support</h1>
                <div className='flex flex-col space-y-2.5'><a href="Apps">Help Center</a>
                <a href="">Contact</a>
                <a href="">FAQ</a></div>
            </div>
            <div className='text-white space-y-4'>
                <h1 className='font-semibold text-xl'>Legal</h1>
                <div className='flex flex-col space-y-2.5'><a href="Apps">Terms</a>
                <a href="">Privacy Policy</a>
                <a href="">Cookie Policy</a></div>
            </div>

        </div>


      
    );
};

export default Footer;