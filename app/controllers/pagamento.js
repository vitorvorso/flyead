var request = require("request");

const url = process.env.PAG_URL || "https://ws.sandbox.pagseguro.uol.com.br/";

exports.criarPlano = function(req, res) {
  var data = JSON.stringify(req.body);

  var options = {
    method: "POST",
    url:
      url +
      "pre-approvals/request/?email=vitornsp2@gmail.com&token=528D314F16E1433F90A0A23B7AB361EE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1"
    },
    body: data
  };

  var teste = { nome: "dasdad", pedido: "dasadaa" };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    res.send(body);
  });
};

exports.criarAssinaturaPlano = function(req, res) {
  var data = JSON.stringify(req.body);
 // console.log("dados " + data);
  var options = {
    method: "POST",
    url:
      url +
      "pre-approvals?email=vitornsp2@gmail.com&token=528D314F16E1433F90A0A23B7AB361EE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1"
    },
    body: data
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    res.send(body);
  });
};

exports.pegarSessao = function(req, res) {
  var data = JSON.stringify(req.body);

  var options = {
    method: "POST",
    url:
      url +
      "sessions?email=vitornsp2@gmail.com&token=528D314F16E1433F90A0A23B7AB361EE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "*/*"
    },
    form: {
      email: "vitornsp2@gmail.com",
      token: "528D314F16E1433F90A0A23B7AB361EE"
    }
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    res.send(body);
  });
};

exports.consultarPlanos = function(req, res) {
  var options = {
    method: "GET",
    headers: {
      Accept: "application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1"
    },
    url:
      url +
      "pre-approvals/request?email=vitornsp2@gmail.com&token=528D314F16E1433F90A0A23B7AB361EE&page=1&maxPageResults=100&status=ALL&startCreationDate=2019-06-10T12:46:48.630Z&endCreationDate=2019-07-09T12:46:48.630Z"
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    res.send(body);
  });
};

exports.consultaAssinatura = function(req, res) {
  var options = {
    method: "GET",
    headers: {
      Accept: "application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1"
    },
    url:
      url +
      "pre-approvals/" +
      req.body.codigo +
      "/?email=vitornsp2@gmail.com&token=528D314F16E1433F90A0A23B7AB361EE"
  };

  console.log(res.cod);

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    res.send(body);
  });
};

exports.consultaAssinaturaPagamentos = function(req, res) {
  var options = {
    method: "GET",
    headers: {
      Accept: "application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1"
    },
    url:
      url +
      "pre-approvals/" +
      req.body.codigo +
      "/payment-orders/?email=vitornsp2@gmail.com&token=528D314F16E1433F90A0A23B7AB361EE"
  };

  //console.log(res.cod);

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    res.send(body);
  });
};

exports.criarNaoAssinante = function(req, res) {
  var options = {
    method: "POST",
    headers: {
      Accept: "application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1"
    },
    url:
      url +
      "pre-approvals/" +
      req.body.codigo +
      "/payment-orders/?email=vitornsp2@gmail.com&token=528D314F16E1433F90A0A23B7AB361EE"
  };

  console.log(res.cod);

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    res.send(body);
  });
};

exports.notification = function(req, res) {

  var options = {
    method: "GET",
    headers: {
      Accept: "application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1"
    },
    url:
      url +
      "v3/transactions/notifications/" +
      req.body.notificationCode +
      "?email=vitornsp2@gmail.com&token=528D314F16E1433F90A0A23B7AB361EE"
  };

  console.log("aqui code " + JSON.stringify(req.body));

  request(options, function(error, response, body) {
    if (error) throw new Error(error);
    console.log("aqui retorno " + JSON.stringify(body));
    res.send(body);

  });

};
