import { v4 as uuidv4 } from 'uuid';

import HttpException from '../exception/HttpException';
const { ContactGroup } = require('../../models');

class ContactGroupService {

    static async createContactGroup(title: string, merchantId: string) {

        const [newContactGroup, created] = await ContactGroup.findOrCreate({
            where: {
                title,
                merchantId
            },
            defaults: {
              id: uuidv4(),
              title,
              merchantId: merchantId
            },
          });
    
          if (!created) {
            throw new HttpException(409, "Contact group already exists.")
          };

        const plainContactGroup = newContactGroup.get({ plain: true });
        
        return plainContactGroup
    }

    static async getAllContactGroupsByMerchantId(merchantId: string) {
        const contactGroups  = await ContactGroup.findAll({
            where: {
              merchantId
            }
        });
      
        return contactGroups;
    }

    static async getContactGroupById(id: string, merchantId: string) {
        const contactGroup  = await ContactGroup.findOne({
            where: {
                id,
                merchantId
            }
        });
      
        return contactGroup;
    }

    static async updateContactGroupById(title: string, id: string) {

        const [updated, updatedContactGroup] = await ContactGroup.update({title}, {
            where: {
              id
            },
            returning: true,
      
        });
      
        if(!updated) {
            throw new HttpException(400, "Unable to update contact.");
        }

        return updatedContactGroup;

    }

}

export default ContactGroupService;