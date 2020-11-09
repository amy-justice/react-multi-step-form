import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import RaisedButton from 'material-ui/RaisedButton'

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
                    <AppBar title = "Get a quote" />
                    <h2 style={{ color: '#00568b' }}>Please tell us your cars make, model and year</h2>
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

                    {/* <div style={{ display: 'flex', alignItems: 'center', textAlign:'center'}}> */}
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
                    {/* </div> */}
                </div>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormReg
