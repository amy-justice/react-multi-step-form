import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
                    <button 
                        label = "Get a quote"
                        style = {buttonStyles}
                        onClick = { this.continue } >
                    Get a quote</button>
                    <button 
                        label = "Buy insurance"
                        primary = {true}
                        style = {buttonStyles}
                        >
                    Buy insurance</button>
                    <button 
                        label = "Make a claim"
                        primary = {true}
                        style = {buttonStyles2}
                        disabled >
                    Make a claim</button>
                    <ReactImage />
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

const buttonStyles2 = {
    background: '#cccccc',
    borderRadius: '15px',
    color: '#aaaaaa',
    padding: 15,
    margin: 15,
    border: 'none',
    width: 200,
    fontSize: '16px',
    marginBottom: '25px'
}


export default OptionsPage