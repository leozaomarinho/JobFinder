const express = require('express');
const router = express.Router();
const Job = require('../models/jobs');


router.get('/test',(req,res)=>{
    res.send('Deu certo!');
})


//add job via post
router.post('/add',(req,res)=>{

    let {title, salary, company, description, email,new_job} = req.body;

    //insert
    Job.create({
        title,
        salary,
        description,
        company,
        email,
        new_job
    })

    .then( () => {
         res.redirect('/');
    })
    .catch(err =>console.log(err));

});

module.exports = router