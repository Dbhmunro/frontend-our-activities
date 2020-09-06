import React from 'react';
import { connect } from 'react-redux'
import ActivitiesContainer from './containers/ActivitiesContainer.js'
import CategoriesContainer from './containers/CategoriesContainer.js'
// import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <ActivitiesContainer />
        <CategoriesContainer />
      </div>
    )
  };
}

export default connect()(App);
