import bcrypt from 'bcryptjs';

const comparePassword = (password: string, hashedPassword: string) => bcrypt
  .compareSync(password, hashedPassword);

export default comparePassword;