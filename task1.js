const fs = require("fs");
const path = require("path");

function folder(folderName) {
  const folderPath = path.join(__dirname, folderName);
  console.log(folderPath);

  if (fs.existsSync(folderPath)) {
    console.log('The folder exists.');
  } else {
    console.log('The folder does not exist.');
  }
}

folder("go");
