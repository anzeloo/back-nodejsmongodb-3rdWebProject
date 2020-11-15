//ESTE ES EL ENRUTADOR -> 
const express = require('express');
const router = express.Router();
//importo el schema de user
//const User = require('../models/user');


//está leyendo el index.ejs
router.get('/', async (req,res) => {
    //const users = await User.find();
    //console.log(users);
    //res.render('index',{
      //  users //users: users
    //});
});

module.exports = router;