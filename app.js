const http = require('http');

const server = http.createServer(function(req, res) {
   res.setHeader('Content-Type','text/html');
   res.write('<html>');
   res.write('<head><title>My First page</title></head>');
   res.write('<body><h1>My First page</h1></body>');
   res.write('</html>');

   res.end();

});

server.listen(3000);

