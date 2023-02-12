import jwt from 'jsonwebtoken';

const generateToken = ({ id }: any) => jwt.sign(
  { id },
  // @ts-ignore
  process.env.JWT_SECRET,
  { expiresIn: process.env.JWT_EXPIRY },
);

export const generateResetPasswordToken = ({ id }: any) => jwt.sign(
  { id },
  // @ts-ignore
  process.env.RESET_PASSWORD_SECRET,
  { expiresIn: process.env.RESET_PASSWORD_EXPIRY },
);


export default generateToken;