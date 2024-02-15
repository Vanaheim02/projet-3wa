import mysql from "mysql";

const pool = mysql.createPool({
  connectionLimit: 10000,
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "3306",
  user: process.env.DB_USER || "admin",
  password: process.env.DB_PASS || "admin",
  database: process.env.DB_NAME || "projet-3wa",
});

const query = (sql, values = []) => {
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

export default query;
