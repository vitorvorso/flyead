var sf = require('node-salesforce');

exports.criarCaso = (resposta, cb) => {
  if (resposta) {
   var loginUrl = process.env.NODE_LOGINURL ||  'https://test.salesforce.com';
   var clientId = process.env.NODE_CLIENTID ||  '3MVG9Vik22TUgUphKhs9dOlQTshYF8yvxFAZiL2kW5bzGiSTngvTFZelCwEEJqQXtHymaGFGvDLsf7mUoDDSH';
   var clientSecret = process.env.NODE_CLIENTSECRET ||  '3129135298569214871';
   var login = process.env.NODE_LOGIN ||  'administrador@ec.com.br.Dev1';
   var senha = process.env.NODE_SENHA ||  '##estrategia2468pvWpeOAxrVUG9AztCnC8OHm6w';

    var conn = new sf.Connection({
      oauth2: {
        // you can change loginUrl to connect to sandbox or prerelease env. 
        loginUrl: loginUrl,
        clientId: clientId,
        clientSecret: clientSecret,
        //redirectUri : '<callback URI is here>'
      }
    });
    conn.login(login, senha, function (err, userInfo) {
      if (err) { return console.error(err); }
      // Now you can get the access token and instance URL information. 
      // Save them to establish connection next time. 
      console.log(conn.accessToken);
      console.log(conn.instanceUrl);
      // logged in user property 
      console.log("User ID: " + userInfo.id);
      console.log("Org ID: " + userInfo.organizationId);
     
     var body = {};
     body.lead = resposta;

      // chamando api
      console.log("resposta " +  JSON.stringify(body));
      var params = { "lead": resposta };
      conn.apex.post('/services/apexrest/CustomLead', params, function (err, res) {
        console.log("Result: " + res);
        console.log("Result: " + err);
        cb(err, res);
      });
    });
  }
};