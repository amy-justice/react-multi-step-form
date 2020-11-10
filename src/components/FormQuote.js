import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export class FormQuote extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <div style= {{backgroundColor: '#0076be'}}>
                   {/* <ArrowBackIcon 
                    onClick={this.back}
                    primary= {true}
                    />
                   */}
                    <h1 style= {{color: 'white', margin: 30, paddingTop: 100}}>Turners customer Login</h1>
                    <TextField
                      hintText = "Enter your email"
                      floatingLabelText ="Email"
                      onChange = {handleChange.email}
                      defaultValue = {values.email}
                    />
                    <TextField 
                      hintText = "Enter your password"
                      floatingLabelText = "Password"
                      onChange = {handleChange.password}
                      defaultValue = {values.password}
                    />
                    <br />
                    <button 
                      label="LOG IN"
                      primary={true}
                      style={btnStyles}
                      onClick={this.continue}>LOGIN
                      </button>
                    
                </div>
            </MuiThemeProvider>
        )
    }
}

const btnStyles = {
  background: 'white',
  borderRadius: '25px',
  border: 'none',
  padding: 16,
  margin: 50,
  marginBottom: 100,
  fontSize: 14,
  fontWeight: 600
}

export default FormQuote;

