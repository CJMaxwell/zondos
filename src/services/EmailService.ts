import { Infobip, AuthType } from "@infobip-api/sdk";
import HttpException from "../exception/HttpException";

class EmailService {
    static async sendEmail(from: string, to: string, subject: string, html: string) {
        try {
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
            return data;
            
        } catch (error) {
            throw new HttpException(400, "An error occurred.")

        }
    }
}

export default EmailService;