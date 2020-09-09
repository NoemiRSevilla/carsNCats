const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response) {
    console.log('client request URL: ', request.url);

    // this is how we do routing:
    if (request.url === '/cars') {
        fs.readFile('cars.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/img/car1.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./img/car1.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/img/car2.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./img/car2.jpg', function (errors, contents) {
        response.writeHead(200, { 'Content-type': 'image/jpg' });
        response.write(contents);
        response.end();
    })
    }
    else if(request.url === '/img/car3.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./img/car3.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/img/car4.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./img/car4.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/cats') {
        fs.readFile('cats.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === '/img/cat1.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/cat1.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/img/cat2.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/cat2.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/img/cat3.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/cat3.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/img/cat4.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/cat4.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 6789");