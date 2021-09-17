/*CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL
  );*/

  const User = require('../app/models/user');
  
  const createTableIfNotExist = async() => {
    try {
      await User.sync();
    //  await sequelize.sync({ force: true });
console.log("All models were synchronized successfully.");
    } catch (error) {
      console.error(error);
    }
  }
  
  const createTableDroppingIfExist = async() => {
    try {
      await User.sync({force:true});
      console.log("The table for the User model was just (re)created!");
    } catch (error) {
      console.error(error);
    }
  }

  const alterTable = async() => {
    try {
      await User.sync({alter:true});
      //which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
    } catch (error) {
      console.error(error);
    }
  }

  const dropTable = async() => {
    try {
      await User.drop();
      console.log("User table dropped!");
    } catch (error) {
      console.error(error);
    }
  }


  module.exports.init = () =>{
    dropTable();
  }