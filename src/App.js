import React, { Component } from 'react'; 
import {connect} from 'react-redux';
import Home from './components/pages/Home';
import './index.css'

class App extends Component {
 
  render() {
    return (
      <Home/>
    )
  }
}

export default connect()(App);
