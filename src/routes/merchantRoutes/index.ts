import { Router } from 'express';
import MerchantController from '../../controllers/MerchantController';
import verifyToken from '../../middleware/verifyToken';


const merchantRoutes = Router();

merchantRoutes.get('/merchants/:id', verifyToken, MerchantController.getMerchantById);
merchantRoutes.get('/merchants/:id', verifyToken, MerchantController.updateMerchantById);

export default merchantRoutes;