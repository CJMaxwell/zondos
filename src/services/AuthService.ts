import { v4 as uuidv4 } from 'uuid';
import HttpException from '../exception/HttpException';

import hashPassword from '../helpers/hashPassword';
import { IMerchant, IMerchantDTO } from "../model/merchant.model";
const { Merchant } = require('../../models');


class AuthService {
    static async signup(merchant: IMerchantDTO): Promise<IMerchant> {

        const { businessName, email, phoneNumber, address, logoUrl, password, workingHours } = merchant;

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
            throw new HttpException(409, 'Merchant already exists.')
        };

        const plainMerchant = newMerchant.get({ plain: true });
        delete plainMerchant.password;

        return plainMerchant;
    }

    static async login(email: string) {

        const existingMerchant = await Merchant.findOne({
            where: {
              email
            }
        });

        return existingMerchant;
    }
}

export default AuthService;