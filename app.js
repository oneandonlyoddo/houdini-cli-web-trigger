const http = require('http');
const fs = require('fs');

const indexHTML = fs.readFileSync('index.html');

const render = function (seed){
    seed = seed.split("=");
    seed = seed[seed.length-1];
    console.log("the seed is: " + seed );
    let spawn = require("child_process").spawn;
    let pythonProcess = spawn('hython',["renderScript.py", seed]);
    pythonProcess.stdout.on('data', function (data){
        console.log("python feedback:" + data);
    });
    pythonProcess.on('close', function(){
        console.log("done rendering");
    });
}

const server = http.createServer( function(req, res) {

    if (req.method == 'POST') {
        console.log("POST");
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
           render(body);
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(indexHTML);
    }
    else
    {
        //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(indexHTML);
    }

});

const port = 3000;
const host = '127.0.0.1';
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);