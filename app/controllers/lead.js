const salesforce = require('../salesforce/apex');

exports.save = function (req, res) {
    var returnUrl = req.body.returnUrl;
    delete req.body.submit;
    delete req.body.__proto__;
    delete req.body.returnUrl;

    salesforce.criarCaso(req.body, function (error, result) {
        res.redirect(returnUrl ? returnUrl : "/");
   });
};