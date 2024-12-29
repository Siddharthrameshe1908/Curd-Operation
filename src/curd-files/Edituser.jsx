import axios from "../Axios"
import { useEffect,useState } from "react"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"

const Edituser = () => {

  let [state, setState] = useState({
    firstname : "",
    lastname : "",
    age : "",
    city : ""
  })

  let {firstname,lastname,age,city} = state 

  let handleChange = (event) =>{
    let {name,value} = event.target 
    setState({...state,[name] : value})
  }

  let {id} = useParams()

  useEffect(() =>{
    axios.get(`/candidate/${id}`).then((response)=>{
      console.log(response.data);
      setState(response.data);      
    })
  },[])

  let navigator = useNavigate()

  let handleSubmit = (event) =>{
    event.preventDefault()
    let payload = {firstname,lastname,age,city}
    axios.put(`/candidate/${id}`,payload)
    navigator("/user")
    toast.success("Data has been updated")
  }

  return (
    <main className="content">
      <section className="innercontent">
        <h1>Edit User</h1>
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

export default Edituser