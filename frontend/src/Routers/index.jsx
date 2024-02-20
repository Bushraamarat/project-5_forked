import{createBrowserRouter} from "react-router-dom"
import ServiceProvider from "../pages/ServiceProvider"
import Login from "../pages/login"
import Register from "../pages/register"
import Home from "../pages/Home"


import Packages from "../pages/Package"


import CreateService from "../pages/CreateService"
import Client from "../pages/client"
import AdminDashboard from "../pages/AdminDashbored"
import PendingServices from "../pages/PendingServices"
export const router= createBrowserRouter(
[
   {
      path:"",
      element:<Home/>,
     
   },

   {
      path:"/login",
      element:<Login/>,
       
  },
    {
        path:"service/provider",
        element: <ServiceProvider/>
    },

    { 
        path:"/register",

        element:<Register/>
     },{
        path:"/packages",
        element:<Packages/>
    },

 {
        path: "/service/provider/create",
        element: <CreateService/>


     },
     {
        path:"client",
        element:<Client/>


     },
    
     {
      path:"/admin/dashboard",
      element:<AdminDashboard/>,
      children:[
         {
            path:"pending/Services",
            element:<PendingServices/>
         }, 
      ]
   },

    

]

)