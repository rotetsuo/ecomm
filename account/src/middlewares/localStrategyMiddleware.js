import passport from 'passport';

const localStrategyMiddleware = (req, res, next) => {
  passport.authenticate(
      'local',
      { session: false },
      (err, user) => {
        if (err) {
          return res.status(400).json({ message: 'Usuário ou senha inválidos' });
        }
        if (!user) {
          return res.status(400).json({ message: 'Usuário não encontrado' });
        }
        req.user = user;

        return next();
      }
  )(req, res, next);
};

export default localStrategyMiddleware;