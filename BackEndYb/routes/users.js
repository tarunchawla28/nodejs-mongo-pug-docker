const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { User } = require('../model/user')

router.post('/', async (req, res) => {
    console.log(req.body);
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })
    await user.save();
    res.render('default', { title: 'User Registration form' });
    //res.send(user);
})
/** router.get('/:id', async (req, res) => {
    console.log(req.params.id , "hello")
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('The user with given id was not found');
    // res.send(user);
    next();
    res.render('getusers',{ users:user});
})*/
router.get('/', async (req, res) => {
    if (req.query.id) {
        console.log("Id found", req.query.id);
        const user = await User.find({ _id: req.query.id });
        console.log(user);
        res.render('getusers', { users: user, title: 'User Registration form' })
    }
    else {
        const users = await User.find();
        //res.send(user);
        res.render('default', { title: 'User Registration form' });
    }
});
router.get('/all', async (req, res) => {
    const users = await User.find();
    //res.send(user);
    res.render('getusers', { users: users, title: 'User Registration form' });
});



/** router.post('/:id/:firstname', async (req, res) => {
    let user = await User.findByIdAndUpdate(req.params.id, { firstname: req.params.firstname }, {
        new: true
    });
    if (!user) return res.status(404).send('The user with given id was not found');
    user.firstname = req.params.firstname
})*/
module.exports = router