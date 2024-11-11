const fs = require("fs");
const path = require("path");

function folder(folderName, basePath) {
  const folderPath = path.join(basePath, folderName);
  console.log(folderPath);

  try {
    if (fs.existsSync(folderPath)) {
      console.log(`The folder "${folderName}" exists.`);
    } else {
      console.log(`The folder "${folderName}" does not exist.`);
    }
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

folder("go",  __dirname);
