// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');

module.exports.sendEmail = async (email) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const body = `<html><body><h1>Welcome ${email}!!</h1><br>
    <p>This is a sample template to send on a
    successful user signup</p></body></html>`;

  const msg = {
    to: email, // Change to your recipient
    from: 'akash.verma@peakmind.in', // Change to your verified sender
    subject: 'Welcome Email!!',
    html: body,
  };

  const sentStatus = await new Promise((resolve, reject) => {
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
        resolve({ status: 'success' });
      })
      .catch((err) => {
        console.log('Error', err);
        reject({ status: 'failure', err });
      });
  });

  return sentStatus;
};
