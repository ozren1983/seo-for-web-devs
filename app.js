const express = require('express')
const path = require('path')

const errorHandlers = require('./handlers/errorHandlers')
const helpers = require('./helpers')
const routes = require('./routes')


// create our Express app
const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')))

// pass variables to our templates + all requests
app.use((req, res, next) => {
  res.locals.h = helpers
  next()
})

// After allllll that above middleware, we finally handle our own routes!
app.use('/', routes)

// If the above routes didn't work, we 404 them and forward to error handler
app.use(errorHandlers.notFound)

// One of our error handlers will see if these errors are just validation errors
app.use(errorHandlers.flashValidationErrors)

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors)
}

// production error handler
app.use(errorHandlers.productionErrors)

// done! we export it so we can start the site in start.js
module.exports = app
