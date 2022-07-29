const fs = require("fs");

const path = "./database/data.json";

const saveDB = (data) => {
  fs.writeFileSync( path, JSON.stringify(data));
};
const readDb = () => {
  if (!fs.existsSync(path)) {
    return null;
  }
  const info = JSON.parse(fs.readFileSync(path, { encoding: "utf-8" }));
  
  return info;
};

module.exports = {
  saveDB,
  readDb
};
