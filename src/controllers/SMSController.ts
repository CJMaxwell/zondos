import { NextFunction, Request, Response } from "express";
import axios from "axios";
import { config } from 'dotenv';

import { SMSAPIResponse } from "../model/smsAPIResponse.model";
import SMSService from '../services/SMSService';

config();

class SmsController {

    static async sendSMS(req: Request, res: Response, next: NextFunction) {

        const {phoneNumber, message, dnd, contactId} = req.body;
        const { id: merchantId } = req.params;
        try {
            const url = `${process.env.BULKSMSBASE_URL}/sms/create?api_token=${process.env.BULKSMSAPI_TOKEN}&from=BulkSMS.ng&to=${phoneNumber}&body=${message}&dnd=${dnd}`;
            const response = await axios.get(url);

            const { data }: SMSAPIResponse = response.data;
            const msg = await SMSService.saveSentSMS(data, merchantId,contactId);
            
            if (msg.status == 'success') {
                res.status(200).json({
                    data
                });
            }
            
        } catch (error) {
            // logger.
            next(error);
            
        }
    }

}


export default SmsController;