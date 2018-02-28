import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './general_assembly_logo.png';
import { Switch, Route } from 'react-router-dom';
import Success from './components/Success';
import SignForm from './components/SignForm';
import './App.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Switch>
            <Route exact path="/" component={SignForm} />
            <Route exact path="/success" component={Success} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
