const router = require("express").Router();
const student = require("../models/Student");

router.route("/insert").post((req,res)=>{
    let name = req.body.name;
    let age = req.body.age;
    let email = req.body.email;
    let student_id = req.body.student_id;
    let university = req.body.university;
    let address = req.body.address;
    let city = req.body.city;
    let phone = req.body.phone;
    let register_date = req.body.register_date;

    const studentObj = new student({
        name,
        age,
        email,
        student_id,
        university,
        address,
        city,
        phone,
        register_date
    });

    studentObj.save().then(()=>{
        res.json("Insert data successfully");
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/").get((req,res)=>{
    student.find().then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    })
});

router.route("/:id").get((req,res)=>{
    
    const id = req.params.id;
    
    student.findById(id).then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put((req,res)=>{

    const id = req.params.id;

    let name = req.body.name;
    let age = req.body.age;
    let email = req.body.email;
    let student_id = req.body.student_id;
    let university = req.body.university;
    let address = req.body.address;
    let city = req.body.city;
    let phone = req.body.phone;
    let register_date = req.body.register_date;

    const studentUpdateObj = {
        name,
        age,
        email,
        student_id,
        university,
        address,
        city,
        phone,
        register_date
    };

    student.findByIdAndUpdate(id,studentUpdateObj).then((updateData)=>{
        res.json(updateData);
    }).catch((err)=>{
        console.log(err);
    });
});

router.route("/delete/:id").delete((req,res)=>{

    const id = req.params.id;

    student.findByIdAndDelete(id).then(()=>{
        console.log("Deleted Successfully");
        res.json("Deleted Successfully");
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;