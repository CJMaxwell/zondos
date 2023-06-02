import { Router } from 'express';
import verifyToken from '../../middleware/verifyToken';
import EmailController from '../../controllers/EmailController';


const emailRoutes = Router();
/**
 * @swagger
 * /merchants/{id}/email:
 *   post:
 *     summary: Sends emails to Merchant's Contacts.
 *     tags:
 *       - Email
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
 *               from:
 *                 type: string
 *                 example: zondos@selfserviceib.com
 *               to:
 *                 type: string
 *                 example: zondos.tech@gmail.com
 *               subject:
 *                 type: string
 *                 example: Test from Zondos API
 *                 required: true
 *               html:
 *                 type: string
 *                 example: <p>This is the first call from Zondos API.</p>
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               bulkId:
 *                type: string
 *               messages:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                       to:
 *                          type: string
 *                          example: ABC
 *                       messageId:
 *                          type: string
 *                          example: James
 *                       status:
 *                          type: object
 *                          properties:
 *                              groupId:
 *                                  type: integer
 *                              groupName:
 *                                  type: string
 *                              id:
 *                                  type: integer
 *                              name:
 *                                  type: string
 *                              description:
 *                                  type: string
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
emailRoutes.post('/merchants/:id/email', EmailController.sendEmail)

export default emailRoutes;