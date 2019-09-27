import React, { useState } from 'react'
import styles from './register.module.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import firebase from '../../server/firebase.js'
import Modal from '@material-ui/core/Modal'


const Register = (props) => {

  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')
  const [open, setOpen] = useState(false)
  const [error, setError] = useState('')
  const [errorCode, setErrorCode] = useState('')



  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePassChange = (e) => {
    setPassword(e.target.value)
  }

  const onClick = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error)=> {
      if(email && password && error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        setErrorCode(errorCode)
        setError(errorMessage)
        setOpen(true)
      }
    });
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
  <div className={styles.regCont}>
    <div className={styles.textCont}>
      <h1>
        Register
      </h1>
      <TextField
        id="email"
        label="Email"
        onChange={handleEmailChange}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        onChange={handlePassChange}
      />
      <Button 
        color="primary"
        onClick={() => onClick(email, password)}
      >
        Register
      </Button>
      <Button 
        color="primary"
        onClick={() => props.history.push('/')}
      >
        Go to login
      </Button>
    </div>
    <Modal 
      open={open}
      onClose={handleClose}
    >
      <div className={styles.root}>
        <h2>{errorCode}</h2>
        <span>{error}</span>
      </div>
    </Modal>
  </div>
  )
}

export default Register