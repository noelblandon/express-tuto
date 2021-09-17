const { sequelize }  = require("../../config/db");


module.exports = async()=>{return await sequelize.transaction();}