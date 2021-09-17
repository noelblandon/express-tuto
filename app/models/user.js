const {  Model,DataTypes } = require("sequelize");
const { sequelize }  = require("../../config/db");

class User extends Model {}

User.init({   
    id_user:{
        type:DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: true
    }
},{
    sequelize,
    modelName:'User',
    timestamps: true,
    createdAt: true,
    updatedAt: true,
    freezeTableName: true,
    tableName: 'users'
});


module.exports = User;