import { Router } from 'express';
import ContactController from '../../controllers/ContactController';
import verifyToken from '../../middleware/verifyToken';


const contactRoutes = Router();

contactRoutes.post('/merchants/:merchantId/contacts', verifyToken, ContactController.createContact);
contactRoutes.get('/merchants/:merchantId/contacts', verifyToken,ContactController.getAllContactsByMerchantId);
contactRoutes.get('/merchants/:merchantId/contacts/:id', verifyToken,ContactController.getContactById);
contactRoutes.put('/merchants/:merchantId/contacts/:id', verifyToken,ContactController.updateContactById);
contactRoutes.post('/merchants/:merchantId/group-contacts', verifyToken,ContactController.addContactToGroup);

export default contactRoutes;