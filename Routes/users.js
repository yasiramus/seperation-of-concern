const express = require('express')
const router = express.Router()
const Users = [
    {
        id: 1,
        firstName: "Kofi",
        lastName: "Agyemang",
        age: 22
    },
    {
        id: 2,
        firstName: "Alex",
        lastName: "Mensah",
        age: 25
    }
];

//post request for sending data to the postman
router.post('/create', (req, res) => {
    const userData = {
        //this automatically increases the id number
        id: Users.length + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    }
    //the push method add the data to the declare variable which is the student
    Users.push(userData)
    res.send(Users)
});
//get request
router.get('/', (req, res) => {
    res.send(Users)
});

//fetching a single student data from the postman
router.get('/:id', (req, res) => {
    const userData = Users.find(data =>
        data.id === parseInt(req.params.id))
    if (!userData) {
        return res.status(404).send('user do not exist')
    }
    res.send(userData)
});

//put request
router.put('/create', (req, res) => {
    const user_data = Users.find(data =>
        data.id === parseInt(req.params.id))
    if (!user_data) {
        return res.status(404).send('user do not exit')
    }
    user_data.firstName = req.body.firstName;
    user_data.lastName = req.body.lastName == undefined ? user_data.lastName : req.body.lastName;
    user_data.age = req.body.age == undefined ? user_data.age : req.body.age;
    res.send('user details has been updated successfully')
});

//delete request
router.delete('/:id', (req, res) => {
    const user = Users.find(data =>
        data.id === parseInt(req.params.id))
    if (!user) {
        return res.status(404).send('userData do not exist')
    }
    const index = Users.indexOf(user)
    Users.splice(index, 1);
    // res.send('successfully deleted')
    res.send(user)
});
module.exports = router