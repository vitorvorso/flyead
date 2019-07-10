var env = process.env.NODE_ENV || 'development',
  config = require('./config')[env];

module.exports = function (app) {

  app.get('/', function(req, res) {
    res.sendfile('/index.html', { root: config.rootPath });
  });

  var pagamento = require('../app/controllers/pagamento');

  app.post('/pagamento/criarplano', pagamento.criarPlano);
  app.post('/pagamento/criarAssinaturaPlano', pagamento.criarAssinaturaPlano);
  app.post('/pagamento/pegarSessao', pagamento.pegarSessao);
  app.get('/pagamento/consultarPlanos', pagamento.consultarPlanos);
  
};
