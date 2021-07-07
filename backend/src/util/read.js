const fs = require('fs');

const readFile = (targetFile) => {
  const result = fs.readFileSync(targetFile, (err, data) => {
    if (err) { 
      console.log("error occured", err)
      return err;
    };
    return data;
  });
  
  return JSON.parse(result);
};

module.exports = readFile;