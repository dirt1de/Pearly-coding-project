import { default as twilio } from 'twilio';
import * as dotenv from 'dotenv'
dotenv.config()

const client = twilio(process.env.accountSid, process.env.authToken);

export const sendMessage = (req, res) => {
    console.log(req.body);
    client.messages.create(req.body).then((message) => res.json(message));
}