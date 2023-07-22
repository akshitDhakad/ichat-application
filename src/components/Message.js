import React from 'react'
import UserMsg from "./UserMsg"

import OwnerMsg from "./OwnerMsg"

function Message() {
  return (
    <div className='chatbox'>
       <UserMsg/>
       <OwnerMsg/>
    </div> 
  )
}

export default Message