const Sequelize = require('sequelize')
const db = require('./database')

const Building = db.define('building', {
  address: {
    type: Sequelize.STRING
  },
  score: {
    type: Sequelize.INTEGER,
    validate: {
      max: 100,
      min: 0
    }
  }
})
