const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('Welcome')
    }
    if (req.url === '/about'){
        res.end('History')
    }
    res.end(`
    <html>
    <h1> OOPS!! </h1>
    <p> We can't seem to find the page you are looking for <p>
    <a href="/"> back home </a>
    </html>
    `)
})

server.listen(5000)