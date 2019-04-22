import React, { Component } from 'react';
import './App.css';
import ProfileDisplay from './ProfileDisplay';
import UserProfile from './profiledetails/profiledetail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import EditProfile from './profiledetails/editprofile';
import AddSkill from './profiledetails/addskill';
import AddExperience from './profiledetails/addexperience';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <UserProfile />
      // </div>


      <div className="container">
        <div className="row">
          <div className="col-md-12">

            <UserProfile />
            <hr />
          
              <Switch>
                <Route path='/editprofile' component={EditProfile} />
                <Route path='/addskill' component={AddSkill} />
                <Route path='/addexperience' component={AddExperience} />
              </Switch>
            
          </div>
        </div>
      </div>

    );
  }
}

export default App;
