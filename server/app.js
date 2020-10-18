const { createServer } = require("http");
//creating simple web service
createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("Welocme");
    res.end();
}).listen(8080);
