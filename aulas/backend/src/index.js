const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
// permite corpo de requisições enviados como JSON
app.use(express.json());
app.use(routes);

/*
 * Tipos de parâmetros
 *
 * Query Params: parâmetros nomeados enviados na rota após "?" (filtros, paginação) -> request.query
 * Route Params: parâmetros utilizados para identificar recursos -> request.params
 * Request Body: corpo da requisição utilizad para criar ou alterar recursos
 */


app.listen(3333);