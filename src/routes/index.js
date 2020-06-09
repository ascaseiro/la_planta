const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.get('/', (req, res) => {
  res.render('inicio');
});

router.get('/espacios', (req, res) => {
  res.render('instalaciones');
});


  router.post('/send', async (req, res) => {
    console.log(req.body);

    const output = `
    <p>Nuevo formulario de contacto en La Planta Coworking</p>
    <h3>Detalles del contacto</h3>
    <ul>  
      <li>Nombre: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Teléfono: ${req.body.phone}</li>
    </ul>
    <h3>Mensaje</h3>
    <p>${req.body.message}</p>
  `;

    let transporter = nodemailer.createTransport({
      host: 'mail.devozavoz.com',  
      port: 587,
        secure: false,
        auth: {
          user: 'info@devozavoz.com',
          pass: 'Crp741777-'
        },
        tls: {
          rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
  let mailOptions = {
      from: '"La Planta Coworking" <info@devozavoz.com>', // sender address
      to: 'info@laplantacoworking.com', // list of receivers
      subject: 'Contacto La Planta Coworking', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.redirect('back');
    });
  });

router.get('/actividades', (req, res) => {
  res.render('actividades');
});

router.get('/tarifas', (req, res) => {
  res.render('tarifas');
});

router.get('/blog', (req, res) => {
  res.redirect('http://localhost:2368');
});

router.get('/privacidad', (req,res) => {
  res.render('privacidad');
});

router.get('/legal', (req,res) => {
  res.render('legal');
});

router.get('/cookies' , (req,res) => {
  res.render('cookies');
});

module.exports = router;