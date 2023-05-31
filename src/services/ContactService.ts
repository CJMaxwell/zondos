import { v4 as uuidv4 } from 'uuid';
import HttpException from '../exception/HttpException';

import { Icontact, IContactDTO } from "../model/contact.model";
const { Contact, group } = require('../../models');


class ContactService {

    static async createContact(payload: IContactDTO, merchantId: string) {

        const { firstName, lastName, phoneNumber, dob, email, gender } = payload;

        const [newContact, created] = await Contact.findOrCreate({
            where: {
                email,
                phoneNumber,
                merchantId
            },
            defaults: {
              id: uuidv4(),
              firstName, 
              lastName, 
              phoneNumber, 
              dob, 
              email, 
              gender,
              merchantId
            },
          });
    
          if (!created) {
            throw new HttpException(409, "Contact already exists.")
          };

        const plainContact = newContact.get({ plain: true });
        
        return plainContact;

    }

    static async getAllContactsByMerchantId(merchantId: string) {
        const contacts: Icontact[]  = await Contact.findAll({
            where: {
              merchantId
            }
        });
      
        return contacts;
    }

    static async getContactById(id: string, merchantId: string) {
        const contact: Icontact  = await Contact.findOne({
            where: {
                id,
                merchantId
            }
        });
      
        return contact;
    }

    static async updateContactById(contact: IContactDTO, id: string) {

        const { firstName, lastName, phoneNumber, dob, email, gender } = contact;


        const [updated, updatedContact] = await Contact.update({firstName, lastName, phoneNumber, dob, email, gender}, {
            where: {
              id
            },
            returning: true,
      
        });
      
        if(!updated) {
            throw new HttpException(400, "Unable to update contact.");
        }

        return updatedContact;

    }

    static async addContactToGroup(contactId: string, contactGroupId: string) {
      console.log("Add contact to group",contactId, contactGroupId)
        const [newlyAddedContact, created] = await group.findOrCreate({
            where: {
                contactId,
                contactGroupId,
            },
            defaults: {
              id: uuidv4(),
              contactId,
              contactGroupId,
            },
          });
    
          if (!created) {
            throw new HttpException(409, "Contact already exists in the group.")
          };

        const addedContactToGroup = newlyAddedContact.get({ plain: true });
        
        return addedContactToGroup;
    }

}

export default ContactService;