import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class FormPark extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Get a quote" />  
                    <button 
                        label = "Garage"
                        style = {buttonStyles}
                        onClick = { this.continue } >
                    Garage</button>
                    <button 
                        label = "Street"
                        primary = {true}
                        style = {buttonStyles}
                        onClick = { this.continue }
                        >
                    Street</button>
                    <button 
                        label = "Carport"
                        primary = {true}
                        style = {buttonStyles}
                        onClick = { this.continue } >
                    Carport</button>
                    <button 
                        label = "Parking Building"
                        primary = {true}
                        style = {buttonStyles}
                        onClick = { this.continue } >
                    Parking Building</button>
                    <button 
                        label = "Driveway"
                        primary = {true}
                        style = {buttonStyles}
                        onClick = { this.continue } >
                    Driveway</button>
                    <button 
                        label = "Locked Premises"
                        primary = {true}
                        style = {buttonStyles}
                        onClick = { this.continue } >
                    Locked Premises</button>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const buttonStyles = {
    background: '#00568b',
    borderRadius: '15px',
    color: 'white',
    padding: 15,
    margin: 15,
    border: 'none',
    width: 200,
    fontSize: '16px',
    cursor: 'pointer'
}

export default FormPark