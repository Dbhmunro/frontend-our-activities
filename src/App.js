import React from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import TopActivitiesContainer from './containers/TopActivitiesContainer'
import CategoriesContainer from './containers/CategoriesContainer'
import UserActivitiesContainer from './containers/UserActivitiesContainer'
import UserLoginForm from './components/UserLoginForm'
import UserSignupForm from './components/UserSignupForm'
import NavBar from './components/NavBar'
import { getUser } from './actions/users'
import { fetchActivities } from './actions/activities'
import { fetchCategories } from './actions/categories'
// import './App.css';

class App extends React.Component {

  // add on componenDidMount fetch for user if there is a token in localStorage
  componentDidMount() {
    let token = localStorage.getItem('token') //change to token
    if (!!token && token !== null) {
      this.props.dispatchGetUser(token) //pass token details
    }
    this.props.dispatchFetchActivities()
    this.props.dispatchFetchCategories()

  }

  welcomeTitle = () => {
    if (this.props.user.username) {
      return(
        <h2>Hello, {this.props.user.username}</h2>
      )
    } else {
      return(
        <h2>Hello!</h2>
      )
    }
  }
  
  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <NavBar />
          <h1>Welcome to Our Activities</h1>
          { this.welcomeTitle() }
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
    dispatchGetUser: (userId) => dispatch(getUser(userId)),
    dispatchFetchActivities: () => dispatch(fetchActivities()),
    dispatchFetchCategories: (items) => dispatch(fetchCategories(items))
  }
}

export default connect(mSTP, mDTP)(App);
