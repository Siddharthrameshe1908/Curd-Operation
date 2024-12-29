import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RegisteredUsers = () => {

    let [state,setState] = useState([])

    let registeredusers = async () =>{
        let {data} = await axios.get("http://localhost:5000/registeredUsers")
        setState(data)
    }

    useEffect(()=>{
        registeredusers()
    },[])

    // console.log(state);
    
  return (
    <>
        <div className="registeredusers">
            {
                state.map((item) => {
                    return (
                        <div className='userslist' key={(item.id)}>
                            <div>
                            <h1>Email : {item.email}</h1>
                            <h1>Password : {item.password}</h1>
                            </div>
                            <div>
                            <img src={item.profipic} alt="profile picture" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default RegisteredUsers