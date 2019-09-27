import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styles from './chatbox.module.css'

const chatBox = (props) => {
  return(
    <div className={styles.avatarContainer}>
      <Avatar 
        alt="User Profile"
        src={"https://culto.latercera.com/wp-content/uploads/2018/10/michael-bad_phixr-900x600.jpg"}
        className={styles.avatar}
      />
      <div className={styles.chatContainer}>
        <span>
          hello {props.user.displayName}
        </span>
      </div>

    </div>
    
  )
}

export default chatBox