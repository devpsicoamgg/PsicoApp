require("dotenv").config();

const server = require('./src/server');
const { PORT_SERVER } = process.env;


server.listen(PORT_SERVER, ()=> {
  console.log(`Server is listening on port Ψ ${PORT_SERVER}`);
});