var http = require('http');
var config = require('./config.json');
var HttpDispatcher = require('httpdispatcher');
var dispatcher     = new HttpDispatcher();
var count = 0;

function handleRequest(request, response){
    try {
        console.log("Requested URL: " + request.url);
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

dispatcher.onPost("/", function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('ouch you post me.\n');
        res.end('<meta http-equiv="refresh" content="3;url=http://localhost:8080" />');
        count = count + 1;
    });

dispatcher.onGet("/", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("the post count is: ")
    res.write(count.toString());
    res.end('<form action="" method="post"><button name="foo" value="Count">Post</button></form>');
});

dispatcher.onError(function(req, res) {
        res.writeHead(404);
        res.end("404 - Page Does not exists");
});

http.createServer(handleRequest).listen(config.port, function(){
    console.log("Server listening on: http://localhost:%s", config.port);
});
