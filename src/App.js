import React from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import TopActivitiesContainer from './containers/TopActivitiesContainer'
import CategoriesContainer from './containers/CategoriesContainer'
import UserActivitiesContainer from './containers/UserActivitiesContainer'
import UserLoginForm from './components/UserLoginForm'
import UserSignupForm from './components/UserSignupForm'
import NavBar from './components/NavBar'
import { getUser } from './actions/users'
// import './App.css';

class App extends React.Component {

  // add on componenDidMount fetch for user if there is a userId in localStorage
  componentDidMount() {
    let userId = localStorage.getItem('userId')
    if (!!userId && userId !== null) {
      this.props.dispatchGetUser(userId)
    }
  }
  
  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/login">
              {this.props.user.id ? <Redirect to="/activities" /> : <UserLoginForm />}
            </Route>
            <Route path="/signup">
              {this.props.user.id ? <Redirect to="/activities" /> : <UserSignupForm />}
            </Route>
            <Route path="/categories">
              <CategoriesContainer />
            </Route>
            <Route path="/activities">
              {!this.props.user.id ? <Redirect to="/login" /> : <UserActivitiesContainer />}
            </Route>
            <Route path="/">
              <TopActivitiesContainer />
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
    )
  };
}

const mSTP = state => {
  return {
    user: state.users
  }
}

const mDTP = (dispatch) => {
  return {
    dispatchGetUser: (userId) => dispatch(getUser(userId))
  }
}

export default connect(mSTP, mDTP)(App);
