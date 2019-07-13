const CryptoJS = require('crypto-js');
const express = require('express');
const credentials = require('./credentials/credentials.js');
const request = require('request');
const cors = require('cors');

const app = express();

const queryBody = 'grant_type=client_credentials';

//CORS set up for the specific client - port 3000
const corsOption = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

app.get('/', (req, res) => {res.send('TEST')})
app.get('/getToken', cors(corsOption), (req, res) => {
  request({
    url: 'https://accounts.spotify.com/api/token',
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(`${credentials.client_id}:${credentials.client_secret}`)),
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': queryBody.length,
    },
    body: queryBody,
  }, (error, response, data) => {
    console.log('data', data)
    res.end(data)
  })
})

app.listen(3001)