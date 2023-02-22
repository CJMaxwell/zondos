import { Router } from 'express';

import ContactGroupController from '../../controllers/ContactGroupController';
import verifyToken from '../../middleware/verifyToken';


const contactGroupRoutes = Router();

contactGroupRoutes.post('/merchants/:merchantId/groups', verifyToken, ContactGroupController.createContactGroup);
contactGroupRoutes.get('/merchants/:merchantId/groups', verifyToken,ContactGroupController.getAllContactGroupsByMerchantId);
contactGroupRoutes.get('/merchants/:merchantId/groups/:id', verifyToken,ContactGroupController.getContactGroupById);
contactGroupRoutes.put('/merchants/:merchantId/groups/:id', verifyToken,ContactGroupController.updateContactGroupById);

export default contactGroupRoutes;