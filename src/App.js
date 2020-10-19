import React from 'react';
import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import {Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Route exact path="/" component={Login}/>
    <Route path="/dashboard" component={Dashboard}/>
    </BrowserRouter>
    </div>
  );
}
export default App;