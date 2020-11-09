import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

import FormMenu from './FormMenu'

import { ReactComponent as ReactImage } from './undraw_On_the_way_re_swjt.svg'

export class OptionsPage extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <FormMenu />
                    <RaisedButton 
                        label = "Get a quote"
                        primary = {true}
                        style = {styles}
                        onClick = { this.continue } >
                    </RaisedButton>
                    <RaisedButton 
                        label = "Buy insurance"
                        primary = {true}
                        style = {styles}
                        >
                    </RaisedButton>
                    <RaisedButton 
                        label = "Make a claim"
                        primary = {true}
                        style = {styles}
                        disabled >
                    </RaisedButton>
                    <ReactImage />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
        margin: 15
}


export default OptionsPage