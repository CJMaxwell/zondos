import { Router } from 'express';
import SmsController from '../../controllers/SMSController';
import verifyToken from '../../middleware/verifyToken';


const smsRoutes = Router();
/**
 * @swagger
 * /merchants/:id/sms:
 *   post:
 *     summary: Sends SMS to Merchant's Contacts.
 *     tags:
 *       - SMS
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phoneNumber:
 *                 type: string
 *                 example: 2348187604547
 *               message:
 *                 type: string
 *                 example: Hello from Zondos.
 *               dnd:
 *                 type: integer
 *                 example: 1
 *                 required: true
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               data:
 *                type: object
 *                properties:
 *                 id:
 *                  type: string
 *                 status:
 *                  type: string
 *                 message:
 *                  type: string
 *                 messageId:
 *                  type: string
 *                 cost:
 *                  type: string
 *                 currency:
 *                  type: string
 *                 gatewayUsed: 
 *                  type: string
 *                 merchantId: 
 *                  type: string 
 *                 contactId: 
 *                  type: string 
 *                 updatedAt:
 *                  type: string
 *                 createdAt:
 *                  type: string
 *               token:
 *                type: string
 *       400:
 *         description: Bad request
 *         content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               message:
 *                type: string
 * 
*/
smsRoutes.post('/merchants/:id/sms', SmsController.sendSMS)

export default smsRoutes;