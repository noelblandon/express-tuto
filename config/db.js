const { Sequelize, Op, Model, DataTypes } = require("sequelize");


const sequelize =  new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});


const testConnection = async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.log(error)
    console.error('Unable to connect to the database:', error);
  }
}


const closeConnection = async() => {
  try {
    sequelize.close();
    console.log('Connection has been closed successfully.');
  } catch (error) {
    console.log(error)
    console.error('Unable to connect to the database:', error);
  }
}



module.exports = {testConnection, closeConnection,sequelize };