import toast from 'react-hot-toast'
import axios from '../Axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Createuser = () => {

  let navigate = useNavigate()

  let [state,setState] = useState({
    firstname : "",
    lastname  : "",
    age : "",
    city : ""
  })

  let {firstname,lastname,age,city} = state

  let handleChange = (event) =>{
    let {name,value} = event.target 
    setState({...state,[name] :value})
  }

  let handleSubmit = (event) => {
    event.preventDefault()
    let payload = {firstname,lastname,age,city} 
    axios.post("/candidate",payload)
    toast.success("Data is Submitted")
    navigate("/user")    
  }


  return (
    <main className="content">
      <section className="innercontent">
        <h1>Create User</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Firstname</label>
            <input type="text" placeholder='Enter your firstname' name='firstname' value={firstname} onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="">Lastname</label>
            <input type="text" placeholder='Enter your lastname' name='lastname' value={lastname} onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="">Age</label>
            <input type="text" placeholder='Enter your Age' name='age' value={age} onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="">City</label>
            <input type="text" placeholder='Enter your city' name='city' value={city} onChange={handleChange}/>
          </div>

          <div className="form-group">
            <button>Submit</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Createuser