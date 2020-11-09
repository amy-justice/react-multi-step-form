import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import RaisedButton from 'material-ui/RaisedButton'

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
                    <AppBar title = "Get a quote" />
                    <h2 style={{ color: '#00568b' }}>Privacy Policy, Terms and Conditions</h2>
                    <div style={{width: '500px'}}>
                        <p>
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

export default FormTerms
