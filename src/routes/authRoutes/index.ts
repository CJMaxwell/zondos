import { Router } from 'express';
import AuthController from '../../controllers/AuthController';
// import verifyToken from '../../middleware/verifyToken';


const authRoutes = Router();

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Create a Merchant.
 *     tags:
 *       - Authorization
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
 *               password:
 *                 type: string
 *                 example: Work3r
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
 * 
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               mechant:
 *                type: object
 *                properties:
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
*/
authRoutes.post('/auth/signup', AuthController.signup);
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Logs in a Merchant.
 *     tags:
 *       - Authorization
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: zondos.tech@gmail.com
 *                 required: true
 *               password:
 *                type: string
 *                example: Work3r
 *                required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *               mechant:
 *                type: object
 *                properties:
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
 *       404:
 *         description: Not found
 *         content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               message:
 *                type: string
 * 
*/
authRoutes.post('/auth/login', AuthController.login);

authRoutes.post('/auth/sendOTP', AuthController.sendOTP);
authRoutes.post('/auth/verifyOTP', AuthController.verifyOTP);

export default authRoutes;