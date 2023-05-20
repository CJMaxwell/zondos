import { generateOTP } from "../helpers/OTP";
import HttpException from '../exception/HttpException';
const { OTPLog } = require('../../models');


class OTPService {

    static async create(email: string) {
        const otpCode = generateOTP();
        try {
            const [result, created] = await OTPLog.upsert({
                id: email,
                code: otpCode
            });

            const OTPData = result.get({ plain: true });
            return OTPData
        } catch (error) {
            throw new HttpException(500, "An error occurred.")
        }
    };

    static async verifyOTP(email: string) {
        console.log(`Verifying`);
        const result = await OTPLog.findOne({ 
            where: {
                id: email
            }
        });
        const res = result.get({ plain: true });
        return res;
    }

}

export default OTPService;