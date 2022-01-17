const express = require('express');
//importing the routes
const Parent = require('../Routes/parents');
const Student = require('../Routes/students');
const User = require('../Routes/users');
const Port = 6000;
const app = express();
//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//using the routes
app.use('/parents', Parent);
app.use('/student', Student)
app.use('/user',User);

app.listen(Port, () => {
    console.log('server listening on port ' + Port);
});