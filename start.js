// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' })

// add this to the VERY top of the first file loaded in your app
const opbeat = require('opbeat').start()

const mongoose = require('mongoose')

// Connect to our Database and handle an bad connections
mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`)
})

// READY?! Let's go!

// import all of our models
require('./models/Checklist')

// Start our app!
const app = require('./app')

app.set('port', process.env.PORT || 7777)

// any errors caught by Express can be logged by Opbeat as well
app.use(opbeat.middleware.express())

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`)
})

