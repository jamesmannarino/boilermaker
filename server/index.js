const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session')
const passport = require('passport');

const SequelizeStore = require('connect-session-sequelize')(session.Store)

const db = require('./db/database.js')
require('./secrets')

const dbStore = new SequelizeStore({ db: db })
dbStore.sync();

const app = express();
app.use(morgan('dev'))

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', require('./api'));

app.use(session({
  secret: process.env.SESSION_SECRET || 'not secure secret',
  store: dbStore,
  resave: false,
  saveUninitialized: false
}));

passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(done);
});

//session logging middleware
app.use((req, res, next) => {
  console.log('SESSION: ', req.session)
  next()
})

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = process.env.PORT || 3000;
db.sync()
  .then(function() {
    console.log('all synced UP')
    console.log(process.env.GOOGLE_CLIENT_ID)
    app.listen(PORT, () => console.log(`connected at PORT ${PORT}`))
  });

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app
