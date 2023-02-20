import { NextFunction, Request, Response } from 'express';

import HttpException from '../exception/HttpException';
import ContactGroupService from "../services/ContactGroupService";

class ContactGroupController {
    static async createContactGroup(req: Request, res:Response, next: NextFunction) {
        try {
            // @ts-ignore
            const { id: merchantId } = req.merchant;
            const { title } = req.body;

            const contact = await ContactGroupService.createContactGroup(title, merchantId);

            res.status(201).json({
                message: 'successful',
                contact
            })
        } catch (error) {
            next(error)
        }
    }

    static async getAllContactGroupsByMerchantId(req: Request, res:Response, next: NextFunction) {
        try {
            // @ts-ignore
            const { id: merchantId } = req.merchant;
            const contactGroups = await ContactGroupService.getAllContactGroupsByMerchantId(merchantId);

            if (!contactGroups) {
                throw new HttpException(404, 'No contact groups for this Merchant.');
            };

            res.status(200).json({
                message: 'successful',
                contactGroups
            })
        } catch (error) {
            next(error)
        }
    }

    static async getContactGroupById(req: Request, res:Response, next: NextFunction) {
        try {
            // @ts-ignore
            const { id: merchantId } = req.merchant;
            const { id } = req.params;
            const contactGroup = await ContactGroupService.getContactGroupById(id, merchantId);

            if (!contactGroup) {
                throw new HttpException(404, 'Contact group does not exist.');
            };

            res.status(200).json({
                message: 'successful',
                contactGroup
            })
        } catch (error) {
            next(error)
        }
    }

    static async updateContactGroupById(req: Request, res:Response) {
        const { id } = req.params;
        const updatedContactGroup = await ContactGroupService.updateContactGroupById(req.body, id);
        res.status(200).json({
            message: 'successful',
            contact: updatedContactGroup
        });
    }
}

export default ContactGroupController;