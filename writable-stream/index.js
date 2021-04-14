const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname,'input.txt')
const writeStream = fs.createWriteStream('output.txt');
const readStream = fs.createReadStream(file,{
    highWaterMark:15
});
readStream.on('readable',()=>{
    try {
        writeStream.write(`${readStream.read()} \n`)
    } catch (error) {
        
    }
})
readStream.on('end',()=>{
    writeStream.end(null)
})