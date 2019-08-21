import React from 'react';
import {Route, Link} from 'react-router-dom'
import './App.css';
import LoginForm from './components/LoginForm';
import DataDisplay from './components/DataDisplay'
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <div className="App">
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to='/protected'>Protected Page</Link>
      </li>
    </ul>
    <Route path="/login" component={LoginForm} />
    <PrivateRoute exact path='/protected' component={DataDisplay} />
    </div>
  );
}

export default App;
