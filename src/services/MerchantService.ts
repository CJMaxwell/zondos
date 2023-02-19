import HttpException from "../exception/HttpException";
import { IMerchant, IMerchantDTO } from "../model/merchant.model";
const { Merchant } = require('../../models');

class MerchantService {

    static async getMerchantById(id: string) {
        const merchant: IMerchant = await Merchant.findByPk(id);

        return merchant;
    };

    static async updateMerchantById(id: string, merchant: IMerchantDTO): Promise<IMerchant> {

        const [updated, updatedMerchant] = await Merchant.update(merchant, {
        where: {
            id
        },

        returning: true,

        });
      
        if(!updated) {
        throw new HttpException(400, 'Merchant was not updated');
        }
    
        return updatedMerchant
      

    };

   

}

export default MerchantService;