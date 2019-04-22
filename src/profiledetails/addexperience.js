import React from 'react'
import { Card } from "../components/Card/Card";
import { FormInputs } from "../components/FormInputs/FormInputs";
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl
  } from "react-bootstrap";

class AddExperience extends React.Component {
    render(){
        return(
            <div>
                <h2>Add Experience</h2>
                <form>
                    <FormInputs
                      ncols={["col-md-5 col-md-offset-3" ]}
                      proprieties={[
                        {
                          label: "Company (disabled)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company",
                          defaultValue: "Capgemini",
                          disabled: true
                        }
                      ]}
                      />
                      <FormInputs
                      ncols={["col-md-5 col-md-offset-3"]}
                      proprieties={[
                        {
                          label: "Username",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Username",
                          defaultValue: "michael24"
                        }
                      ]}
                      />
                      <FormInputs
                      ncols={["col-md-5 col-md-offset-3"]}
                      proprieties={[
                        {
                          label: "Email address",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-5 col-md-offset-3"]}
                      proprieties={[
                        {
                          label: "First name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
                          defaultValue: "Mike"
                        }
                      ]}
                      />
                      <FormInputs
                      ncols={["col-md-5 col-md-offset-3"]}
                      proprieties={[
                        {
                          label: "Last name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Last name",
                          defaultValue: "Andrew"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-5 col-md-offset-3"]}
                      proprieties={[
                        {
                          label: "Adress",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Home Adress",
                          defaultValue:
                            "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-5 col-md-offset-3"]}
                      proprieties={[
                        {
                          label: "City",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                          defaultValue: "Mike"
                        }]}
                    />
                    <FormInputs
                      ncols={["col-md-5 col-md-offset-3"]}
                      proprieties={[
                        {
                          label: "Country",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Country",
                          defaultValue: "Andrew"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-5 col-md-offset-3"]}
                      proprieties={[
                        {
                          label: "Postal Code",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "ZIP Code"
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>About Me</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <button bsStyle="info" pullRight fill type="submit">
                      Update Profile
                    </button>
                    <div className="clearfix" />
                  </form>
            </div>
        )
    }
}
export default AddExperience