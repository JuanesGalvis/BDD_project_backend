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

  await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
          if (error) {
              console.log(error);
              reject(error);
          } else {
              console.log("Server is ready to take our messages");
              resolve(success);
          }
      });
  });

  // send mail with defined transport object
  let info = await new Promise((resolve, reject) => {
    transporter.sendMail({
      from: {
        name: 'Pasé Raspando 📝',
        address: process.env.EMAIL_NODEMAILER
      }, // sender address
      to: user.email, // list of receivers
      subject: "PaséRaspando 📝 - Recuperación de contraseña", // Subject line
      html: `<img src="https://i.postimg.cc/DfbR17z6/Logotipo.jpg" alt="Logotipo" /><h2>Hola 👋🏻 ${user.name}</h2><p>Este correo es para recuperar tu contraseña de Paseraspando.com.com 👍🏻</p><p>Ingresa a este link para recuperar la contraseña:👉🏻 https://paseraspando.vercel.app/change_password?token=${token} 👈🏻 </p>`, // html body
    }, (err, info) => {
      if (err) {
          console.error(err);
          reject(err);
      } else {
          console.log(info);
          resolve(info);
      }
    });
  }) 

  console.log("Message sent: %s", info.messageId);
}

module.exports = { SendEmail };
