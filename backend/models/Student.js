const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Student = new Schema({
    
    name:{
        type:String,
        required:true                
    },
    age:{
        type:Number,
        required:true                
    },
    email:{
        type:String,
        required:true                
    },
    student_id:{
        type:String,
        required:true                
    },
    university:{
        type:String,
        required:true                
    },
    address:{
        type:String,
        required:true                
    },
    city:{
        type:String,
        required:true                
    },
    phone:{
        type:String,
        required:true                
    },
    register_date:{
        type:String,
        required:true                
    }
})

const student = mongoose.model("Student",Student);
module.exports = student;