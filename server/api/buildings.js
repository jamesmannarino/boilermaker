const router = require('express').Router()

router.get('/', (req, res, next) => {
  try {
    res.json()
  } catch(err) {
    next(err)
  }
})

router.get('/:buildingId', (req, res, next) => {
  try {
    res.json()
  } catch(err) {
    next(err)
  }
})

module.exports = router;
