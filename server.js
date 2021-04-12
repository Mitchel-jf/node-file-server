const http = require("http")


http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Hi from our simple server!")
}).listen(8080, "localhost")

console.log("Server created successfully!")
