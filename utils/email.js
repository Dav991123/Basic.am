var EmailUtils = {
    sendEmail: function(template, to, subject, data, callback){
        let mailer = require("../index").mailer;
        mailer.send(template, {
            to: to,
            subject: subject,
            name: data.name,
            phone: data.phone,
            message: data.message,
            email: data.email
          }, function (err) {
            if (err) {
              callback(err);
              return;
            }
            callback(null);
          });
    }
};

module.exports = EmailUtils;