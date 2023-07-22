import React from 'react'
import "./style.scss"
import { Link } from 'react-router-dom'



function Signup(props) {
  return (
    <div className='signup'>
        <div className="content">
            <div className="text">Sign Up</div>
            <form >
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
                <button>Sign Up</button>
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
                    <button onClick={()=>props.data(true)} className="in">Log In</button>
                </div>

            <div className="dark-light" onclick="myFunction()">
            <i className="bx bx-moon moon"></i>
            <i className="bx bx-sun sun"></i>
            </div>
        </div>
    </div>
  )
}

export default Signup