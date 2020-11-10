import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class carKms extends Component {
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

                    <h3>Roughly how many kilometres do you drive in a year?</h3>

                    <br />
                    <RaisedButton
                        label="UNDER 5,000 kms "
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <br />
                    <RaisedButton
                        label="5,000 - 10,000 kms"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <br />

                    <RaisedButton
                        label="10,000 - 20,000 kms"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <br />
                    <RaisedButton
                        label="Over 20,000 kms"
                        primary={true}
                        style={styles.button}
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
export default carKms
