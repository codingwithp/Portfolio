import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log("Server Running"));

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify(error => {
  if (error) {
    console.log("Email server error:", error);
  } else {
    console.log("Email server ready to send");
  }
});

router.post('/contact', (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'Contact Form Submission - Portfolio',
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, error => {
    if (error) {
      console.log("SendMail error:", error);
      res.status(500).json({ status: "ERROR", message: "Failed to send message" });
    } else {
      res.status(200).json({ status: "OK", message: "Message sent successfully" });
    }
  });
});
