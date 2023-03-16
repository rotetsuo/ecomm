import bcrypt from 'bcryptjs';

const passwordHash = async (password) => {
  const salt = bcrypt.genSaltSync(13);
  return bcrypt.hashSync(password, salt);
};

const verifyPassword = (password, passwordHash) => {
  const verify = bcrypt.compareSync(password, passwordHash);
  return verify
}

export {
  passwordHash,
  verifyPassword,
};
