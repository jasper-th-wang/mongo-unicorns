require("dotenv").config();
const fs = require("fs");
const path = require("path");
const src_path = path.join(__dirname, "..", "frontend");

const portNum = process.env.PORT || 3000;
const settingScripts = `let environment = {
  "PORT": ${portNum}
}`;

fs.writeFileSync(`${src_path}/settings.js`, settingScripts);
