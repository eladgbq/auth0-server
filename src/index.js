const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect(require('./conf').dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});
const loginHistory = require('./routes/loginHistory.route');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

const PORT = process.env.PORT || 3001;

const app = express();

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-6twpx43d.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://login-history-server.herokuapp.com',
  issuer: 'https://dev-6twpx43d.us.auth0.com/',
  algorithms: ['RS256']
});

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(jwtCheck);

app.use('/loginHistory', loginHistory)

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
})