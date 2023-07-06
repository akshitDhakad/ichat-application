import React from 'react'
import "./style.scss"
import  Search from "./search"
import Message from './Message'
import Users from './Users'
function Home() {
  return (
    <div className='home'>
        <div className='box'>
            <div className='sidebar'>
                <div className='header'>
                    <div>iChat</div>
                    <div className='profile'>
                        <img src='https://i.pinimg.com/originals/23/b0/1a/23b01a86088fe4c89e049406c09c6e23.jpg' alt='profile'/>
                        <span>Ashna</span>
                        <button>logout</button>
                    
                    </div>
                </div>
                
                    <Search/>
                    <Users/>
            

            </div>
            <div className='main'>
                <div className='header'>
                    <div>samm</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-video-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>

                        <span>...</span>

                    </div>
                </div>
                <Message/>
               
            </div>
        </div>
    </div>
  )
}

export default Home