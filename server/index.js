require("dotenv").config();

const server = require('./src/server');
const { psyConn } = require('./src/db'); 
const { PORT_SERVER } = process.env;


server.listen(PORT_SERVER, ()=> {

  psyConn.sync({force: true});
  console.log(`Server is listening on port Ψ ${PORT_SERVER}`);

});