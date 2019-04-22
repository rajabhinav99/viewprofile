import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ProfileDisplay extends React.Component {
    render() {
        return (
            <div className="container" style={{ boxshadow: '10px 10px 10px' }}>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                        <img className="img" height="200px" width="100%" src={require("../src/asserts/coverImage.jpg")} />
                    </div>
                    <div className="row" style={{ margin: '50px' }}>
                        <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4">
                            <div className="row">
                                <div className="col-md-12 col-md-12-sm-12 col-xs-12 col-lg-12" style={{left: '110px' }}>
                                    <div><FontAwesomeIcon icon="envelope" /></div>
                                </div>

                                <div className="col-md-12 col-md-12-sm-12 col-xs-12 col-lg-12" style={{ top: '-120px' }}>
                                   
                                    <img src={require("../src/asserts/profileImage.png")} />

                                    <h4>Mario Mendez</h4>
                                    <p>Senior Architect</p>
                                    <button className="btn btn-info req-btn"> FOLLOW</button>
                                </div>
                                <div className="row user-detail-row">
                                    <div className="col-md-12 col-sm-12 col-lg-12">
                                        <div className="border"></div>
                                        <p>FOLLOWERS</p>
                                        <span style={{ color: '#7CBBC3' }}>320</span>
                                        <div className="border"></div>
                                        <p>FOLLOWING</p>
                                        <span style={{ color: '#7CBBC3' }}>147</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-8 col-xs-12 col-lg-8">
                            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                                <h1>Add details</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileDisplay;