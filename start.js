'use strict'

const {db} = require('./server/db/database.js')
const app = require('./server')
const PORT = 3000;

db.sync()
  .then(function() {
    console.log('all synced UP')
    app.listen(PORT, () => console.log(`connected at PORT ${PORT}`))
  });
