var http = require('http');
http.createServer(function (req, res) {
  
  var delay = parseInt(req.url.substr(1, req.url.length)) || 0;
  console.log(delay);
  
  // add some entropy
  
  delay += Math.floor(Math.random()*parseInt(delay*0.2)) // add 20% more
  console.log(delay);
  
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  setTimeout(function () {
    res.end('Done after waiting ' + delay.toString() + 'ms\n');
  }, delay);
  
}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');
