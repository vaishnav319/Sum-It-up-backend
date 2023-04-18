const nodemailer = require("nodemailer");

module.exports = function sendMail(email, subject, message) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jobcrack314@gmail.com",
      pass: "jobcrack314@mail",
    },
  });

  var mailOptions = {
    from: "jobcrack314@gmail.com",
    to: email,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return false;
    } else {
      //response to the user that mail is successfully sent
      console.log("sent");
      return true;
    }
  });
};
