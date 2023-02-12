import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const bearerHeader = req.headers['Authorization'];
  if (!bearerHeader) {
    res.status(403).json({
      message: 'Access denied'
    });
    return;
  }
  // @ts-ignore
  const bearer: string[] = bearerHeader.split(' ');
  if (bearer.length < 2) {
    res.status(400).json({
      message: 'Kindly check the format of your Authorization'
    });
    return;
  };

  const bearerToken = bearer[1];
  // @ts-ignore
  req.user = undefined;
  if (bearerToken) {
    // @ts-ignore
    jwt.verify(bearerToken, process.env.JWT_SECRET, (error, payload) => {
      if (error) {
        res.status(400).json({
          message: 'Invalid authentication token',
        });
      } else {
        // @ts-ignore
        req.merchantId = payload;
        next();
      }
    });
  }
};

export default verifyToken;