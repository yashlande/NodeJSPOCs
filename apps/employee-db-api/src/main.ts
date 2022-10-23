/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import { environment } from './environments/environment';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
// const bodyParser= require('body-parser')

const empRoutes = require('./routes/empRoutes');

const app = express();

mongoose.connect(environment.DATABASE_LOCAL, function (error) {
  // Do things once connected
  if (error) throw error;
});

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(empRoutes);

const port = environment.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
