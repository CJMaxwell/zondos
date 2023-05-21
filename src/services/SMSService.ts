import { v4 as uuidv4 } from 'uuid';
import HttpException from '../exception/HttpException';
import { responseData } from "../model/smsAPIResponse.model";
const { SMSTransaction } = require('../../models');
class SMSService {

    static async saveSentSMS(msg: responseData, merchantId: string) {
    
        const {status, message, message_id, cost, currency, gateway_used} = msg;

        const [SentMsg, created] = await SMSTransaction.findOrCreate({
            where: {
               messageId: message_id
            },
            defaults: {
              id: uuidv4(),
              status, message, 
              messageId: message_id, 
              cost, 
              currency, 
              gatewayUsed: gateway_used,
              merchantId
            },
          });

          if(!created) {
            throw new HttpException(409, 'Message already saved')
          }

          const plainMessage = SentMsg.get({ plain: true });
        
        return plainMessage;

    }

}


export default SMSService;