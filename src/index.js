const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect(require('./conf').dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});
const loginHistory = require('./routes/loginHistory.route');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/loginHistory', loginHistory)

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
})