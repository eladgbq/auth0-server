const loginHistoryAccess = require('../data-access/loginHistory.access');

function addLogin(userName, date) {
    return loginHistoryAccess.post(userName, date);
}

async function getLoginHistoryForUser(userName) {
    let user = await loginHistoryAccess.get(userName);
    return user.dates;
}

module.exports = {
    addLogin,
    getLoginHistoryForUser
}