import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Customerlist from './components/Customerlist';
import Traininglist from './components/Traininglist';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h5">
                  Personal trainer app {' '} 
                  <Link to='/'>Customers</Link>{' '}
                  <Link to='/Traininglist'>Trainings</Link>{' '}
                </Typography>
              </Toolbar>
            </AppBar>
          <Switch>
            <Route exact path='/' component={Customerlist} />
            <Route path='/traininglist' component={Traininglist} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;