import React from 'react';
import { Link, Route, withRouter } from "react-router-dom"
import './App.css';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Link to='/login'>Login</Link>
      <Route exact path='/login' component ={Login}/>
    </div>
  );
}

export default App;
