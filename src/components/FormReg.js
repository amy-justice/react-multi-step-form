import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

export class FormReg extends Component {
    continue = e => {
        e.preventDefault();
        
        // this.props.nextStep();
        console.log('next page')
    }

    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { handleChange, values } = this.props;

        return (
            <MuiThemeProvider>
                <div style={{ background: '#f3f3f3', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <AppBar title = "Get a quote" style={{ backgroundColor: '#007fc1' }} />
                    <h2 style={{ color: '#007fc1', marginTop: '50px' }}>Please tell us about your car</h2>
                    <div style={{width: 500}}>
                    <TextField 
                        hintText='e.g Toyota'
                        floatingLabelText='Make'
                        defaultValue = { values.carMake }
                        onChange = { handleChange('carMake') }
                    />
                    <TextField 
                        hintText='e.g Corolla'
                        floatingLabelText='Model'
                        onChange = {handleChange('carModel')}
                        defaultValue = {values.carModel}
                    />
                    <TextField 
                        hintText='Year'
                        floatingLabelText='Year'
                        onChange = {handleChange('carYear')}
                        defaultValue = {values.carYear}
                    />
                    <TextField 
                        hintText='e.g. Sedan'
                        floatingLabelText='Shape'
                        onChange = {handleChange('carShape')}
                        defaultValue = {values.carShape}
                    />
                    <TextField 
                        hintText='Engine Capacity'
                        floatingLabelText='Engine Capacity'
                        onChange = {handleChange('carEngine')}
                        defaultValue = {values.carEngine}
                    />

                    <div>
                    <button 
                        label = "Go back"
                        primary = {true}
                        style= {buttonStyles}
                        onClick = { this.previous } >
                    Go back</button>

                    <button 
                        label = "Continue"
                        primary = {true}
                        style= {buttonStyles}
                        onClick = { this.continue } >
                    Continue</button>
                    </div>
                    {/* <div style={{ display: 'flex', alignItems: 'center', textAlign:'center'}}>
                            <RaisedButton 
                                label = "Go back"
                                primary = {true}
                                style= {styles.button}
                                onClick = { this.previous } >
                            </RaisedButton>

                            <RaisedButton 
                                label = "Continue"
                                primary = {true}
                                style= {styles.button}
                                onClick = { this.continue } >
                            </RaisedButton>
                    </div> */}

                    </div>
                </div>
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
    width: 120,
    fontSize: '14px',
    cursor: 'pointer',
    marginTop: 30
}

export default FormReg
