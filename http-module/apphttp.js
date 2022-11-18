const http=require('http')
//this createserver is a method in http module..which requires a call back function
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('home page')
        res.end()
    }
    if(req.url==='/about'){
        res.end('this is your home page!!')
    }
    
    res.end(`
    <h1> OOPS! </h1>
    you got on to the error page!
    <a href="/">back home </a>
    `)
})


server.listen(5000)