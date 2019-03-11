import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import '../node_modules/font-awesome/css/font-awesome.min.css';

//MARKUP: add component down here jihu

// import Index from './components/independent/index';
import { Auth} from './components/independent';



class App extends Component {

  componentDidMount() {

  }
  render() {
    return (
      <Router>
        <div className="App">
          <Auth/>
        </div>
      </Router>
    );
  }
}

export default App;
