const express  = require('express');
const router = express.Router();

const parent = [
    {
        id:1,
        guardian:'Yaw Ampofo',
        occupation:'teacher',
        age:30
    },
    {
        id:2,
        guardian:'Yaw Youni',
        occupation:'carpenter',
        age:35
    }
];

//get request
router.get('/',(req,res) => {
    res.send(parent)
});

//post request
router.post('/create',(req,res) => {
    const record={
        id:req.body.id,
        guardian:req.body.guardian,
        occupation:req.body.occupation,
        age:req.body.age
    }
    parent.push(record)
    res.send(parent)
});


//fetching a single student data from the postman
router.get('/:id', (req, res) => {
    const parentData = parent.find(data =>
        data.id === parseInt(req.params.id))
    if (!parentData) {
        return res.status(404).send('student user do not exist')
    }
    res.send(parentData)
});

//updating a parent record in postman
router.put('/updateRecord/:id', (req, res) => {
    const ParentUser = parent.find(data =>
        data.id === parseInt(req.params.id))
    if (!ParentUser) {
        return res.status(404).send('parent record do not exist')
    }
    ParentUser.name=req.body.name;
    //this method update only where you specify
    ParentUser.class=req.body.class==undefined?ParentUser.age:req.body.class;//implementing the ternary operator
    ParentUser.age=req.body.age==undefined?ParentUser.age:req.body.age;//implementing the ternary operator
    res.send('successfully updated')
    // res.send(ParentUser)
});

//delete request
router.delete('/:id',(req,res) => {
    const ParentUser = parent.find(data =>  
        data.id === parseInt( req.params.id))
        if(ParentUser){
            return res.status(404).send('parent user do not exist')
        }
        const index = parent.indexOf(ParentUser)
        parent.splice(index,1);
    // res.send('successfully deleted')
    res.send(parent)
});
module.exports=router;