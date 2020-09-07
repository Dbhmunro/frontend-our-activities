import React from 'react';
import { connect } from 'react-redux'
import TopActivitiesContainer from './containers/TopActivitiesContainer.js'
import CategoriesContainer from './containers/CategoriesContainer.js'
import UserLoginForm from './components/UserLoginForm'
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/login">
              <UserLoginForm />
            </Route>
            <Route path="/categories">
              <CategoriesContainer />
            </Route>
            <Route path="/">
              <TopActivitiesContainer />
            </Route>
          </Switch>
        </div>
      </Router>
        {/* <UserLoginForm />
        <TopActivitiesContainer />
        <CategoriesContainer /> */}
      </div>
    )
  };
}

export default connect()(App);
