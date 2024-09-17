import { basePlanAmount, addonPrice } from "../config/basePlanAmount";

export const getTotalAmount = ({ checkoutData }) => {
    let totalAmount = 0;

    // Base plan amount calculation
    if (checkoutData.vanityName) {
        totalAmount += mealPlanPrice({checkoutData})
    }

    // Add-on calculations
    if (checkoutData.snackProtein) {
        totalAmount += proteinSnackPrice({checkoutData})
    }

    if (checkoutData.proteinSmoothy) {
        totalAmount += proteinSmoothyPrice({checkoutData})
    }

    if (checkoutData.juice) {
        totalAmount += juicePrice({checkoutData})
    }

    if (checkoutData.coffee) {
        totalAmount += coffeePrice({checkoutData})
    }

    // Return the total amount formatted to always show two decimal places
    return totalAmount.toFixed(2);
}

export const mealPlanPrice = ({ checkoutData }) => {
    if (checkoutData.vanityName) {
       return (basePlanAmount[checkoutData.vanityName].price *
            (checkoutData.mealPerDay * checkoutData.programLength) / 100);
    }
}

export const proteinSnackPrice = ({ checkoutData }) => {
    if (checkoutData.snackProtein) {
        return (checkoutData.snackProtein * addonPrice.snackProtein.price *
            checkoutData.programLength / 100);
    }
}

export const proteinSmoothyPrice = ({ checkoutData }) => {
    if (checkoutData.proteinSmoothy) {
        return (checkoutData.proteinSmoothy * addonPrice.proteinSmoothy.price *
            checkoutData.programLength / 100);
    }
}

export const juicePrice = ({ checkoutData }) => {
    if (checkoutData.juice) {
        return (checkoutData.juice * addonPrice.juice.price *
            checkoutData.programLength / 100);
    }
}

export const coffeePrice = ({ checkoutData }) => {
    if (checkoutData.coffee) {
        return (checkoutData.coffee * addonPrice.coffee.price *
            checkoutData.programLength / 100);
    }
}

export const getTotalAmountWithDeliveryFeeAndDiscount = (subTotalAmount, programLength, dailyDeliveryFee, discount) => {
    return parseFloat(subTotalAmount) + (parseFloat(dailyDeliveryFee) * programLength);
}