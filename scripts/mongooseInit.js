// Init mongoose for usage in scripts
const mongoose = require('mongoose')

mongoose.set('debug', true)

// Connect to our Database and handle an bad connections
require('dotenv').config({ path: '../variables.env' })

mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`)
})

exports.mongoose = mongoose
