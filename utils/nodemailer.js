const nodemailer = require("nodemailer");

async function SendEmail(user, token) {
    
  // Generate test SMTP service account from ethereal.email
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true, // true for 465, false for other ports
    port: 465,
    auth: {
        user: process.env.EMAIL_NODEMAILER,
        pass: process.env.PASSW_NODEMAILER
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.EMAIL_NODEMAILER, // sender address
    to: user.email, // list of receivers
    subject: "PaseRaspando - Recuperación de contraseña", // Subject line
    html: `<h2>Hola ${user.name}</h2><p>Este correo es para recuperar tu contraseña de PaseRaspando.com 👍🏻</p><p>Ingresa a este link para recuperar la contraseña:👉🏻 https://paseraspando.com/recovery/${token} 👈🏻 </p>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = { SendEmail };
