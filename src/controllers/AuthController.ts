import { Request, Response, NextFunction } from 'express';
import HttpException from '../exception/HttpException';
import comparePassword from '../helpers/comparePassword';

import generateToken from '../helpers/generateToken';
import { IMerchantDTO } from '../model/merchant.model';
import AuthService from '../services/AuthService';

class AuthController {
    static async signup(req: Request, res: Response, next: NextFunction) {
        try {
          const merchant: IMerchantDTO = req.body;

          if (!(merchant.password && merchant.email)) {
            throw new HttpException(400,'Email and password are required' );
          };

          const createdMerchant = await AuthService.signup(merchant);
          const token = generateToken(createdMerchant);
          res.status(201).json(
            {
              merchant: createdMerchant,
              token
            }
          );
    
        } catch (error) {
          next(error)
        };
      };

      static async login(req: Request, res: Response, next: NextFunction) {

        try {
          const { email, password } = req.body;
    
          if (!(email && password)) {
            throw new HttpException(400, 'Please enter your username and/or password.')
          };
    
    
          const existingMerchant = await AuthService.login(email);
    
          if (!existingMerchant) {
            throw new HttpException(404, 'Merchant does not exist.')
          };
    
          const loggedInMerchant = {
            id: existingMerchant.dataValues.id,
            businessName: existingMerchant.dataValues.businessName,
            phoneNumber: existingMerchant.dataValues.phoneNumber,
            email: existingMerchant.dataValues.email,
            address: existingMerchant.dataValues.address,
            logoUrl: existingMerchant.dataValues.logoUrl,
            workingHours: existingMerchant.dataValues.workingHours,
          };
          const storedHashedPassword = existingMerchant.dataValues.password;
          const passwordMatches = comparePassword(password, storedHashedPassword);
          if (passwordMatches) {
            res.status(200).json({
              message: 'successful',
              merchant: loggedInMerchant,
              token: generateToken(loggedInMerchant)
            });
    
          } else {
            throw new HttpException(401, 'Either password or email is incorrect.')
          };
    
        } catch (error) {
          next(error);
        }
      };
}

export default AuthController;