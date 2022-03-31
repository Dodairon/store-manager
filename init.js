require('dotenv/config');
const Importer = require('mysql-import');

const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST } = process.env;
const importer = new Importer({
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  host: MYSQL_HOST,
});

importer.import('./StoreManager.sql');