import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class OwnerDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values, handleChange } = this.props;
        // this.props.values;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Get a quote" />
                    <h2>Owner Details</h2>
                    <br />
                    <TextField
                        hintText="Enter Your First Name"
                        FloatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        hintText="Enter Your Last Name"
                        FloatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br />
                    <TextField
                        hintText="Enter Date of Birth (dd/mm/yyyy)"
                        FloatingLabelText="Date of Birth"
                        onChange={handleChange('dob')}
                        defaultValue={values.dob}
                    />
                    <br />
                    <TextField
                        hintText="Enter Issue Date (dd/mm/yyyy)"
                        FloatingLabelText="Issue Date"
                        onChange={handleChange('issueDate')}
                        defaultValue={values.issueDate}
                    />
                    <br />
                    <TextField
                        hintText="Enter Expiry Date (dd/mm/yyyy)"
                        FloatingLabelText="Expiry Date"
                        onChange={handleChange('expiryDate')}
                        defaultValue={values.expiryDate}
                    />
                    <br />
                    <TextField
                        hintText="Enter Donor Indicator"
                        FloatingLabelText="Donor Indicator"
                        onChange={handleChange('donorIndicator')}
                        defaultValue={values.donorIndicator}
                    />
                    <br />
                    <TextField
                        hintText="Enter Driver Licence Number"
                        FloatingLabelText="Driver Licence Number"
                        onChange={handleChange('driverLicenceNumber')}
                        defaultValue={values.driverLicenceNumber}
                    />
                    <br />
                    <TextField
                        hintText="Enter Classes/Endorsements: (Motorcar, Light Motor Vehicle)"
                        FloatingLabelText="Classes/Endorsements"
                        onChange={handleChange('classesEndorsements')}
                        defaultValue={values.classesEndorsements}
                    />





                    <br />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.buttom}
                        onClick={this.continue}
                    />
                    <br />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.buttom}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default OwnerDetails

