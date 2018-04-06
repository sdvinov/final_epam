const express = require('express');
const router = express.Router();

let Course = require('./../models/course');

router.get('/add', (req, res) => {
  Course.find({}, (err, courses) => {
    if(err) {
      console.log(err);
    } else {
      res.render('add', {
        title: 'Add Course',
        courses
      })
    }
  })
});

router.post('/add', (req, res) => {
  let course = new Course();
  course.name = req.body.name;
  course.length = req.body.length;
  course.save((err) => {
    if (err) {
      console.log(err);
    } else {
      req.flash('success', 'success')
      res.redirect('/')
    }
  })
})

router.get('/:id', (req, res) => {
  Course.findById(req.params.id, (err, course) => {
    res.render('course', {
      course
    })
  })
})

module.exports = router;
