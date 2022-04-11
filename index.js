var http = require("http");
const jwt = require("jsonwebtoken");
let body = {
  exp: 7 * 24 * 60 * 60 + ((new Date().getTime() / 1000) | 0),
  login: "jonathan.freire.ext",
  roles: "CN=GA_DADOS,OU=Excecoes,OU=Grupos,OU=SASCAR,DC=sascar,DC=local"
};
let secret = "y8jGRV4wLwzCPWqRS9Js";
let token = jwt.sign(body, secret);
console.log(token);
//create a server object:
http
  .createServer(function (req, res) {
    res.write(token); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
