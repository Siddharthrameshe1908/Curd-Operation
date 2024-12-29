//here we will define all the routes
//why we are using separate Route component means in real time project it will be easy to add and remove the component
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Createuser from '../curd-files/Createuser'
import Edituser from '../curd-files/Edituser'
import Users from '../curd-files/Users'
import NotFound from '../curd-files/NotFound'
import Allusers from '../curd-files/Allusers'
import Register from '../authentication/Register'
import Login from '../authentication/Login'
import PrivateRoute from '../authentication/PrivateRoute'
import RegisteredUsers from '../curd-files/RegisteredUsers'


export let routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
        path: "/createuser",
        element: <PrivateRoute><Createuser/></PrivateRoute>
      },
      {
        path: "/edituser/:id",
        element: <Edituser/>
      },
      {
        path: "/user",
        element : <PrivateRoute><Users/></PrivateRoute>
      },
      {
        path: "/allusers",
        element: <PrivateRoute><Allusers/></PrivateRoute>
      },
      {
        path : "/register",
        element : <Register/>
      },
      {
        path : "/login",
        element : <Login/>
      },
      {
        path : "/registeredusers",
        element : <RegisteredUsers/>
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  }
])