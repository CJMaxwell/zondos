import { NextFunction, Request, Response } from "express";
import { Infobip, AuthType } from "@infobip-api/sdk";
import { config } from 'dotenv';

config();



class EmailController {

    static async sendEmail(req: Request, res: Response, next: NextFunction) {
        
        try {
            const { from, to, subject, html } = req.body;
            let infobip = new Infobip({
                baseUrl: `${process.env.INFOBIP_BASE_URL}`,
                apiKey: `${process.env.INFOBIP_KEY}`,
                authType: AuthType.ApiKey,
            });

            let response = await infobip.channels.email.send({
                from,
                to,
                subject,
                html
            });

            if (response instanceof Error) {
                throw response;
            };

            const { data } = response;
            res.status(200).json(data);
            
        } catch (error) {
            next(error)
        }
        
    }

}

export default EmailController;