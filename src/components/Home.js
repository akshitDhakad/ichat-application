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
                        <button className='logout'>logout</button>
                    
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
                <div className='msgtypo'>
                    <form>
                        <input placeholder='Type something here ....'/>
                        
                        
                     

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                            </svg>
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Home