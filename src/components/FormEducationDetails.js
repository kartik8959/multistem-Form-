import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import validator from "validator";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormEducationDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: false,
        };
      }
    continue = (e) => {
        const { values } = this.props;
        e.preventDefault();
        if (
          validator.isEmpty(values.lastQualification) ||
          validator.isEmpty(values.college)|| validator.isEmpty(values.passingYear)||  validator.isEmpty(values.marks)
        ) {
          this.setState({
            error: true,
          });
        }
        else
        this.props.nextStep();
      };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />
            <TextField
              error={this.state.error}
              placeholder="Highest qualification"
              label="Qualification"
              onChange={handleChange('lastQualification')}
              defaultValue={values.lastQualification}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
            error={this.state.error}
              placeholder="College"
              label="College"
              onChange={handleChange('college')}
              defaultValue={values.college}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
            error={this.state.error}
              placeholder="passing Year"
              label="passing Year"
              onChange={handleChange('passingYear')}
              defaultValue={values.passingYear}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
            error={this.state.error}
              placeholder="Enter Your marks"
              label="Marks"
              onChange={handleChange('marks')}
              defaultValue={values.marks}
              margin="normal"
              fullWidth
            />
            <br />
            

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormEducationDetails;
