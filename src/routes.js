import React from 'react'
import { Route, Redirect, Switch  } from 'react-router-dom'
import Login from './Components/login'
import Box from './Components/box'
import App from './App'
import Register from './Components/register'

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Redirect exact from="/" to="/login" />
      <Route  exact path="/chat" component={Box} />
      <Route exacp path='/register' component={Register} />
    </Switch>
  </App>
);

export default Routes