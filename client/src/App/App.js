import React from 'react';
import { Router, Route } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage';
import { history } from '../_helpers';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <div className="jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <Route path="/login" component={LoginPage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
