import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookDetails from './components/pages/BookDetails';
import Home from './components/pages/Home';
import './styles/index.css'

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/book-details:id' component={BookDetails} />
        </Switch>
      </Router>
    )
  }
}

export default connect()(App);
