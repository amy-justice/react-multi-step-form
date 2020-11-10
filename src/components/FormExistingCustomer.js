import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';


export class FormExistingCustomer extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values } = this.props;
        return (
            <MuiThemeProvider>
                    <AppBar title='Get a quote' style={{ backgroundColor: '#0076be' }}/>
                    <h2 style= {{padding:50,paddingBottom:10}}>Are you an existing Turners' customer?</h2>
                    <p style={{padding:50,paddingBottom:10,paddingTop:0}}>If you are an existing Turners' customer, you'll save 10% on your premium.</p>
                    <button
                      label="no"
                      primary={true}
                      style={btnStyles}
                      onClick={this.back}> NO
                      </button>
                    
                    <button
                      label="yes"
                      primary={true}
                      style={btnStyles}
                      onClick={this.continue} > YES
                      </button>
                    
            </MuiThemeProvider>
        )
    }
}

const btnStyles = {
    background: '#0076be',
    borderRadius: '15px',
    color: 'white',
    padding: 12,
    margin: 15,
    border: 'none',
    width: 110,
    fontSize: '14px',
    cursor: 'pointer'
  }

export default FormExistingCustomer;
