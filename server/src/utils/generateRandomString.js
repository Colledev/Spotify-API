const generateRandomString = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';
    for (let i = 0; i < 16; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    } return randomString;
}

module.exports = generateRandomString;