// POST /api/offerte

const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const handlebars = require("handlebars");

function renderTextEmail({ name, email, phone, subject, message }) {
  return `
  Er is een nieuwe offerte aangemaakt door {name}.

  Naam: ${name}
  Email: ${email}
  Telefoonnummer: ${phone}
  Onderwerp: ${subject}
  Bericht: ${message}`;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  requireTLS: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const emailTemplatePath = path.join(
  __dirname,
  "../../../../templates/offerte_email.html"
);
const source = fs.readFileSync(emailTemplatePath, "utf-8").toString();
const renderHTMLEmail = handlebars.compile(source);

export default function handler(req, res) {
  if (req.method !== "POST") {
    res
      .status(405)
      .send({ success: false, message: "Only POST requests allowed" });
    return;
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !subject || !message) {
    res
      .status(422)
      .send({ success: false, message: "Missing required fields" });
    return;
  }

  const replacements = {
    name,
    email,
    phone,
    subject,
    message,
  };

  const mailOptions = {
    from: `Deviren Elektrotechniek <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    replyTo: `${name} <${email}>`,
    subject: `Nieuwe Offerte: ${subject}`,
    text: renderTextEmail(replacements),
    html: renderHTMLEmail(replacements),
  };

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send({ success: false, message: error.message });
      return;
    }

    res.status(200).send({ success: true, message: "" });
  });
}
