import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'jwt_secret';

const JWT_CONFIG = {
  expiresIn: '1d',
  algorithm: 'HS256',
}

const createToken = (id) => {
  const token = jwt.sign({ id }, SECRET, JWT_CONFIG);
  return token;
};

const verifyToken = (token) => {
  const payload = jwt.verify(token, SECRET);
  return payload;
};

export {
  createToken,
  verifyToken,
};
