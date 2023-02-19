import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import HttpException from '../exception/HttpException';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const bearerHeader = req.headers['authorization'];
  if (!bearerHeader) {
    throw new HttpException(403, 'Access denied');
  }
  // @ts-ignore
  const bearer: string[] = bearerHeader.split(' ');
  if (bearer.length < 2) {
    throw new HttpException(400, 'Kindly check the format of your Authorization')
  };

  const bearerToken = bearer[1];
  // @ts-ignore
  req.merchant = undefined;
  if (bearerToken) {
    // @ts-ignore
    jwt.verify(bearerToken, process.env.JWT_SECRET, (error, payload) => {
      if (error) {
        throw new HttpException(400, 'Invalid authentication token')
      } else {
        // @ts-ignore
        req.merchant = payload;
        next();
      }
    });
  }
};

export default verifyToken;