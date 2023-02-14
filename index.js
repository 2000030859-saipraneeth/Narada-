const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const userAuths = require('./routes/auth');
const postRoute = require('./routes/posts');
dotenv.config();
mongoose.connect("mongodb://localhost:27017/Narada",{useNewUrlParser:true, useUnifiedTopology: true},()=>{
    console.log("connected to db")
})


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users",userRoute);
app.use("/api/auth",userAuths);
app.use("/api/posts",postRoute);


// app.get("/",(req,res)=>{
//     res.send("welcome to homepage")
// })

// app.get("/users",(req,res)=>{
//     res.send("welcome to userpage")
// })

app.listen(8800,()=>{
    console.log("Backend  is running!")
})