const loginRec = require('../models/loginRec.model');

async function post(userName, date) {
    return await loginRec.updateOne({ _id: userName }, { $push: { dates: date } }, { upsert: true });
}

async function get(userName) {
    return await loginRec.findOne({ _id: userName }, { dates: { '$slice': -30 } });
}

module.exports = {
    post,
    get
}