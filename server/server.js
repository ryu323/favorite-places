import express from 'express';
import path from 'path';

import bodyParser from 'body-parser';
import morgan from 'morgan';


import AddressController from './controllers/AddressController';


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


