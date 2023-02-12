import { Router } from 'express';
import AuthController from '../../controllers/AuthController';
// import verifyToken from '../../middleware/verifyToken';


const authRoutes = Router();

authRoutes.post('/auth/signup', AuthController.signup);
authRoutes.post('/auth/login', AuthController.login);

export default authRoutes;