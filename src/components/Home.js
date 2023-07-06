import React from 'react'
import "./style.scss"
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
                <input placeholder='seacrh here'/>
                <div className='users'>
                    <img src='https://i0.wp.com/www.anmolsms.com/wp-content/uploads/2020/12/43e4eebee019e145c343e2f3130a4824.jpg?ssl=1' alt="userprofile"/>
                    <div>
                        <span>samm</span>
                        <span>see u tm</span>
                    </div>
                    
                    

                </div>
                <div className='users'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yGAGLaTecIcm9EOtflmERrIvHHyMoHGJbw&usqp=CAU" alt="img"/>
                    <div>
                        <span>jhon</span>
                        <span>ok tank you</span>
                    </div>
                    

                </div>
                <div className='users'>
                    <img src='https://i.pinimg.com/736x/d5/a7/a6/d5a7a641eff0e09f95e0949e56621eb4.jpg' alt="userprofile"/>
                    <div>
                        <span>jyo</span>
                        <span>ok tank you</span>
                    </div>
                    

                </div>
                <div className='users'>
                    <img src='https://static8.depositphotos.com/1008303/880/i/450/depositphotos_8803246-Asian-college-student.jpg' alt="userprofile"/>
                    <div>
                        <span>hansni</span>
                        <span>ok tank you</span>
                    </div>
                    

                </div>
                <div className='users'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQVIGltth9eCnnDnUwKhnR6P_9S9235ceDQ&usqp=CAU" alt="img"/>
                    <div>
                        <span>janvi</span>
                        <span>ok tank you</span>
                    </div>
                    

                </div>
                <div className='users'>
                    <img src='https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="userprofile"/>
                    <div>
                        <span>suraj</span>
                        <span>ok tank you</span>
                    </div>
                    
                </div>
               
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
                <div className='chatbox'>
                    <div className='users'>
                        <img src='https://i.pinimg.com/originals/23/b0/1a/23b01a86088fe4c89e049406c09c6e23.jpg' alt='users'/>
                        <div> samm msg display here</div>
                    </div>
                    <div className='profile'>
                        <img src="https://i0.wp.com/www.anmolsms.com/wp-content/uploads/2020/12/43e4eebee019e145c343e2f3130a4824.jpg?ssl=1" alt='profile'/>
                        <div> Ashna msg display here</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home