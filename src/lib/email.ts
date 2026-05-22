import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  pool: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, 
  },
  tls: {
    rejectUnauthorized: false,
    servername: process.env.SMTP_HOST, 
  },
  connectionTimeout: 10000, 
  socketTimeout: 10000,     
  greetingTimeout: 10000,
  logger: false, 
  debug: false, 
} as SMTPTransport.Options);

interface SendEmailProps {
  fromUserEmail: string; 
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail({ fromUserEmail, subject, text, html }: SendEmailProps) {
  try {
    const info = await transporter.sendMail({
      from: '"Contact Form" <' + process.env.SMTP_USER + '>',
      to: process.env.SMTP_USER,
      replyTo: fromUserEmail,  
      subject: subject,
      text,
      html,
    });
    
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error('SMTP_ERROR:', error.message);
    return { success: false, error: error.message };
  }
}
