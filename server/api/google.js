const router = require('express').Router()
const passport = require('passport');
const User = require('../db/user');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('../secrets')
require('../db/user')

const googleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}

const strategy = new GoogleStrategy(googleConfig, (token, refreshToken, profile, done) => {
  const googleId = profile.id;
  const name = profile.displayName;
  const email = profile.emails[0].value;

  User.findOne({
    where: {
      googleId: googleId
    }
  }).then(user => {
    if(!user) {
      return User.create({name, email, googleId})
        .then(user => {
          done(null, user)
        })
    } else {
      done(null, user)
    }
  })
    .catch(done)
})

passport.use(strategy)

router.get('/google', passport.authenticate('google', { scope: 'email' }));

router.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

module.exports = router
