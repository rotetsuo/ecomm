import passport from 'passport';

const bearerMiddleware = (req, res, next) => {
  passport.authenticate(
    'bearer',
    { session: false },
    (err, user, info) => {
      if (err) {
        return res.status(400).json({ message: 'Invalid token.' });
    }
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.token = info.token;
    req.user = user;

    return next();
  },
)(req, res, next);
};

export default bearerMiddleware;