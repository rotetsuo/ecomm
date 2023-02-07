import express from 'express'

import db from './src/config/dbConnect.js';
import routes from './src/routes/index.js';

db.on('error', cnosole.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
    console.log('Conectado com sucesso');
});

const app = express();
app.use(express.json());

routes(app)

export default app