const path= require('path')

let f= path.join(__dirname,'path_demo.js')

let m= path.extname(f)

console.log(m)