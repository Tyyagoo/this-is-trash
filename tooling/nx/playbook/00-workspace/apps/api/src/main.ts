/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

import { API_URL } from '@00-workspace/config';
import { MessageResponse } from '@00-workspace/types';

const app = express();

app.get(API_URL, (req, res) => {
  const msg: MessageResponse = { message: 'Welcome to api!' };
  res.send(msg);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}${API_URL}`);
});
server.on('error', console.error);
