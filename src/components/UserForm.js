import React, { Component } from 'react'
import FormTerms from './FormTerms'

export class UserForm extends Component {
    state = {
        step: 1,
        terms: false,
        carRego: '',
        license: {
            firstName: '',
            lastName: '',
            licenseNumber: ''
        },
        otherDrivers: false,
        address: '',
        parkLocation: '',
        carKms: '',
        carHistory: '',
        existingCustomer: false
    }

    // proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // handle fields change
    handleChange = input => e => {
        console.log(input);
        this.setState({[input]: e.target.value});
    }

    checkboxTerms = input => e => {
        this.setState({[input]: e.target.checked})
    }

    render() {
        const { step } = this.state;
        const { terms, carRego, license, otherDrivers, address, parkLocation, carKms, carHistory, existingCustomer } = this.state;

        const values = { terms, carRego, license, otherDrivers, address, parkLocation, carKms, carHistory, existingCustomer }

        switch(step) {
            case 1:
                return (
                    <FormTerms 
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        checkboxTerms = {this.checkboxTerms}
                        values = {values}
                    />
                )
            case 2:
                return (
                    <h1>FormCarRego</h1>
                )
            case 3:
                return (
                    <h1>FormLicense</h1>
                )
            case 4:
                return (
                    <h1>FormOtherDrivers</h1>
                )
            case 5:
                return (
                    <h1>FormDriverUse</h1>
                )
            case 6:
                return (
                    <h1>FormAddress</h1>
                ) 
            case 7:
                return (
                    <h1>FormPark</h1>
                ) 
            case 8:
                return (
                    <h1>FormKms</h1>
                ) 
            case 9:
                return (
                    <h1>FormHistory</h1>
                ) 
            case 10:
                return (
                    <h1>FormExistingCustomer</h1>
                ) 
            case 11:
                return (
                    <h1>FormQuote</h1>
                ) 
            default:
                <h1>Default</h1>
        }
    }
}

export default UserForm
