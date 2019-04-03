const fs = require('fs');
const path =require('path');

const inputFolder = './input-folder';
const folderPathname = path.join(__dirname, inputFolder);


 fs.readdirSync(folderPathname).forEach(file => {
  	console.log(file);
 });
