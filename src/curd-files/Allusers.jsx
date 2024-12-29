import React, { useEffect, useState } from 'react'
import Search from './Search'
import axios from '../Axios'
import DisplayUsers from './DisplayUsers'

const Allusers = () => {

    let [state, setState] = useState([])

    let [searchTerm, setSearchTerm] = useState("")

    let handleSearch = (term) =>{
        setSearchTerm(term)
    }
    console.log(searchTerm);
    
    let fetchdata = async () => {
        // let response = await axios.get("/candidate")
        // console.log(response);
        // let {data} = response 

        let {data} = await axios.get("/candidate")
        // console.log(data);
        setState(data)
    }

    useEffect(() => {
        fetchdata()
    },[])

    let filteredUsers = state.filter((value)=>{
        if (state == ""){
            return value
        }
        else if(value.firstname.toLowerCase().includes(searchTerm.toLowerCase())){
            return value
        }
    }).map( users => <DisplayUsers key={users.id} {...users}/>)    //this spread operator will give data one by one to the DisplayUser component -> it is similar to data = {users} and then destructing using props.data

  return (
    <>
        <div className="displayAlluser">
        <Search handleSearch = {handleSearch}/>
        {
            state == null ? "Loading" : filteredUsers
        }
        </div>
    </>
  )
}

export default Allusers