//ESTE ES EL ENRUTADOR -> 
const express = require('express');
const router = express.Router();
//importo el schema de user
const User = require('../models/user');


//está leyendo el index.ejs
router.get('/', async (req,res) => {
    const users = await User.find();
    //console.log(users);
    res.render('index',{
        users //users: users
    });
});

//req.body -> return un .json
router.post('/add', async (req,res) => {
    const user = new User(req.body);
    await user.save();
    res.redirect('/');
});

router.get('/edit/:id' , async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.render('edit', {
        user
    });

});


router.post('/edit/:id', async (req,res) => {
    const { id } = req.params;
    await User.update({_id: id}, req.body);
    res.redirect('/');
});



router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await User.remove({_id: id});
    res.redirect('/');
});

module.exports = router;