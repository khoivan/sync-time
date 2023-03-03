var http = require("http");
const headers = {
  "Access-Control-Allow-Origin": "*",
};
//create a server object:
http
  .createServer(function (req, res) {
    if (req.method === "OPTIONS") {
      res.writeHead(204, headers);
      res.end();
      return;
    }
    res.writeHead(200, headers);

    res.write(`${Date.now()}`);
    res.end();
  })
  .listen(8080);
