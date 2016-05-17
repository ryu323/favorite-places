const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const AddressController = require('./controllers/AddressController');

const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/', express.static(path.join(__dirname, '..', 'build')));
app.post('/api/addAddress', AddressController.addAddress);


app.listen(port, () => {
  console.log("Listening on port: ", port)
});
