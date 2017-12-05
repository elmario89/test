export function formatDate(date) {
    const names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dateObj = new Date(date);
    const month = names[dateObj.getMonth() + 1]; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const finalDate = `${day} ${month}, ${year}`;

    return finalDate;
}