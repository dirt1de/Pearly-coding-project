import { default as twilio } from 'twilio';
import * as dotenv from 'dotenv'
dotenv.config()

const client = twilio(process.env.accountSid, process.env.authToken);

export const sendMessage = (req, res) => {
    client.messages
    .create({
        body: 'Hi',
        from: '+18883185969',
        to: '+14245358393'
    })
    .then(message => res.json(message));
}