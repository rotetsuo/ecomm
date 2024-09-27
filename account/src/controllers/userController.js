import userModel from '../models/user.js';
import { passwordHash } from '../helpers/bcryptHash.js';
import { createToken } from '../helpers/jwtToken.js';

const usersController = {
  create: async (req, res) => {
    try {
      const { senha } = req.body;
      const senhaHash = await passwordHash(senha);
      const newUser = { ...req.body, senha: senhaHash}
      const newUserCreated = await userModel.create(newUser);

      return res.status(201).json(newUserCreated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  getAll: async (_req, res) => {
    try {
      const users = await userModel.find();

      if (!users) {
        throw new Error('Usuários não encontrados');
      }

      return res.status(200).json(users);
    } catch (error) {
      if (error.message === 'Usuários não encontrados') {
        return res.status(404).json(error.message);
      }

      return res.status(500).json(error.message);
    }
  },

  login: async (req, res) => {
    try {
      const { id } = req.user;
      const token = createToken(id);

      res.status(204).set('Authorization', token).send();
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
}

export default usersController;