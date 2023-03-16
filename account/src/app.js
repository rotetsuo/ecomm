import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';

import db from './config/dbConnect.js';
import routes from './routes/index.js';
import './helpers/authLocalStrategy.js';

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('Conexão bem sucedida');
});

dotenv.config();

const app = express();
app.use(express.json());
app.use(passport.initialize());

routes(app);

export default app;