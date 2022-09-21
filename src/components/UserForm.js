import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormEducationDetails from './FormEducationDetails';
import Confirm from './Confirm';
import Success from './Success';
import FormProfessionallDetails from './FormProfessionalDetails';

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
    currentJobRole:"",
    technology:"",
    department:"",
    lastQualification:"",
    college:"",
    passingYear:"",
    marks:""
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio,currentJobRole,technology,lastQualification,college,passingYear,marks,department} = this.state;
    const values = { firstName, lastName, email, occupation, city, bio,currentJobRole,technology,department,lastQualification,college,passingYear,marks };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 3:
          return <FormEducationDetails 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}/>;

            case 4:
          return <FormProfessionallDetails 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}/>;

      case 5:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
       
      case 6:
        return <Success 
        values={values}/>;
      
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
