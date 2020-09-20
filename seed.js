const { green, red } = require('chalk');

const { db, User } = require('./server/db')

const users = [
  {
    id: 1,
    email: 'james@mail.com',
    password: '123'
  },
  {
    id: 2,
    email: 'john@mail.com',
    password: '456'
  }
]

const seed = async() => {
  try {
    await db.sync({force: true})
    await Promise.all(users.map(user => {
      return User.create(user)
    }))
  } catch(err) {
    console.log(red(err))
  }
}

seed()
console.log(require.main)

module.exports = seed
