import { Router } from 'express';
import verifyToken from '../../middleware/verifyToken';
import EmailController from '../../controllers/EmailController';


const emailRoutes = Router();

emailRoutes.post('/merchants/:id/email', EmailController.sendEmail)

export default emailRoutes;