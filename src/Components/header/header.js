import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styles from './header.css'

const Header = (props) => {
  return (
    <div className={styles.appContainer}>
      <Avatar 
        alt="User Profile"
        src={"https://culto.latercera.com/wp-content/uploads/2018/10/michael-bad_phixr-900x600.jpg"}
        className={styles.avatar}
      />
      <h1>
        Hello! {props.userName}
      </h1>
    </div>
  );
}

export default Header