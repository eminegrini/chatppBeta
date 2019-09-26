import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './chatbox.css'

const chatBox = (props) => {
  
  return(
    <div className='avatarContainer'>
      <Avatar 
        alt="User Profile"
        src={"https://culto.latercera.com/wp-content/uploads/2018/10/michael-bad_phixr-900x600.jpg"}
        className='avatar'
      />
      <div className='chatContainer'>
        <span>
          {props.message ? props.message : 'hello'}
        </span>
      </div>

    </div>
    
  )
}

export default chatBox