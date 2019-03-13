const http = require('http');

const port=process.env.PORT || 3000

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>First Node App on Azure</h1>');
})

server.listen(port, ()=> {
    console.log('Listening on port ' + port);
});