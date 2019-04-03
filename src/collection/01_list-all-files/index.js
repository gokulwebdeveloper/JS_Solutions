const fs = require('fs');
const path =require('path');

const inputFolder = './input-folder';
const concatPathname = path.join(__dirname, inputFolder);


 fs.readdirSync(concatPathname).forEach(file => {
  	console.log(file);
 });
