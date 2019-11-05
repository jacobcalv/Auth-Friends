import React from 'react';
import { Link, Route, withRouter } from "react-router-dom"
import './App.css';
import Login from './components/Login'
import {getToken} from './components/utils/api'
import FriendsList from './components/FriendsList'
import ProtectedRoute from './components/ProtectedRoute'
import Logout from './components/Logout'

function App() {
  const signedIn = getToken()

  return (
    <div className="App">

      <nav>
				<Link to="/">Home</Link>
				{!signedIn && <Link to="/signin">Sign In</Link>}
				{signedIn && <Link to="/friends">My Friends</Link>}
				{signedIn && <Link to="/logout">Logout</Link>}
			</nav>

      <Link to='/login'>Login</Link>
      <Route exact path='/login' component ={Login}/>
      <ProtectedRoute exact path="/friends" component={FriendsList} />
			<ProtectedRoute exact path="/logout" component={Logout} />
    </div>
  );
}

export default App;
