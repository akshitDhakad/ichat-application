import React,{useState} from 'react'
import "./style.css"
import Signup from './Signup'




function HandleLogin(){
  const [Loggin ,setLoggin] = useState(true)
  return(
    
    <div>
    
      {Loggin?<Login data = {setLoggin}/>:<Signup data = {setLoggin}/>}
    </div>
  )
}


function Login(props) {

  function darkMode(){
    alert("Hello World")
  }



  return (
    <div>


<div class="content">
    <div class="text">Loggin</div>
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

      <button>Log In</button>
      <h4>or Sign up with social platforms</h4>

      <div class="social_icons">
        <i class="bx bxl-facebook"></i>
        <i class="bx bxl-discord-alt"></i>
        <i class="bx bxl-twitter"></i>
        <i class="bx bxl-dribbble"></i>
      </div>

      <div class="foot">
        <a href='...'>Already have an account?</a>
        <button onClick={()=>props.data(false)} class="in">Sign In</button>
      </div>
    </div>

    <div class="dark-light" onclick={()=>darkMode()}>
      <i class="bx bx-moon moon"></i>
      <i class="bx bx-sun sun"></i>
    </div>
  </div>
    </div>
  )
}

export default HandleLogin