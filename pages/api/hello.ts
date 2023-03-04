// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { phone } = req.body;
  console.log(phone);
  const accountSid = <string>process.env.TWILIO_ACCOUNT_SID;
  const token = <string>process.env.TWILIO_AUTH_TOKEN;
  console.log(token);
  console.log(accountSid);
  
  
  res.status(200).json({ name: 'John Doe' })
}
