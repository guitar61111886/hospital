// const { response } = require('express');
const express = require('express'),
    dboperations = require('./dbFiles/dboperations'),
    cors = require('cors');

// const API_PORT = process.env.PORT || 3000;
var port = process.env.PORT || 3000;
const app = express();

let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// app.post('/api', function (req, res) {
//     console.log('called');
//     res.send({ result: 'go away' });
// });
// app.post('/hello', function (req, res) {
//     console.log('called');
//     res.send({ result: 'OMG HI' });
// });

app.get('/', function (req, res) {
    res.send('Hello World!');
  });

dboperations.getDatacustomer().then(res => {
    console.log(res.recordset);
})

// app.listen(API_PORT, () => console.log('listening on port ${API_PORT}'));
app.listen(port);