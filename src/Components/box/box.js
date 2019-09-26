import React, {useState} from 'react';
import ChatBox from '../chatbox'
import Button from '@material-ui/core/Button';
import './box.css'

const Box = () => {

  const [message, setMessage] = useState('')

  const saveMessage = (event) => {
    setMessage(event.target.value)
  }
  console.log(message)
  return(
    <div className='boxContainer'>
      <ChatBox />
      <div className='buttonContainer'>
        <input 
          type='Text'
          onChange={saveMessage}
        />
        <Button variant="contained" color="primary" className='button'>
          Send
        </Button>
      </div>
    </div>
  )
}

export default Box