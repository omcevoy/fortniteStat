const express = require('express');
const request = require('request');
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config({ path: "../.env" });
const app = express();

const API_KEY = process.env.FT_API_KEY
const PORT = process.env.PORT || 5000

//If in production, change origin address to api address
app.use(
    cors({
      origin: "http://localhost:5000"
    })
  );
app.use(morgan('tiny'));

app.get('/data/:username', (req, res, next) => {
    console.log('request recieved');
    console.log(req.params.username);
    request.get({ 
                    headers : {
                        'content-type' : 'application/json',
                        'TRN-Api-Key': API_KEY
                        },
                    url : `https://api.fortnitetracker.com/v1/profile/gamepad/${req.params.username}`
                        },
                    function (error, response, body) {
                        res.header('Access-Control-Allow-Origin', "*");
                        res.send(body);
                });
    });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));