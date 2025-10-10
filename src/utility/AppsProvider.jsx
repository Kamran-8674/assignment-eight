// import React, { useState } from 'react';
import { useState } from 'react';
import { AppsContext } from './AppContext';


const AppsProvider = ({children}) => {
    const [app,setApp]= useState([])

    const handleButton= (newa) =>{
       const isexist= app.find(n=> n.id === newa.id)
       if(isexist) return alert('this app is already installed')

       
     return  setApp ([...app,newa])
     
    

  }
    
    return (
        
    <AppsContext.Provider value={{app,setApp,handleButton}}>
        {children}
    </AppsContext.Provider>
            
        
    );
};

export default AppsProvider;
