import React, { Component } from 'react'
import FormTerms from './FormTerms'
import OptionsPage from './OptionsPage'
import FormReg from './FormReg';
import FormHistory from './FormHistory'
import FormExistingCustomer from './FormExistingCustomer'
import FormQuote from './FormQuote'
//junico's files
import ScanningLicence from './ScanningLicence';
import OwnerDetails from './OwnerDetails';
import Confirm from './Confirm';
import OtherDriver from './OtherDriver';
import VehicleUse from './VehicleUse';
//junico's files end here
export class UserForm extends Component {
    state = {
        step: 0,
        terms: false,
        carMake: '',
        carModel: '',
        carYear: '',
        carShape: '',
        carEngine: '',
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
        this.setState({ [input]: e.target.value });
        console.log(this.state);
    }

    checkboxTerms = input => e => {
        this.setState({ [input]: e.target.checked })
    }

    render() {
        const { step } = this.state;
        const { terms, carMake, carModel, carYear, carShape, carEngine, license, otherDrivers, address, parkLocation, carKms, carHistory, existingCustomer, firstName, lastName, dob, issueDate, expiryDate, donorIndicator, driverLicenceNumber, classesEndorsements } = this.state;

        const values = { terms, carMake, carModel, carYear, carShape, carEngine, license, otherDrivers, address, parkLocation, carKms, carHistory, existingCustomer, firstName, lastName, dob, issueDate, expiryDate, donorIndicator, driverLicenceNumber, classesEndorsements }

        switch (step) {
            case 0:
                return (
                    <OptionsPage
                        nextStep={this.nextStep}
                    />
                )
            case 1:
                return (
                    <FormTerms
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        checkboxTerms={this.checkboxTerms}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormReg
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )


            // junico's cases start here
            case 3:
                return (
                    <ScanningLicence
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}

                    />
                );

            case 4:
                return (
                    <OwnerDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}

                    />
                );

            case 5:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}

                    />
                );

            case 6:
                return (
                    <OtherDriver
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}

                    />
                );

            case 7:
                return (
                    <VehicleUse
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}

                    />
                );

            // junico's cases ends here
            // josh's cases starts here
            case 8:
                return (
                    <h1>FormAddress</h1>
                )
            case 9:
                return (
                    <h1>FormPark</h1>
                )
            case 10:
                return (
                    <h1>FormKms</h1>
                )

            // josh's cases ends  here    
            case 11:
                return (
                    <FormHistory
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 12:
                return (
                    <FormExistingCustomer
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 13:
                return (
                    <FormQuote
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            default:
                <h1>Default</h1>
        }
    }
}

export default UserForm
