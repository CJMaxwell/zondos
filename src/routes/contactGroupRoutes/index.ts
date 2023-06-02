import { Router } from 'express';

import ContactGroupController from '../../controllers/ContactGroupController';
import verifyToken from '../../middleware/verifyToken';


const contactGroupRoutes = Router();
/**
 * @swagger
 * /merchants/{merchantId}/contact-groups:
 *   post:
 *     summary: Create a new contact group
 *     description: Creates a new contact group with the given ID and name
 *     tags:
 *       - Contact Group
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
 *               title:
 *                 type: string
 *                 example: Zonal District
 *               contacts:
 *                 type: array
 *                 items:
 *                  type: string
 *                  
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
 *               contactGroup:
 *                type: object
 *                properties:
 *                 id:
 *                  type: string
 *                 title:
 *                  type: string
 *                 merchantId:
 *                  type: string
 *                 contacts:
 *                  type: array
 *                  items:
 *                      type: string
 *                 updatedAt:
 *                  type: string
 *                 createdAt:
 *                  type: string
 */
contactGroupRoutes.post('/merchants/:merchantId/contact-groups', verifyToken, ContactGroupController.createContactGroup);
/**
 * @swagger
 * /merchants/{merchantId}/contact-groups:
 *   get:
 *     summary: Gets a list of contact groups
 *     description: Gets a list of contact groups for a specified merchant
 *     tags:
 *       - Contact Group
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
 *               contactGroups:
 *                type: array
 *                items:
 *                 type: object
 *                 properties:
 *                  id:
 *                   type: string
 *                  title:
 *                   type: string
 *                  merchantId:
 *                   type: string
 *                  contacts:
 *                   type: array
 *                   items:
 *                      type: string
 *                  updatedAt:
 *                   type: string
 *                  createdAt:
 *                   type: string
 */
contactGroupRoutes.get('/merchants/:merchantId/contact-groups', verifyToken,ContactGroupController.getAllContactGroupsByMerchantId);
/**
 * @swagger
 * /merchants/{merchantId}/contact-groups/{id}:
 *   get:
 *     summary: Gets a contact group
 *     description: Get a contact group for a specified merchant
 *     tags:
 *       - Contact Group
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
 *               contactGroup:
 *                type: object
 *                properties:
 *                 id:
 *                  type: string
 *                 title:
 *                  type: string
 *                 merchantId:
 *                  type: string
 *                 contacts:
 *                  type: array
 *                  items:
 *                      type: string
 *                 updatedAt:
 *                  type: string
 *                 createdAt:
 *                  type: string
 */
contactGroupRoutes.get('/merchants/:merchantId/contact-groups/:id', verifyToken,ContactGroupController.getContactGroupById);
/**
 * @swagger
 * /merchants/{merchantId}/contact-groups/{id}:
 *   put:
 *     summary: Updates a contact group
 *     description: Updates a contact group for a specified merchant and Id
 *     tags:
 *       - Contact Group
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
 *               title:
 *                 type: string
 *                 example: Zonal District
 *               contacts:
 *                 type: array
 *                 items:
 *                  type: string
 * 
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
 *               contactGroup:
 *                type: object
 *                properties:
 *                 id:
 *                  type: string
 *                 title:
 *                  type: string
 *                 merchantId:
 *                  type: string
 *                 contacts:
 *                  type: array
 *                  items:
 *                      type: string
 *                 updatedAt:
 *                  type: string
 *                 createdAt:
 *                  type: string
 */
contactGroupRoutes.put('/merchants/:merchantId/contact-groups/:id', verifyToken,ContactGroupController.updateContactGroupById);

export default contactGroupRoutes;