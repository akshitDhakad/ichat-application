import React from 'react'
import "./style.css"



function Signup(props) {
  return (
    <div>
        <div class="content">
            <div class="text">Sign Up</div>
            <div >
            <div class="field">
                <span class="bx bxs-user"></span>
                <input type="username" placeholder="Username" required/>
            </div>

            <div class="field">
                <span class="bx bxs-envelope"></span>
                <input type="email" placeholder="Email" required/>
            </div>

            <div class="field">
                <span class="bx bxs-lock-alt"></span>
                <input type="password" placeholder="Password" required/>
            </div>

            <button>Sign Up</button>
            <h4>or Sign up with social platforms</h4>

            <div class="social_icons">
                <i class="bx bxl-facebook"></i>
                <i class="bx bxl-discord-alt"></i>
                <i class="bx bxl-twitter"></i>
                <i class="bx bxl-dribbble"></i>
            </div>

            <div class="foot">
                <a href='...'>Already have an account?</a>
                <button onClick={()=>props.data(true)} class="in">Log In</button>
            </div>
            </div>

            <div class="dark-light" onclick="myFunction()">
            <i class="bx bx-moon moon"></i>
            <i class="bx bx-sun sun"></i>
            </div>
        </div>
    </div>
  )
}

export default Signup