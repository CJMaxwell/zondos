import { Router } from 'express';
import SmsController from '../../controllers/SMSController';
import verifyToken from '../../middleware/verifyToken';


const smsRoutes = Router();

smsRoutes.post('/merchants/:id/sms', SmsController.sendSMS)

export default smsRoutes;