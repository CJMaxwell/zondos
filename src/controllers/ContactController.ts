import { NextFunction, Request, Response } from 'express';
import ContactService from '../services/ContactService';

const { Contact } = require('../../models');


class ContactController {
    static async createContact(req: Request, res:Response, next: NextFunction) {
        try {
            // @ts-ignore
            const { id: merchantId } = req.merchant;
            const contact = await ContactService.createContact(req.body, merchantId);

            res.status(201).json({
                contact
            })
        } catch (error) {
            next(error)
        }
    }

    

    static async updateContactById(req: Request, res:Response) {
        const { firstName, lastName, phoneNumber, dob, email, gender } = req.body;
        const { id } = req.params;
        // @ts-ignore
        const { id: merchantId } = req.merchant;

        const [updated, updatedContact] = await Contact.update({firstName, lastName, phoneNumber, dob, email, gender}, {
            where: {
              id,
              merchantId
            },
      
            returning: true,
      
        });
      
        if(!updated) {
        res.status(400).json({
            message: "Unable to update contact."
            });
            return;
        }

        res.status(200).json({
        message: 'successful',
        contact: updatedContact
        });
    }
        
}


export default ContactController;