import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import avatar from "../asserts/profileImage.png";
import UserCard from '../components/UserCard/UserCard'
class UserProfile extends Component {


  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={4}>
              <UserCard
                avatar={avatar}
                name="Mike Andrew"
                userName="michael24"
                description={
                  <span>
                    "Lamborghini Mercy
                    <br />
                    Your chick she so thirsty
                    <br />
                    I'm in that two seat Lambo"
                  </span>
                }
                socials={
                  <div>
                    <button>
                      <i className="fa fa-facebook-square" />
                    </button>
                    <button>
                      <i className="fa fa-twitter" />
                    </button>
                    <button>
                      <i className="fa fa-google-plus-square" />
                    </button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
        <div>
          <a href={'/editprofile'} className="btn btn-warning btn-block">Edit Profile</a>
          <br />
          <br />
          <a href={'/addexperience'} className="btn btn-primary btn-block">Add Experience</a>
          <br />
          <br />
          <a href={'/addskill'} className="btn btn-success btn-block">Add Skill</a>
        </div>
      </div>
    );
  }
}

export default UserProfile;