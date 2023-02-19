import { NextFunction, Request, Response } from 'express';

import HttpException from '../exception/HttpException';
import { IMerchantDTO } from '../model/merchant.model';
import MerchantService from '../services/MerchantService';

class MerchantController {

    static async getMerchantById(req: Request, res: Response) {
        const { id } = req.params;

        const merchant = await MerchantService.getMerchantById(id);
        if(!merchant) {
           throw new HttpException(404, 'Merchant does not exist')
        };
      
        res.status(200).json(
            merchant
        );

    }

    static async updateMerchantById(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        const payload: IMerchantDTO = req.body
    
        const merchant =  await MerchantService.updateMerchantById(id, payload);
    
        if(!merchant) {
          throw new HttpException(400, 'Merchant was not updated')
        };
    
        res.status(200).json(
          merchant
        );
    }

}

export default MerchantController;