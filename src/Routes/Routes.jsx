import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import Apps from "../Pages/Apps";
import Inastallation from "../Pages/Inastallation";
import AppDetails from "../Pages/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
     {index:true,
      Component:Home
    },
    {
      path:'apps',
      Component:Apps

    },
    {
      path:'installation',
      Component:Inastallation
    },
    {
      path:'details',
      Component:AppDetails
    }

    ]
  },
  
]);
