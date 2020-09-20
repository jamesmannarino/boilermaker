const User = require('../db/user')
const router = require('express').Router()

router.put('/login', async(req, res, next) => {
  try {
    console.log('req.body:: ', req.body.email)
    const user = await User.findOne({
      where: {
        email: req.body.email,
      }
    })
    if(user) {
      req.login(user, user => {
        res.json(user)
      })
    } else {
      res.sendStatus(404)
    }
  } catch(err) {
    next(err)
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    await User.create(req.body)
    req.login(user => {
      res.json(user)
    })
    res.json(newUser)
  } catch (err) {
    next(err)
  }
});

router.get('/logout', (req, res, next) => {
  try {
    console.log(req.body)
    req.logout();
    //where is 204??
    res.status(204).redirect('/')
  } catch (err) {
    next(err)
  }
})

module.exports = router
