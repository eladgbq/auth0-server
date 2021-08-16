const loginHistoryService = require('../services/loginHistory.service');

async function addLogin(req, res, next) {
    let userName = req.body.userName;
    let date = req.body.date;
    try {
        res.send(await loginHistoryService.addLogin(userName, date));
    } catch (err) {
        next(err);
    }
}

async function getLoginHistoryForUser(req, res, next) {
    let userName = req.params.userName;
    try {
        res.send(await loginHistoryService.getLoginHistoryForUser(userName));
    } catch (err) {
        next(err);
    }
}

module.exports = {
    addLogin,
    getLoginHistoryForUser
}