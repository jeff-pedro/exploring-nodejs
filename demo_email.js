const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    auth: {
        user: 'jeffersonpedro89@gmail.com',
        pass: 'secret'
    },
    secure: true
});

const mailOptions = {
    from: 'jeffersonpedro89@gmail.com',
    to: 'jeffersonpedro89@gmail.com',
    subject: 'Sending Email Test',
    text: 'This is amazing! The email arrive!',
    html: '<h1>This is amazing!</h1><p>The email arrive!</p>'
}

transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log('Email sent: ' + info.response);
});