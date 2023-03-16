import passport from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';

import userModel from '../models/user.js';
import { verifyToken } from './jwtToken.js'

passport.use(
  new BearerStrategy(
    async (token, done) => {
      try {
        const payload = verifyToken(token);

        const user = await userModel.findOne({ id: payload.id });

        done(null, user, { token });
      } catch (error) {
        done(error);
      }
    },
  ),
);