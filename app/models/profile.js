const { Model,DataTypes } = require("sequelize");
const sequilize = require("../../config/db");



class Profile extends Model{

}  

Profile.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        autoIncrement:true,
        require:true

    },    
    bio:{
        type:DataTypes.TEXT,
        require:true,
        defaultValue:''
    },
    user_id:{
        type:DataTypes.INTEGER,
        references:{
            model:'User',
            key:'id',
            deferrable:Deferrable.INITIALLY_IMMEDIATE
        }
    }
},{
    sequelize,
    modelName:'Profiles',
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp'
});


module.exports = Profile;