import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import validator from "validator";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class FormUserDetails extends Component {
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
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)|| validator.isEmpty(values.email)
    ) {
      this.setState({
        error: true,
      });
    }
    else
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Enter User Details" />
            <TextField
             error={this.state.error}
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
              required
            />

            <br />
            <TextField
            error={this.state.error}
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
              required
            />
            <br />
            <TextField
             error={this.state.error}
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
              margin="normal"
              fullWidth
              required
            />
            <br />
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

FormUserDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default FormUserDetails;
