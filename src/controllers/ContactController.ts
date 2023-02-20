import { NextFunction, Request, Response } from 'express';
import HttpException from '../exception/HttpException';
import ContactService from '../services/ContactService';


class ContactController {
    static async createContact(req: Request, res:Response, next: NextFunction) {
        try {
            // @ts-ignore
            const { id: merchantId } = req.merchant;
            const contact = await ContactService.createContact(req.body, merchantId);

            res.status(201).json({
                message: 'successful',
                contact
            })
        } catch (error) {
            next(error)
        }
    }

    static async getAllContactsByMerchantId(req: Request, res:Response, next: NextFunction) {
        try {
            // @ts-ignore
            const { id: merchantId } = req.merchant;
            const contacts = await ContactService.getAllContactsByMerchantId(merchantId);

            if (!contacts) {
                throw new HttpException(404, 'No contacts for this Merchant.');
            };

            res.status(200).json({
                message: 'successful',
                contacts
            })
        } catch (error) {
            next(error)
        }
    }

    static async getContactById(req: Request, res:Response, next: NextFunction) {
        try {
            // @ts-ignore
            const { id: merchantId } = req.merchant;
            const { id } = req.params;
            const contact = await ContactService.getContactById(id, merchantId);

            if (!contact) {
                throw new HttpException(404, 'Contact does not exist.');
            };

            res.status(200).json({
                message: 'successful',
                contact
            })
        } catch (error) {
            next(error)
        }
    }

    static async updateContactById(req: Request, res:Response) {
        const { id } = req.params;
        const updatedContact = await ContactService.updateContactById(req.body, id);
        res.status(200).json({
            message: 'successful',
            contact: updatedContact
        });
    }
        
}


export default ContactController;