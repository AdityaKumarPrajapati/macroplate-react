import React from "react";
import InputField from "../../utilityComponents/InputField";
import TextAreaField from "../../utilityComponents/TextAreaField";
import DropdownComponent from "../../utilityComponents/DropdownComponent";
import CheckboxButton from "../../utilityComponents/CheckboxButton";

const DeliveryInfo = ({ checkoutData, setCheckoutData, validationErrors, setValidationErrors, currentPage, headerText }) => {
    const handleDeliveryInfoData = (e) => {
        const { name, value } = e.target;
        setCheckoutData((prev) => ({ ...prev, [name]: value }));
        setValidationErrors((prev) => ({ ...prev, [name]: null }));
    }

    const handleFirstDeliveryDate = (date) => {
        setCheckoutData((prev) => ({ ...prev, firstDeliveryDate: date }));
    }
    return (
        <div className="deliveryInfoWrapper">
            <p className="marginZero personalInfoText">{headerText}</p>
            <CheckboxButton 
                label='Same As Delivery Address'
            />
            <div className="step2InputBoxContainerWrapper">
                <InputField
                    placeHolder='Delivery Address'
                    value={checkoutData.address}
                    onChange={handleDeliveryInfoData}
                    validationError={validationErrors.address}
                    wrapperClass='addressContainer'
                    name='address'
                    id='google_location'
                />

                <InputField
                    placeHolder='Suite'
                    value={checkoutData.suite}
                    onChange={handleDeliveryInfoData}
                    wrapperClass='suiteContainer'
                    name='suite'
                    id='suite'
                />
            </div>

            <div className="cityStateZipContainer">
                <div className="step2InputBoxContainerWrapper addressContainer">
                    <InputField
                        placeHolder='City'
                        value={checkoutData.city}
                        onChange={handleDeliveryInfoData}
                        validationError={validationErrors.address}
                        wrapperClass='cityContainer'
                        name='city'
                        id='city'
                        type='text'
                    />

                    <InputField
                        placeHolder='State'
                        value={checkoutData.state}
                        onChange={handleDeliveryInfoData}
                        validationError={validationErrors.address}
                        wrapperClass='stateContainer'
                        name='state'
                        id='state'
                        type='text'
                    />
                </div>

                <div className="step2InputBoxContainerWrapper suiteContainer">
                    <InputField
                        placeHolder='ZIP Code'
                        value={checkoutData.zipCode}
                        onChange={handleDeliveryInfoData}
                        validationError={validationErrors.address}
                        wrapperClass='zipCodeContainer'
                        name='zipCode'
                        id='zip_code'
                        type='text'
                    />
                </div>
            </div>

            {currentPage === 2 &&

                <>
                    <div className="deliveryInstructionsContainer">
                        <TextAreaField
                            wrapperClass='deliveryInstructions'
                            placeHolder='Delivery Instructions / Access Codes'
                            value={checkoutData.deliveryNotes}
                            onChange={handleDeliveryInfoData}
                            name='deliveryNotes'
                            id='delivery_notes'
                        />
                    </div>

                    <div className="nextDeliveryDropdownContainer">
                        <DropdownComponent
                            onSelect={handleFirstDeliveryDate}
                        />
                    </div>
                </>
            }
        </div>
    );
}

export default DeliveryInfo;