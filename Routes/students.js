const express = require('express');
const router = express.Router();

//declaring a variable
const student = [
    {
        id: 1,
        name: 'Ayisha Yakubu',
        class: 5,
        age: 10
    },
    {
        id: 2,
        name: 'Alhassan Insuah',
        class: '3',
        age: 13
    }
];
//post request for sending data to the postman
router.post('/create', (req, res) => {
    const studentData = {
        //id:student.length+1,
        //this automatically increases the id number
        id: student.length + 1,
        name: req.body.name,
        class: req.body.class,
        age: req.body.age
    }
    //the push method add the data to the declare variable which is the student
    student.push(studentData)
    res.send(student)
});

//fetching all student data from the postman
router.get('/', (req, res) => {
    res.send(student)
});

//fetching a single student data from the postman
router.get('/:id', (req, res) => {
    const studentUser = student.find(data =>
        data.id === parseInt(req.params.id))
    if (!studentUser) {
        return res.status(404).send('student user do not exist')
    }
    res.send(studentUser)
});

//updating a student record in postman
router.put('/updateRecord/:id', (req, res) => {
    const studentUser = student.find(data =>
        data.id === parseInt(req.params.id))
    if (!studentUser) {
        return res.status(404).send('student record do not exist')
    }
    studentUser.name=req.body.name;
    //this method update only where you specify
    studentUser.class=req.body.class==undefined?studentUser.age:req.body.class;//implementing the ternary operator
    studentUser.age=req.body.age==undefined?studentUser.age:req.body.age;//implementing the ternary operator
    res.send('successfully updated')
    // res.send(studentUser)
});

//delete request, deleting a single user data
router.delete('/:id', (req, res) => {
    const studentUser = student.find(data =>
        data.id === parseInt(req.params.id))
    if (!studentUser) {
        return res.status(404).send('student user do not exist')
    }
    const index = student.indexOf(studentUser);
    //the splice method delete the data 
    student.splice(index, 1);
    res.send('successfully deleted')
    // res.send(student)
});
module.exports = router;