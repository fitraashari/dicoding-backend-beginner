const fs = require('fs');
const path = require('path');
const callbackFS = (error, data)=>{
    if (error) {
        console.log(`Error: ${error}`)
        return;
    }
    console.log(data)
}
let file = path.resolve(__dirname, 'notes.txt');
fs.readFile(file,'UTF-8',callbackFS);
