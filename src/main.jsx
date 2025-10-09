import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import { router } from './Routes/Routes.jsx';
import AppsProvider from './utility/AppsProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppsProvider>
    <RouterProvider router={router}></RouterProvider>
    </AppsProvider>
    
  </StrictMode>,
)
