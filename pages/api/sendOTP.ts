import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

export default function sendMessage(req: NextApiRequest, res: NextApiResponse) {
  const accountSid = <string>process.env.TWILIO_ACCOUNT_SID;
  const token = <string>process.env.TWILIO_AUTH_TOKEN;
  const verifySID = <string>process.env.TWILIO_VERIFY_SID;

  const client = twilio(accountSid, token);
  const { phone } = req.body;
  console.log(phone);

  client.verify.v2
  .services(verifySID)
  .verifications.create({ to: phone, channel: "sms" })
  .then((verification) => {
    console.log("Status", verification.status)
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