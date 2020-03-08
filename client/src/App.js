import React from 'react';
import './App.css';
import { css } from 'emotion'
import { Route, Switch } from 'react-router-dom';
import Landing from './views/Landing'
import PrivateRoute from './components/PrivateRoute'
import Admin from './views/Admin'
import Gallery from './views/Gallery'
import Login from './views/Login'
import Pictures from './views/Pictures'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={props => <Landing {...props} />} />
        <Route path='/gallery_selection' render={props => <Gallery {...props} />} />
        <Route exact path='/gallery' render={props => <Pictures {...props} />} />
        <Route exact path='/admin' render={props => <Login {...props} />} />
        <PrivateRoute exact path='/admin_access' view={Admin} />
      </Switch>
    </div>
  );
}

export default App;
