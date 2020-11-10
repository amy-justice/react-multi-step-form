import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class VehicleUse extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        // this.props.values;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Get a quote" />

                    <h3>Do you use your vehicle for business? <br />For example use it for you Uber business?</h3>

                    <br />
                    <RaisedButton
                        label="YES"
                        primary={true}
                    />
                    <br />
                    <RaisedButton
                        label="NO"
                        primary={true}
                    />
                    <br />

                    <RaisedButton
                        label="BACK"
                        primary={true}
                        style={styles.buttom}
                        onClick={this.back}
                    />
                    <br />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.buttom}
                        onClick={this.continue}
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
export default VehicleUse

