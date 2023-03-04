import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

export default function sendMessage(req: NextApiRequest, res: NextApiResponse) {
  const accountSid = <string>process.env.TWILIO_ACCOUNT_SID;
  const token = <string>process.env.TWILIO_AUTH_TOKEN;
  const verifySID = <string>process.env.TWILIO_VERIFY_SID;

  const client = twilio(accountSid, token);
  const { phone, otpCode } = req.body;
  // console.log(phone, message);
  client.verify.v2
        .services(verifySID)
        .verificationChecks.create({ to: phone, code: otpCode })
        .then((verification_check) => {
            console.log(verification_check.status);
            res.status(200).json({
                success: true,
            });
        })
    .catch((error) => {
      console.log(error);
      res.json({
        success: false,
      });
    });
}