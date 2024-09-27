import { Router } from 'express';

import usersController from '../controllers/usersController.js';
import localStrategyMiddleware from '../middlewares/localStrategyMiddleware.js';
import bearerMiddleware from '../middlewares/bearerMiddleware.js';

const usersRouter = Router();

usersRouter
  .get('/accounts', bearerMiddleware, usersController.getAll)
  .post('/accounts/login', localStrategyMiddleware, usersController.login)
  .post('/accounts', usersController.create)

export default usersRouter;