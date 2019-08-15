const salesforce = require('../salesforce/apex');

exports.enviar= function (req, res) {
    salesforce.enviarEmail(req.body, function (error, result) {
        //res.redirect(returnUrl ? returnUrl : "/");
        res.send(result);
   });
};