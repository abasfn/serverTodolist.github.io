import React from 'react';
import './App.css';
import Server from './pages/server/server';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ToDoList from './pages/todolist/todolist';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/Server">
          <div>
            <Server />
          </div>
        </Route>
        <Route path="/todolist">
        <div>
          <ToDoList />
          </div>
        </Route>
        <Route path="/">
          <div className='container mx-auto text-center'>
           <Link to='/todolist'> <button className='bg-blue-600 text-white mt-10 rounded-lg p-2'>TODOLIST</button></Link>
           <Link to='/Server'> <button className='bg-blue-600 p-2 text-white mt-10 rounded-lg'>SERVER</button></Link>
          </div>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
