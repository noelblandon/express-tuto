const {  Model,DataTypes } = require("sequelize");
const { sequelize }  = require("../../config/db");

class User extends Model {}

User.init({   
    userId:{
        type:DataTypes.INTEGER.UNSIGNED,
        field: 'user_id',
        primaryKey: true,
        autoIncrement: true
    },
    userName:{
        type:DataTypes.STRING,
        field: 'username',
        allowNull:false,
        require:true
    },
    userEmail:{
        type:DataTypes.STRING,
        field:'email',
        allowNull:false,
        unique: true
    },
    userPass:{
        type:DataTypes.STRING,
        field:'password',
        allowNull:false,
        require:true
    }
},{
    sequelize,
    modelName: 'user',
    tableName: 'users',
    timestamps: true,
    createdAt: true,
    updatedAt: true,
    freezeTableName: true
});


module.exports = User;