const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const session =  require("express-session");
const morgan = require("morgan");

//config file

const corsOptions =  require("./config/cors");
const db = require("./config/db");

//router file
const userRoutes = require("./router/user");


app.options('*',cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use( session( {
    resave: true,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET
} ) );

//router
app.use('/user',userRoutes);
//router
app.get('/',(req,res,next) => {
    res.send("<h1>hola</h1>");
    next();
});


db.testConnection();


app.listen(process.env.PORT, ()=>{
    console.log(`aplication running on port ${process.env.PORT}`);
});


