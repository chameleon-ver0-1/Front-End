import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import '../node_modules/font-awesome/css/font-awesome.min.css';

//MARKUP: add component down here jihu
import Login from  './components/independent/login/Login';



class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <Router>
        <div className="App">
          <Login/>

        </div>
      </Router>
    );
  }
}

export default App;
