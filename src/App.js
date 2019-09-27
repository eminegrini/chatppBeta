import React from 'react';
import styles from './app.module.css'

const App = (props) => {
  return(
    <div className={styles.container}>
      {props.children}
    </div>
  )
}

export default App;
