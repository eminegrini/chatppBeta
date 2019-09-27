import React, {useState} from 'react';
import ChatBox from '../chatbox'
import Button from '@material-ui/core/Button';
import styles from './box.module.css'
import firebase,{ db } from '../../server/firebase'

const Box = (props) => {
  const [message, setMessage] = useState('')

  const saveMessage = (event) => {
    setMessage(event.target.value)
  }

  const sendMessage = () => {
    db.ref('message/').set({
      message: message,
    })
  }

  const logOut = () => {
    firebase.auth().signOut().then(() => {
    })
    .then(props.history.push('/'))
    .catch((error) => {
      alert(error)
    });
  }

  return(
    <div className={styles.boxContainer}>
      <button onClick={logOut}>
        logout
      </button>
      <ChatBox />
      <div className={styles.buttonContainer}>
        <input 
          type='Text'
          onChange={saveMessage}
        />
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          onClick={sendMessage}
        >
          Send
        </Button>
      </div>
    </div>
  )
}

export default Box