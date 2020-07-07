import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import PrivateRoute from '../_components/PrivateRoute';
import { history } from '../_helpers';
import { authenticationService } from '../_services';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
  }

  logout() {
    authenticationService.logout();
    history.push('/login');
  }

  render() {
    const { currentUser } = this.state;
    return (
      <BrowserRouter history={history}>
        <div className="App">
          {currentUser &&
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link">Home</Link>
                <span onClick={this.logout} className="nav-item nav-link">Logout</span>
              </div>
            </nav>
          }
          <div className="jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <PrivateRoute exact path="/" component={HomePage} />
                  <Route path="/login" component={LoginPage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
