const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const config = require('./config/database');
const passport = require('passport');

mongoose.connect(config.database);
const db = mongoose.connection;
db.on('error', (err) => {
  console.log(err)
})

db.once('open', () => {
  console.log('mongo connected')
});

let User = require('./models/user');
let Course = require('./models/course');
let Enroll = require('./models/enroll');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(session({
  secret: 'topsecretthingyoullneverguessstupidbothaha',
  resave: true,
  saveUninitialized: true
}))
app.use(require('connect-flash')());
app.use((req, res, next) => {
  res.locals.messages = require('express-messages')(req, res);
  next();
})
app.use(expressValidator({
  errorFormatter: (param, msg, value) => {
    let namespace = param.split('.');
    let root = namespace.shift();
    let formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg,
      value
    }
  }
}))

require('./config/passport')(passport);
app.use(passport.initialize())
app.use(passport.session())

app.get('*', (req, res, next) => {
  res.locals.user = req.user || null;
  next();
})

app.get('/', (req, res) => {
  res.render('main_page', {
    title: 'Main Page'
  })
});

const courses = require('./routes/courses');
app.use('/courses', courses);

const users = require('./routes/users');
app.use('/users', users);

const enroll = require('./routes/enroll');
app.use('/enroll', enroll);

const server = app.listen(port, () => {
  console.log('server started');
});
