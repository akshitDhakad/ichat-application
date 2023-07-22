import React,{useState} from 'react'
import "./style.scss"
import Signup from './Signup'
import {Link} from "react-router-dom"



export function HandleLogin(){
  const [Loggin ,setLoggin] = useState(true)
  return(
    
    <div>
    
      {Loggin?<Login data = {setLoggin}/>:<Signup data = {setLoggin}/>}
    </div>
  )
}


function Login(props) {



  return (
    <div className='loggin'>
      <div className="content">
          <div className="text">Loggin</div>
          <form  >
            <div className="field">
              <span className="bx bxs-user"></span>
              <input type="username" placeholder="Username" required/>
            </div>

            <div className="field">
              <span className="bx bxs-envelope"></span>
              <input type="email" placeholder="Email" required/>
            </div>

            <div className="field">
              <span className="bx bxs-lock-alt"></span>
              <input type="password" placeholder="Password" required/>
            </div>
            <div className="field">
              <button>Log In</button>
            </div>

          </form>
          

            
          <h6>or Sign up with social platforms</h6>

          <div className="social_icons">
            <i className="bx bxl-facebook"></i>
            <i className="bx bxl-github"></i>
            <i className="bx bxl-google"></i>
            
          </div>

<div className="foot">
  <Link to={"#"}>Already have an account?</Link>
  <button onClick={()=>props.data(false)} className="in">Sign In</button>
</div>

          <div className="dark-light">
            <i className="bx bx-moon moon"></i>
            <i className="bx bx-sun sun"></i>
          </div>
        </div>
    </div>
  )
}

