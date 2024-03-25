import mysql from "mysql"; 
import 'dotenv/config';

const pool = mysql.createPool({
  connectionLimit: 10000,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const Database = (sql, values = []) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, result, fields) => {
      //ce qu'on fait ici une fois que la requête est exécutée
      if (error) {
        reject(error);
      }
      resolve(result); // [] en cas de SELECT
    });
  });
};

export default Database;
