import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    let [registerData, setRegisterData] = useState({
        email : "",
        password : "",
        profipic : ""
    })

    let {email,password,profipic} = registerData 

    let navigate = useNavigate()

    let handleChange = (event) => {
        let {name,value} = event.target 
        setRegisterData({...registerData,[name] : value})
    }

    let handleSubmit = async (event) => {
        event.preventDefault() 
        let payload = {email,password, profipic}
        
        await axios.post("http://localhost:5000/registeredUsers",payload)
        navigate("/login")
        toast.success("Registered Successfully")
    }

  return (
    <>
        <main className='content'>
            <h1>Register</h1>
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
                    <label htmlFor="">Profile pic</label>
                    <input type="text" placeholder='Enter picture url' name='profipic' value={profipic} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <button>Register</button>
                </div>
            </form>
        </main>
    </>
  )
}

export default Register