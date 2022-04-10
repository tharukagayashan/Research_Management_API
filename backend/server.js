const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3003;

app.use(cors())
app.use(bodyParser.json());

const URL = "mongodb+srv://admin:admin@cluster0.mdeqy.mongodb.net/ReasearchDatabase?retryWrites=true&w=majority";

mongoose.connect(URL,{
    //useCreateIndex:true,
    //useFindAndModify:false,
    //useNewUrlParser:true,
    //useUnifiedTopology:true
}).then(()=>{
    console.log("MongoDB connected");
}).catch((err)=>{
    console.log(err);
});

let student = require('./routes/students.js');

app.use("/student",student);

app.listen(PORT,()=>{
    console.log(`Server is listening to port ${PORT}`);
});