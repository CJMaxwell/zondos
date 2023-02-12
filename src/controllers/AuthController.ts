import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import hashPassword from '../helpers/hashPassword';
import generateToken from '../helpers/generateToken';
import { IMerchant } from '../model/merchant.model';
import comparePassword from '../helpers/comparePassword';
const { Merchant } = require('../../models');

class AuthController {
    static async signup(req: Request, res: Response) {
        try {
          const { businessName, email, phoneNumber, address, logoUrl, password, workingHours } = req.body;
          if (!(password && email)) {
            res.status(400).json({
              message: 'Email and password are required'
            });
            return;
          };
          const hashedPassword = await hashPassword(password);
    
          const [newMerchant, created] = await Merchant.findOrCreate({
            where: {
              email
            },
            defaults: {
              id: uuidv4(),
              businessName,
              phoneNumber,
              address,
              email,
              logoUrl,
              workingHours,
              password: hashedPassword,
            },
          });
    
          if (!created) {
            res.status(409).json({
              message: "Merchant with this email already exists."
            });
            return;
          };
    
          const token = generateToken(newMerchant as IMerchant);
    
          const plainMerchant = newMerchant.get({ plain: true });
          delete plainMerchant.password;
    
          res.status(201).json(
            {
              merchant: plainMerchant,
              token
            }
          );
    
        } catch (error) {
          res.status(500).json({
            // @ts-ignore
            message: error.message
          });
        };
      };

      static async login(req: Request, res: Response) {

        try {
          const { email, password } = req.body;
    
          if (!(email && password)) {
            res.status(400).json({
              message: 'Please enter your username and/or password.'
            });
            return;
          };
    
    
          const existingMerchant = await Merchant.findOne({
            where: {
              email
            }
          });
    
          if (!existingMerchant) {
            res.status(404).json({
              message: 'Merchant does not exist.'
            });
            return;
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
            res.status(401).json({
              message: 'Either password or email is incorrect.'
            });
          };
    
        } catch (error) {
          res.status(500).json({
            // @ts-ignore
            message: error.errors
          });
        }
      };
}

export default AuthController;