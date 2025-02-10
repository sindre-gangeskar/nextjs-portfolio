import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { body } = req.body;
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587, 
    secure: false,
    
  })
}
