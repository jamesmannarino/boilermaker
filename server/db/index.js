const db = require('./database');
const Building = require('./building');
const User = require('./user')

// User.hasMany(Building)

module.exports = {
  db,
  Building,
  User
}
