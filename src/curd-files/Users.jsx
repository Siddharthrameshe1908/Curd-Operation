// import axios from 'axios'
import axios from '../Axios'
import  { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Users = () => {

  let [userInfor, setUserInfor] = useState([])

  function getData() {
    axios.get('/candidate')
    .then((response) =>{
      // console.log(response.data);
      setUserInfor(response.data)
    })
  }
  
  useEffect(()=>{
    getData()
  },[])


  let handleDelete = (id) => {
    axios.delete(`/candidate/${id}`)
    .then(()=>{
      getData() 
    })
  }
  return (
    <>
       <section className='userBlock'>
        <article className="container">
          <h1>Users</h1>
          <table>
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Age</th>
                <th>City</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {
                userInfor.map((item) =>{
                  return (
                    <tr key={item.id}>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td>{item.age}</td>
                      <td>{item.city}</td>
                      <td className='pl-7'><Link to={`/edituser/${item.id}`}><FaEdit /></Link></td>
                      <td className='pl-10' onClick={()=>{handleDelete(item.id)}}><AiFillDelete/></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </article>
       </section>
    </>
  )
}

export default Users