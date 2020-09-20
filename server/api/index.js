const router = require('express').Router();

router.use('/buildings', require('./buildings'));
router.use('/users', require('./users'));
router.use('/auth', require('./google'))

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
