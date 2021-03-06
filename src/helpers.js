export function formatDate(date) {
    const names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dateObj = new Date(date);
    const month = names[dateObj.getMonth() + 1]; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    return `${day} ${month}, ${year}`;
}

export function splitParagraphs(text) {
    return text.split('\n').slice(0);
}
