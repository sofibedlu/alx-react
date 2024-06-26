const getFullYear = () => new Date().getFullYear();
const getFooterCopy = (isIndex) => {
    if(isIndex) {
        return 'Holberton School';
    } else {
        return 'Holberton School main dashboard';
    }
}

const getLatestNotification = () => {
    return '<strong>Urgent requirement</strong> - complete by EOD';
}

export {getFullYear, getFooterCopy, getLatestNotification};