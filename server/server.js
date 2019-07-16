const CryptoJS = require('crypto-js');
const express = require('express');
const credentials = require('./credentials/credentials.js');
const request = require('request');
const cors = require('cors');

const app = express();

const queryBody = 'grant_type=client_credentials';
let currentToken = null;
//CORS set up for the specific client - port 3000
const corsOption = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

const hexEncode = function(str) {
  return str.split(' ').join('%20')
}

app.get('/', (req, res) => {res.send('TEST')})
app.get('/getToken', cors(corsOption), (req, res) => {
  console.log('query test', req.query)
  const query = req.query.query;
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
    currentToken = JSON.parse(data).access_token
    console.log('currtoken', currentToken)
    //res.send(data)
    console.log('myquery:', query, 'encoded', hexEncode(query))
    return request({
      url: `https://api.spotify.com/v1/search?q=${hexEncode(query)}&type=track,album,artist,playlist`,
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + currentToken,
      }
    }, (e, r, d) => {
      //console.log('final data', d)
      res.end(d)
    })
  })
})
// app.get('/query', cors(corsOption), (req, res) => {
//   request({
//     url: 'https://api.spotify.com/v1/search',
//     method: 'GET',
//     headers: {
//       'Authorization': 'Bearer ' + CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(`${credentials.client_id}:${credentials.client_secret}`)),
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Content-Length': queryBody.length,
//     },
//     body: queryBody,
//   }, (error, response, data) => {
//     console.log('data', data)
//     res.end(data)
//   })
// })

app.listen(3001)