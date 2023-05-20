import { NextFunction, Request, Response } from "express";
import { config } from 'dotenv';
import OTPService from "../services/OTPService";
import EmailService from "../services/EmailService";

config();



class EmailController {

    static async sendEmail(req: Request, res: Response, next: NextFunction) {
        
        try {
            const { from, to, subject, html } = req.body;
            const data = await EmailService.sendEmail(from, to, subject, html);
            res.status(200).json(data);
            
        } catch (error) {
            next(error)
        }
        
    }

    

    

}

export default EmailController;