import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const Login = () => {

    let [loginData,setLoginData] = useState({
        email : "",
        password : "",
        token : uuidv4()
    })

    let {email,password,token} = loginData 

    let navigate = useNavigate()

    let handleChange = (event) =>{
        event.preventDefault() 
        let {name,value} = event.target 
        setLoginData({...loginData,[name]:value})
    }

    let handleSubmit = async (event) => {
        event.preventDefault() 
        let {data} = await axios.get("http://localhost:5000/registeredUsers")
        // console.log(data);
        
        let filteredData = data.filter((item) => {
            return (
                item.email === loginData.email && item.password === loginData.password
            )
        })
        // console.log(filteredData);
        
        if(filteredData.length > 0){
            navigate("/user")
            localStorage.setItem("TOKEN",token)
            toast.success("Successfully logged in")
        }
        else {
            navigate("/register")
            toast.error("Something went wrong")
        }
    }

  return (
    <>
        <main className='content'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter your mail' name='email' value={email} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Enter your password' name='password' value={password} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <button>Login</button>
                </div>
            </form>
        </main>
    </>
  )
}

export default Login