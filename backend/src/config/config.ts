import dotenv from "dotenv";

dotenv.config();

export const config = {
  development: {
    url: process.env.DB_URL,
    dialect: "postgres",
    logging: false,
  }
};

module.exports = config;