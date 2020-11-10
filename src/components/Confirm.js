import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class ScanningLicence extends Component {
    continue = e => {
        e.preventDefault();
        // Process the form - backend//
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values: { firstName, lastName, dob, issueDate, expiryDate, donorIndicator, driverLicenceNumber, classesEndorsements } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Get a quote" />
                    <h2>Owner's Details</h2>
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <br />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <br />
                        <ListItem
                            primaryText="D.O.B"
                            secondaryText={dob}
                        />
                        <br />
                        <ListItem
                            primaryText="Issue Date"
                            secondaryText={issueDate}
                        />
                        <br />
                        <ListItem
                            primaryText="Expiry Date"
                            secondaryText={expiryDate}
                        />
                        <br />
                        <ListItem
                            primaryText="Donor Indicator"
                            secondaryText={donorIndicator}
                        />
                        <br />
                        <ListItem
                            primaryText="Driver Licence Number"
                            secondaryText={driverLicenceNumber}
                        />
                        <br />
                        <ListItem
                            primaryText="Class/Endorsements"
                            secondaryText={classesEndorsements}
                        />
                        <br />

                    </List>
                    <br />
                    <RaisedButton
                        label="Confirm and Continue"
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
export default ScanningLicence

