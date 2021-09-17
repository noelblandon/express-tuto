const User = require("../models/user");
const { sequelize }  = require("../../config/db");


const userRequest = (request) => {
    return {
        name:request.name,
        email:request.email
    }
}

const getAllData = (req,res)=>{
    console.log("hola");
    res.send("<h1>User</h1>");
}

const createUser = async(req,res)=>{

    const request = userRequest(req.body);
    const t = await sequelize.transaction();

    try {
     
        const newUser = await User.create(request, { transaction: t });
        await newUser.save();
        res.json(newUser);
        await t.commit();
    } catch (error) {
        await t.rollback();

        if(error.original)
             res.status(500).json({'msg':error.original.sqlMessage}); 
        
        
        if(error instanceof TypeError)
          res.status(500).json({'error':error.message});

    }   

}

const updateUser = async(req,res)=>{

    const request = userRequest(req.body);
    const t = await sequelize.transaction();

    try {
     
        const newUser = await User.create(request, { transaction: t });
        await newUser.save();
        res.json(newUser);
        await t.commit();
    } catch (error) {
        await t.rollback();

        if(error.original)
             res.status(500).json({'msg':error.original.sqlMessage}); 
        
        
        if(error instanceof TypeError)
          res.status(500).json({'error':error.message});

    }   

}

const deleteUser = async(req,res)=>{

    const request = userRequest(req.body);
    const t = await sequelize.transaction();

    try {
     
        const newUser = await User.create(request, { transaction: t });
        await newUser.save();
        res.json(newUser);
        await t.commit();
    } catch (error) {
        await t.rollback();

        if(error.original)
             res.status(500).json({'msg':error.original.sqlMessage}); 
        
        
        if(error instanceof TypeError)
          res.status(500).json({'error':error.message});

    }   

}


module.exports = { getAllData, createUser};