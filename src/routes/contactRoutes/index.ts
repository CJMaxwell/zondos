import { Router } from 'express';
import ContactController from '../../controllers/ContactController';
import verifyToken from '../../middleware/verifyToken';


const contactRoutes = Router();
/**
 * @swagger
 * /merchants/:merchantId/contacts:
 *   post:
 *     summary: Create a Merchant's Contact.
 *     tags:
 *       - Contact
 *     parameters:
 *       - name: merchantId
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
 *               firstName:
 *                 type: string
 *                 example: ABC
 *               lastName:
 *                 type: string
 *                 example: James
 *               phoneNumber:
 *                 type: string
 *                 example: 08056789012
 *                 required: true
 *               dob:
 *                 type: string
 *                 example: 1900-10-22
 *               email:
 *                 type: string
 *                 example: os@gmail.com
 *                 required: true
 *               gender:
 *                 type: string
 *                 example: Male
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               firstName:
 *                 type: string
 *                 example: ABC
 *               lastName:
 *                 type: string
 *                 example: James
 *               phoneNumber:
 *                 type: string
 *                 example: 08056789012
 *                 required: true
 *               dob:
 *                 type: string
 *                 example: 1900-10-22
 *               email:
 *                 type: string
 *                 example: os@gmail.com
 *                 required: true
 *               gender:
 *                 type: string
 *                 example: Male
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
contactRoutes.post('/merchants/:merchantId/contacts', verifyToken, ContactController.createContact);
/**
 * @swagger
 * /merchants/:merchantId/contacts:
 *   get:
 *     summary: Gets a list of contacts for a specified Merchant.
 *     tags:
 *       - Contact
 *     parameters:
 *       - name: merchantId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *               contact:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                       firstName:
 *                          type: string
 *                          example: ABC
 *                       lastName:
 *                          type: string
 *                          example: James
 *                       phoneNumber:
 *                          type: string
 *                          example: 08056789012
 *                       dob:
 *                          type: string
 *                          example: 1900-10-22
 *                       email:
 *                          type: string
 *                          example: os@gmail.com
 *                       gender:
 *                          type: string
 *                          example: Male
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
contactRoutes.get('/merchants/:merchantId/contacts', verifyToken,ContactController.getAllContactsByMerchantId);
/**
 * @swagger
 * /merchants/:merchantId/contacts/:id:
 *   get:
 *     summary: Gets a Merchant's Contact.
 *     tags:
 *       - Contact
 *     parameters:
 *       - name: merchantId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *               contact:
 *                      type: object
 *                      properties:
 *                       firstName:
 *                          type: string
 *                          example: ABC
 *                       lastName:
 *                          type: string
 *                          example: James
 *                       phoneNumber:
 *                          type: string
 *                          example: 08056789012
 *                       dob:
 *                          type: string
 *                          example: 1900-10-22
 *                       email:
 *                          type: string
 *                          example: os@gmail.com
 *                       gender:
 *                          type: string
 *                          example: Male
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
contactRoutes.get('/merchants/:merchantId/contacts/:id', verifyToken,ContactController.getContactById);
/**
 * @swagger
 * /merchants/:merchantId/contacts/:id:
 *   put:
 *     summary: Updates a Merchant's Contact.
 *     tags:
 *       - Contact
 *     parameters:
 *       - name: merchantId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
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
 *               firstName:
 *                 type: string
 *                 example: ABC
 *               lastName:
 *                 type: string
 *                 example: James
 *               phoneNumber:
 *                 type: string
 *                 example: 08056789012
 *                 required: true
 *               dob:
 *                 type: string
 *                 example: 1900-10-22
 *               email:
 *                 type: string
 *                 example: os@gmail.com
 *                 required: true
 *               gender:
 *                 type: string
 *                 example: Male
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *               contact:
 *                      type: object
 *                      properties:
 *                       firstName:
 *                          type: string
 *                          example: ABC
 *                       lastName:
 *                          type: string
 *                          example: James
 *                       phoneNumber:
 *                          type: string
 *                          example: 08056789012
 *                       dob:
 *                          type: string
 *                          example: 1900-10-22
 *                       email:
 *                          type: string
 *                          example: os@gmail.com
 *                       gender:
 *                          type: string
 *                          example: Male
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
contactRoutes.put('/merchants/:merchantId/contacts/:id', verifyToken,ContactController.updateContactById);
/**
 * @swagger
 * /merchants/:merchantId/group-contacts:
 *   post:
 *     summary: Adds a contact to a group for a specified Merchant.
 *     tags:
 *       - Contact
 *     parameters:
 *       - name: merchantId
 *         in: path
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               contactId:
 *                 type: string
 *                 example: dc08d104-f150-4366-91ba-2e79bff82a30
 *               contactGroupId:
 *                 type: string
 *                 example: e07398fb-d13c-42e4-bcd1-b33debd9d641
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               message:
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
contactRoutes.post('/merchants/:merchantId/group-contacts', verifyToken,ContactController.addContactToGroup);

export default contactRoutes;