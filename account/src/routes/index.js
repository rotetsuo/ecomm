import usersRouter from './usersRoutes.js';

const routes = (app) => {
  app.route('/').get((_req, res) => {
    res.status(200).send('Ecomm Project')
  });

  app.use(
    usersRouter
  );
}

export default routes;