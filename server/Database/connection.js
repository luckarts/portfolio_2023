import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const connection = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

export default connection;
