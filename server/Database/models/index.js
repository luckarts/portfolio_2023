import connection from '../connection';
import fs from 'fs';
import path from 'path';

const basename = path.basename(__filename);
const db = {};

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const model = connection.import(path.join(__dirname, file));

    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.connection = connection;
db.connection = connection;

module.exports = db;
