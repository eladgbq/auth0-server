const loginHistoryService = require('../services/loginHistory.service');

async function addLogin(req, res) {
    let userName = req.body.userName;
    let date = req.body.date;
    res.send(await loginHistoryService.addLogin(userName, date));
}

async function getLoginHistoryForUser(req, res) {
    let userName = req.params.userName;
    res.send(await loginHistoryService.getLoginHistoryForUser(userName));
}

module.exports = {
    addLogin,
    getLoginHistoryForUser
}