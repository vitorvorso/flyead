var sf = require('node-salesforce');

const loginUrl = process.env.NODE_LOGINURL ||  'https://test.salesforce.com';
const clientId = process.env.NODE_CLIENTID ||  '3MVG9QBLg8QGkFerS4zTdoCnaDJfHMMgMenFJGrmtu5rCNFLx7Ads4EOTPKzi3MxR_ieoKbUbUnuFwjBbwLN7';
const clientSecret = process.env.NODE_CLIENTSECRET ||  'DE4989584135F27835A103DBCC95F899E01C2C73B4A8E5D917B561762F87316A';
const login = process.env.NODE_LOGIN ||  'admin@cepcon.com.br.dev';
const senha = process.env.NODE_SENHA ||  'vrs123459emJHO2jIwHO0jtm7xmCOcGzL';

exports.criarLead = (resposta, cb) => {
  if (resposta) {
 

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

exports.enviarEmail = (resposta, cb) => {
  if (resposta) {
  console.log(login);
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
      conn.apex.post('/services/apexrest/EmailAtivacao', params, function (err, res) {
        console.log("Result: " + res);
        console.log("Result: " + err);
        cb(err, res);
      });
    });
  }
};