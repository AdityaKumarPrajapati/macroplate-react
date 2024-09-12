export const getNextMondays = () => {
    const mondays = [];
    const today = new Date();
    const dayOfWeek = today.getDay();
    let nextMonday = new Date(today);
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    // Check if current time is after Wednesday 12 noon
    if (dayOfWeek > 3 || (dayOfWeek === 3 && (hours > 12 || (hours === 12 && minutes > 0)))) {
        // Move to the Monday after the next Monday
        nextMonday.setDate(today.getDate() + (8 - dayOfWeek) % 7 + 7);
    } else {
        // Calculate the number of days until the next Monday
        if (dayOfWeek === 0) dayOfWeek = 7; // Sunday is considered as day 0 for the calculation
        const daysUntilMonday = (8 - dayOfWeek) % 7;
        nextMonday.setDate(today.getDate() + daysUntilMonday);
    }

    // Get the next 5 Mondays
    for (let i = 0; i < 5; i++) {
        const mondayDate = new Date(nextMonday);
        mondayDate.setDate(nextMonday.getDate() + i * 7);
        mondays.push(mondayDate);
    }
    return mondays;
};

export const formatDate = (date) => {
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

export const formatDateWithYear = (date) => {
    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};