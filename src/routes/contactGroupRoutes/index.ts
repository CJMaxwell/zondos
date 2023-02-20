import { Router } from 'express';

import ContactGroupController from '../../controllers/ContactGroupController';
import verifyToken from '../../middleware/verifyToken';


const contactGroupRoutes = Router();

contactGroupRoutes.post('/merchants/:merchantId/contacts', verifyToken, ContactGroupController.createContactGroup);
contactGroupRoutes.get('/merchants/:merchantId/contacts', verifyToken,ContactGroupController.getAllContactGroupsByMerchantId);
contactGroupRoutes.get('/merchants/:merchantId/contacts/:id', verifyToken,ContactGroupController.getContactGroupById);
contactGroupRoutes.put('/merchants/:merchantId/contacts/:id', verifyToken,ContactGroupController.updateContactGroupById);

export default contactGroupRoutes;