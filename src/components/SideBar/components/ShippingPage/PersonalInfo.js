import React, { useState } from "react";
import InputField from "../../../utilityComponents/InputField";

const PersonalInfo = ({ checkoutData, setCheckoutData, validationErrors, setValidationErrors }) => {
    const [passwordData, setPasswordData] = useState({
        password: '',
        confirmPassword: ''
    });

    const handlePersonalInfo = (e) => {
        let { name, value } = e.target;
        if (name === 'phone') {
            let x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        }
        if (name === 'password' || name === 'confirmPassword') {
            setPasswordData((prev) => ({ ...prev, [name]: value }));

            // Perform validation for password length and matching
            if (name === 'password' && value.length < 6) {
                setValidationErrors((prev) => ({ ...prev, password: 'The Password Should Be At Least 6 Characters.' }));
            } else if (name === 'confirmPassword' && value !== passwordData.password) {
                setValidationErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match.' }));
            } else {
                // Clear errors if no issues
                setValidationErrors((prev) => ({ ...prev, [name]: null }));
            }
        } else {
            setCheckoutData((prev) => ({ ...prev, [name]: value }));
            setValidationErrors((prev) => ({ ...prev, [name]: null })); // Clear error on change
        }
    }
    return (
        <div className="personalInfoWrapper">
            <p className="marginZero personalInfoText">PERSONAL INFO</p>
            <div className="step2InputBoxContainerWrapper">
                <InputField
                    placeHolder='First Name'
                    value={checkoutData.firstName}
                    onChange={handlePersonalInfo}
                    validationError={validationErrors.firstName}
                    wrapperClass='personalInfoContainer'
                    name='firstName'
                    type='text'
                />

                <InputField
                    placeHolder='Last Name'
                    value={checkoutData.lastName}
                    onChange={handlePersonalInfo}
                    validationError={validationErrors.lastName}
                    wrapperClass='personalInfoContainer'
                    name='lastName'
                    type='text'
                />
            </div>
            <div className="step2InputBoxContainerWrapper">
                <InputField
                    placeHolder='Password'
                    wrapperClass='personalInfoContainer'
                    name='password'
                    type='password'
                    value={passwordData.password}
                    onChange={handlePersonalInfo}
                    validationError={validationErrors.password}
                />

                <InputField
                    placeHolder='Confirm Password'
                    wrapperClass='personalInfoContainer'
                    type='password'
                    name='confirmPassword'
                    value={passwordData.confirmPassword}
                    onChange={handlePersonalInfo}
                    validationError={validationErrors.confirmPassword}
                />
            </div>

            <div className="step2InputBoxContainerWrapper">
                <InputField
                    placeHolder='Phone'
                    value={checkoutData.phone}
                    // onChange={handlePhone}
                    onChange={handlePersonalInfo}
                    validationError={validationErrors.phone}
                    wrapperClass='personalInfoContainer phoneNumberContainer'
                    name='phone'
                    id='phone'
                    type='text'
                />
            </div>
        </div>
    );
}

export default PersonalInfo;