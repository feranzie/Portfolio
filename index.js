const path= require('path')
const fs= require('fs')
const http= require('http')

/*const server= http.createServer((request, response)=>{
    response.writeHead(200,{'content-Type':'text/html'})
    response.end('<h1> Hello,everyone, I am a robot dawg<h1>')
})
*/
const server=http.createServer((req,res) => {
    let filePath= path.join(__dirname, 'public', req.url === '/' ?'index.html': req.url)
    let contentType = getContentType(filePath) || 'text/html'
    let emptyPagePath= path.join(__dirname, 'public','404.html')
    fs.readFile(filePath, 'utf8', (err, content)=>{
        //error coe for file not found
        if(err){
            if(err.code === 'ENOENT'){
               fs.readFile(emptyPagePath, 'utf8', (err, content)=>{
                    response.writeHead(200,{'Çontent-Type': contentType})
                    response.end(content)
                   //res.writeHead(404)
                   //res.end('Page no found')
               })
            }else{
                res.writeHead(500)
                res.end('A server error has occoured')
            }
        }
        else{
            res.writeHead(200,{'content-Type': contentType})
            res.end(content)  
        }
    })
})

const getContentType=(filePath)=> {
    let extname=path.extname(filePath)
    if(extname=='.js'){
        return 'text/javascript'
    }
    if (extname==='.css'){
        return 'text/css'
    }
    if(extname==='.png'){
        return 'image/png'
    }
    if(extname==='.jpg'){
        return 'image/jpg'
    }

}
const port =5000

server.listen(port, () => {
    console.log(`Server is runnig on port ${port}`)
})
