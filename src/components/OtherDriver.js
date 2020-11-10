import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class OtherDriver extends Component {
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

                    <h3>Are there other regular drivers?</h3>

                    <br />
                    <RaisedButton
                        label="ADD ANOTHER DRIVER"
                    />
                    <br />

                    <RaisedButton
                        label="NOPE NEXT"
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
export default OtherDriver

