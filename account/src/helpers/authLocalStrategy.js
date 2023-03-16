import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import userModel from '../models/user.js';
import { verifyPassword } from './bcryptHash.js';

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha',
        session: false
    }, async (email, senha, done) => {
        try {
            const user = await userModel.findOne({ email });
            if (!user) throw new Error('Nenhum usuário encontrado');

            if (!verifyPassword(senha, user.senha)) {
              throw new Error('Email ou senha inválidos');
            }

            done(null, user);
        } catch (error) {
            done(error);
        }
    })
);