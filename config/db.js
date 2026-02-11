import { Sequelize } from "sequelize";
import fs from "fs";
import path from "path";

// 1️⃣ JSON ko read karna manually
const configPath = path.resolve("./config/config.json");
const rawConfig = fs.readFileSync(configPath, "utf-8");
const config = JSON.parse(rawConfig);

// 2️⃣ Environment
const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

// 3️⃣ Sequelize instance
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect, // "mysql"
  logging: false, 
});

export default sequelize;
