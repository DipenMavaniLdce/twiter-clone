import React from 'react';
import axios from 'axios'
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NavaBar from './components/layout/NavaBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import themeFile from './utils/theme'
import AuthRoute from './utils/AuthRoute'
import JwtDecode from 'jwt-decode'
import User from './pages/User'

import {Provider} from 'react-redux'
import store from './redux/store'

import {SET_AUTHENTICATED,SET_UNAUTHENTICATED} from './redux/type'
import {logOut,getUserData} from './redux/actions/userAction'

const token = localStorage.FBIdToken;
if (token){
  const decodedToken = JwtDecode(token)
  if (decodedToken.exp * 1000 < Date.now()){
    
    store.dispatch(logOut())
    store.dispatch({
      type : SET_UNAUTHENTICATED
    })
    window.location.href = '/login'
  }
  else{
    store.dispatch({
      type : SET_AUTHENTICATED
    })
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
    
  }
}

const theme = createMuiTheme(themeFile)
function App() {
  
 
  return (
  <MuiThemeProvider theme={theme}>
    <Provider store = {store}>
    
       <Router>
          <NavaBar />
          <div className='container'>
          <Switch>
              <Route exact path='/'   component={Home}/>
              <AuthRoute exact path='/login' component={Login} />
              <AuthRoute exact path='/signup' component={SignUp}  />  
              <Route  exact path= '/users/:handle' component= {User} />
              <Route  exact path= '/users/:handle/scream/:Screamid' component= {User} />
          </Switch>
          </div>
       </Router>
  
    </Provider>
  </MuiThemeProvider>
  )
} 

export default App;
