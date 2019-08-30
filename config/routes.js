var env = process.env.NODE_ENV || 'development',
  config = require('./config')[env];

module.exports = function (app) {

  app.get('/', function(req, res) {
    res.sendfile('/index.html', { root: config.rootPath });
  });

  var pagamento = require('../app/controllers/pagamento');
  var email = require('../app/controllers/email');

  app.post('/pagamento/criarplano', pagamento.criarPlano);
  app.post('/pagamento/criarAssinaturaPlano', pagamento.criarAssinaturaPlano);
  app.post('/pagamento/pegarSessao', pagamento.pegarSessao);
  app.get('/pagamento/consultarPlanos', pagamento.consultarPlanos);
  app.post('/pagamento/consultaAssinatura', pagamento.consultaAssinatura);
  app.post('/pagamento/consultaAssinaturaPagamentos', pagamento.consultaAssinaturaPagamentos);
  app.post('/pagamento/notification', pagamento.notification);
  app.post('/email/enviar', email.enviar);
};
