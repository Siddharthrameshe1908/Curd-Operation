import React from 'react'
import Login from './Login'

const PrivateRoute = (props) => {
    // console.log(props);
    
    let token = localStorage.getItem("TOKEN")
    
    if(token){
        return props.children 
    }
    else{
        <Login/>
    }
}


export default PrivateRoute