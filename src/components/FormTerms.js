import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';

export class FormTerms extends Component {
    continue = e => {
        e.preventDefault();
        if (this.props.values.terms) {
            this.props.nextStep();
            console.log(this.props.values);
        } else {
            window.alert(
                'You must accept the terms to continue'
            )
        }
    }

    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { checkboxTerms, values } = this.props;

        return (
            <MuiThemeProvider>
                <div style={{ background: '#f3f3f3', height: '100vh'}}>
                    <AppBar title = "Get a quote" style={{ backgroundColor: '#007fc1' }} />
                    <h2 style={{ color: '#007fc1', marginTop: '50px' }}>Privacy Policy, Terms and Conditions</h2>
                    <div style={{width: '500px'}}>
                        <p style={{ margin: '40px'}}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 

                        Please tick this box to agree to our terms and conditions.
                        </p>
                        <FormControl>
                            <FormControlLabel
                            control={<Checkbox />}
                            defaultValue={values.terms}
                            label='Please tick to agree to our terms and conditions'
                            onChange={checkboxTerms('terms')} />
                        </FormControl>
                        {/* <div style={{ display: 'flex', alignItems: 'center', textAlign:'center'}}> */}
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
                        {/* </div> */}
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
    cursor: 'pointer'
}

export default FormTerms
