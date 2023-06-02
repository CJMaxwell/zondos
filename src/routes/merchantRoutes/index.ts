import { Router } from 'express';
import MerchantController from '../../controllers/MerchantController';
import verifyToken from '../../middleware/verifyToken';


const merchantRoutes = Router();
/**
 * @swagger
 * /merchants/{id}:
 *   get:
 *     summary: Gets a specific merchant
 *     description: Gets a specified merchant
 *     tags:
 *       - Merchant
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 id:
 *                  type: string
 *                 businessName:
 *                  type: string
 *                 phoneNumber:
 *                  type: string
 *                 address:
 *                  type: string
 *                 email:
 *                  type: string
 *                 logoUrl:
 *                  type: string
 *                 workingHours:
 *                  type: object
 *                  properties:
 *                   Monday: 
 *                    type: string
 *                   Tuesday: 
 *                    type: string 
 *                   Wednesday: 
 *                    type: string 
 *                   Thursday: 
 *                    type: string 
 *                   Friday: 
 *                    type: string 
 *                 updatedAt:
 *                  type: string
 *                 createdAt:
 *                  type: string
 *       400:
 *         description: Bad request
 *         content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               message:
 *                type: string
 *       404:
 *         description: Not found
 *         content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               message:
 *                type: string
 */
merchantRoutes.get('/merchants/:id', MerchantController.getMerchantById);
/**
 * @swagger
 * /merchants/{id}:
 *   put:
 *     summary: Gets a specific merchant
 *     description: Gets a specified merchant
 *     tags:
 *       - Merchant
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
 *               businessName:
 *                 type: string
 *                 example: ABC Limited
 *               email:
 *                 type: string
 *                 example: zondos.tech@gmail.com
 *                 required: true
 *               phoneNumber:
 *                 type: string
 *                 example: 08060855331
 *               address:
 *                 type: string
 *                 example: Lagos, Nigeria
 *               logoUrl:
 *                 type: string
 *                 example: https://zondos.herokuapp.com
 *               workingHours:
 *                 type: object
 *                 properties:
 *                  Monday: 
 *                   type: string 
 *                   example: 9 am - 5 pm
 *                  Tuesday: 
 *                   type: string 
 *                   example: 9 am - 5 pm
 *                  Wednesday: 
 *                   type: string 
 *                   example: 9 am - 5 pm
 *                  Thursday: 
 *                   type: string 
 *                   example: 9 am - 5 pm
 *                  Friday: 
 *                   type: string 
 *                   example: 9 am - 5 pm
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 id:
 *                  type: string
 *                 businessName:
 *                  type: string
 *                 phoneNumber:
 *                  type: string
 *                 address:
 *                  type: string
 *                 email:
 *                  type: string
 *                 logoUrl:
 *                  type: string
 *                 workingHours:
 *                  type: object
 *                  properties:
 *                   Monday: 
 *                    type: string
 *                   Tuesday: 
 *                    type: string 
 *                   Wednesday: 
 *                    type: string 
 *                   Thursday: 
 *                    type: string 
 *                   Friday: 
 *                    type: string 
 *                 updatedAt:
 *                  type: string
 *                 createdAt:
 *                  type: string
 *       400:
 *         description: Bad request
 *         content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               message:
 *                type: string
 *       404:
 *         description: Not found
 *         content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               message:
 *                type: string
 */
merchantRoutes.put('/merchants/:id', verifyToken, MerchantController.updateMerchantById);

export default merchantRoutes;