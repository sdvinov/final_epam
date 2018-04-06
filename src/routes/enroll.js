const express = require('express');
const router = express.Router();

let Enroll = require('./../models/enroll');
let User = require('./../models/user');

router.post('/', function(req, res){
  req.checkBody('name','Name is required').notEmpty();
  req.checkBody('date','Date is required').notEmpty();
  let errors = req.validationErrors();

  if(errors){
    console.log(errors);
  } else {
    let enroll = new Enroll();
    enroll.userId = req.user._id;
    enroll.name = req.body.name;
    enroll.date = req.body.date;

    console.log(enroll)

    enroll.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
        res.redirect('/dashboard');
      }
    });
  }
});

module.exports = router;
