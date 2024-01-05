const express = require ('express');
const morgan = require ('morgan');
const cors = require('cors');
const mainRouterManager = require('./routes/mainRouterManager');

const server = express()

server.use(morgan('dev'));
server.use(cors());
server.use(express.json());
server.use(mainRouterManager);




module.exports = server