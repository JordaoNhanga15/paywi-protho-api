const express = require('express');
const app = express();
const { port } = require('./config');

const _dadosCartaoRoutes = require('./src/routes/_dadosCartao');
const _estabelecimentosRoutes = require('./src/routes/_estabelecimentos');
const _pagamentosRoutes = require('./src/routes/_pagamentos');
const _formasPagamentoRoutes = require('./src/routes/_formasPagamento');
const _usersRoutes = require('./src/routes/_users');
const _usersAuthRoutes = require('./src/routes/_usersAuth');

const validateAuth = require('./src/middlewares/validateAuth');

app.use(express.json());

app.use('/', _usersAuthRoutes);
app.use('/users', validateAuth, _usersRoutes);
app.use('/dadosCartao', validateAuth, _dadosCartaoRoutes);
app.use('/pagamentos', validateAuth, _pagamentosRoutes);
app.use('/estabelecimentos', validateAuth, _estabelecimentosRoutes);
app.use('/formasPagamento', validateAuth, _formasPagamentoRoutes);

app.listen(port, () => {
  console.log('Server listen on port ', port);
});
