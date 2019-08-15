const salesforce = require('../salesforce/apex');

exports.save = function (req, res) {
   
    salesforce.enviarEmail(req.body, function (error, result) {
        //res.redirect(returnUrl ? returnUrl : "/");
        res.send(result);
   });
};