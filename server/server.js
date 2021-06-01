const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));


const MongoClient = require('mongodb').MongoClient;
// hide with dotenv: https://forum.freecodecamp.org/t/how-to-store-a-mongodb-username-and-password-persistently-using-dotenv/50994
const uri = temp;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});

require('./app/routes')(app, {});

app.listen(port, () => {  console.log('Listening on ' + port);});


