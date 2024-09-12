import { basePlanAmount, addonPrice } from "../config/basePlanAmount";

export const getTotalAmount = ({ checkoutData }) => {
    let totalAmount = 0;

    // Base plan amount calculation
    if (checkoutData.vanityName) {
        totalAmount += (basePlanAmount[checkoutData.vanityName].price *
            (checkoutData.mealPerDay * checkoutData.programLength) / 100);
    }

    // Add-on calculations
    if (checkoutData.snackProtein) {
        totalAmount += (checkoutData.snackProtein * addonPrice.snackProtein.price *
            checkoutData.programLength / 100);
    }

    if (checkoutData.proteinSmoothy) {
        totalAmount += (checkoutData.proteinSmoothy * addonPrice.proteinSmoothy.price *
            checkoutData.programLength / 100);
    }

    if (checkoutData.juice) {
        totalAmount += (checkoutData.juice * addonPrice.juice.price *
            checkoutData.programLength / 100);
    }

    if (checkoutData.coffee) {
        totalAmount += (checkoutData.coffee * addonPrice.coffee.price *
            checkoutData.programLength / 100);
    }

    // Return the total amount formatted to always show two decimal places
    return totalAmount.toFixed(2);
}
