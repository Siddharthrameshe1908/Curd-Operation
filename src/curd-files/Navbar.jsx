import { Link, useNavigate } from "react-router-dom"
const Navbar = () => {

  let navigate = useNavigate()

  let token = localStorage.getItem("TOKEN") 
  // console.log(token);

  let handleLogout = () => {
    localStorage.removeItem("TOKEN") 
    navigate("/login")
  }
  

  return (
    <>
        <nav>
            <div>
                <span className="curd">Curd</span>
                <span className="operation">Operation</span>
            </div>
            {
              token ? <div className="form-group">
                <button className="logoutbtn" onClick={handleLogout}>Logout</button>
              </div> : <div className="regilogin">
                  <Link to='/register'>Register</Link>
                  <Link to='/login'>Login</Link>
                </div>
            }

        </nav>
    </>
  )
}
 
export default Navbar