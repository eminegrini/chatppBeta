import React, { useState, useEffect } from 'react'
import styles from './login.module.css'
import GoogleLogin from 'react-google-login';
import firebase, { provider} from '../../server/firebase.js'

const Login = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(()=> {
    firebase.auth().onAuthStateChanged((user) => {
      props.addUser(user)
      if (user) {
        props.history.push('/chat')
      }
    })
  })
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePassChange = (e) => {
    setPassword(e.target.value)
  }

  const goTo = (rute) => {
    props.history.push('/'+ rute)
  }

  const loginWithGoogle = () => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
    return (
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
        //  var token = result.credential.accessToken;
          var user = result.user;

          var isNewUser = result.additionalUserInfo.isNewUser;
          if (isNewUser) {
              result.user.delete();
          } else {
              alert('user ' + user.email + ' Logued!');
          }
    })
    .catch(function (error) {
      alert(error)
    })
    )
    })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  } 

  const responseGoogle = (response) => {
    alert(response);
  }

  const logIn = (email, password) => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      props.history.push('/chat')
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      alert(errorCode)
      alert(errorMessage)
    });
  }
  
  return (
    <div className={styles.rootContainer}>
      <div className={styles.loginContainer}>
        <div className={styles.title}>
          Login
        </div>
        <div className={styles.googleCont}>
          <div className={styles.inputCont}>
            <input 
              type='text'
              onChange={handleEmailChange}
              placeholder='Email'
            />
            <input
              type='password'
              onChange={handlePassChange}
              placeholder='Password'
            />
          </div>
          <button
            onClick={() => logIn(email, password)}
          >
            Login
          </button>
          <GoogleLogin
            clientId="113598435941-700p3p1ct2j11tmodeu7ihjuj3crinde.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={loginWithGoogle}
            onFailure={responseGoogle}
          />
        </div>
        <button
          onClick={() => goTo('register')}
        >
          Registrarse
        </button>
      </div>
    </div>
  )
}

export default Login