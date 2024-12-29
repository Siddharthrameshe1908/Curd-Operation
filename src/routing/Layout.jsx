import {  NavLink, Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from '../curd-files/Navbar'

//here we will define all the links
const Layout = () => {
  return (
    <>
    <Navbar/>
    <Toaster/>
      <main className='sidebar'>
        <section className='layout'>
          <ul>
            <li>
              <NavLink 
              style = {({isActive}) =>{
                return { 
                  color: isActive ? "red" : "green",
                  // backgroundColor : isActive ?"white" : "lightgray"
                }
              }}
               to='/createuser' >
                Createuser
              </NavLink>
            </li>
            <li>
              <NavLink 
                 style={({isActive})=>{
                  return {
                    color: isActive ? "red" : "green"
                    // backgroundColor : isActive ?"white" : "lightgray"
                  }
                 }}
               to='/user' >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink 
                style={({isActive}) => {
                  return {
                    color: isActive ? "red" : "green"
                    // backgroundColor : isActive ? "white" : "lightgray"
                  }
                }} 
                to='/allusers'>
                Allusers
              </NavLink>
            </li>
            <li>
              <NavLink 
                style={({isActive}) => {
                  return {
                    color: isActive ? "red" : "green"
                    // backgroundColor : isActive ? "white" : "lightgray"
                  }
                }} 
                to='/registeredusers'>
                Registered Users
              </NavLink>
            </li>
          </ul>
        </section>

        <Outlet />
      </main>

    </>
  )
}

export default Layout