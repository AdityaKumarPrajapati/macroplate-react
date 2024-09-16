import React, { useState, useEffect } from "react";
import InputField from "../../utilityComponents/InputField";
import TextAreaField from "../../utilityComponents/TextAreaField";
import DropdownComponent from "../../utilityComponents/DropdownComponent";
import CheckboxButton from "../../utilityComponents/CheckboxButton";

const DeliveryInfo = ({ checkoutData, setCheckoutData, validationErrors, setValidationErrors, currentPage, headerText }) => {
    const [sameAsDelivery, setSameAsDelivery] = useState(true);

    // Effect to sync billing address with delivery when checkbox is checked
    useEffect(() => {
        if (sameAsDelivery && currentPage === 3) {
            setCheckoutData((prev) => ({
                ...prev,
                billingAddress: prev.address,
                billingSuite: prev.suite,
                billingCity: prev.city,
                billingState: prev.state,
                billingZipCode: prev.zipCode,
            }));
        }
    }, [sameAsDelivery, checkoutData.address, checkoutData.suite, checkoutData.city, checkoutData.state, checkoutData.zipCode, currentPage, setCheckoutData]);

    const handleDeliveryInfoData = (e) => {
        const { name, value } = e.target;
        setCheckoutData((prev) => ({ ...prev, [name]: value }));
        setValidationErrors((prev) => ({ ...prev, [name]: null }));
    };

    const handleBillingInfoData = (e) => {
        const { name, value } = e.target;
        setCheckoutData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        setSameAsDelivery(isChecked);
        if (!isChecked) {
            // Clear billing fields when checkbox is unchecked
            setCheckoutData((prev) => ({
                ...prev,
                billingAddress: "",
                billingSuite: "",
                billingCity: "",
                billingState: "",
                billingZipCode: "",
            }));
        }
    };

    const handleFirstDeliveryDate = (date) => {
        setCheckoutData((prev) => ({ ...prev, firstDeliveryDate: date }));
    };

    return (
        <div className="deliveryInfoWrapper">
            <p className="marginZero personalInfoText">{headerText}</p>
            {currentPage === 3 && (
                <CheckboxButton
                    label="Same As Delivery Address"
                    checked={sameAsDelivery}
                    onChange={handleCheckboxChange}
                />
            )}

            <div className="step2InputBoxContainerWrapper">
                <InputField
                    placeHolder="Delivery Address"
                    value={currentPage === 2 ? checkoutData.address : checkoutData.billingAddress}
                    onChange={handleDeliveryInfoData}
                    validationError={validationErrors.address}
                    wrapperClass="addressContainer"
                    name="address"
                    id="google_location"
                />

                <InputField
                    placeHolder="Suite"
                    value={currentPage === 2 ? checkoutData.suite : checkoutData.billingSuite}
                    onChange={handleDeliveryInfoData}
                    wrapperClass="suiteContainer"
                    name="suite"
                    id="suite"
                />
            </div>

            <div className="cityStateZipContainer">
                <div className="step2InputBoxContainerWrapper addressContainer">
                    <InputField
                        placeHolder="City"
                        value={currentPage === 2 ? checkoutData.city : checkoutData.billingCity}
                        onChange={handleDeliveryInfoData}
                        validationError={validationErrors.city}
                        wrapperClass="cityContainer"
                        name="city"
                        id="city"
                        type="text"
                    />

                    <InputField
                        placeHolder="State"
                        value={currentPage === 2 ? checkoutData.state : checkoutData.billingState}
                        onChange={handleDeliveryInfoData}
                        validationError={validationErrors.state}
                        wrapperClass="stateContainer"
                        name="state"
                        id="state"
                        type="text"
                    />
                </div>

                <div className="step2InputBoxContainerWrapper suiteContainer">
                    <InputField
                        placeHolder="ZIP Code"
                        value={currentPage === 2 ? checkoutData.zipCode : checkoutData.billingZipCode}
                        onChange={handleDeliveryInfoData}
                        validationError={validationErrors.zipCode}
                        wrapperClass="zipCodeContainer"
                        name="zipCode"
                        id="zip_code"
                        type="text"
                    />
                </div>
            </div>

            {currentPage === 2 && (
                <>
                    <div className="deliveryInstructionsContainer">
                        <TextAreaField
                            wrapperClass="deliveryInstructions"
                            placeHolder="Delivery Instructions / Access Codes"
                            value={checkoutData.deliveryNotes}
                            onChange={handleDeliveryInfoData}
                            name="deliveryNotes"
                            id="delivery_notes"
                        />
                    </div>

                    <div className="nextDeliveryDropdownContainer">
                        <DropdownComponent onSelect={handleFirstDeliveryDate} />
                    </div>
                </>
            )}
        </div>
    );
};

export default DeliveryInfo;
