var restify = require('restify');
 
var server = restify.createServer();

 
server.get('/hello', function (req, res) {
  res.send('Hello KTUG');
});
 
server.listen(process.env.PORT, function () {
  console.log();
});