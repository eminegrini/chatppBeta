import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './header.css'

const Header = (props) => {
console.log(props)
  return (
    <div className="appContainer">
      <Avatar 
        alt="User Profile"
        src={"https://culto.latercera.com/wp-content/uploads/2018/10/michael-bad_phixr-900x600.jpg"}
        className='avatar'
      />
      <h1>
        Hello! {props.userName}
      </h1>
    </div>
  );
}

export default Header