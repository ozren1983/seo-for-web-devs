/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

require('dotenv').config({ path: 'variables.env' })

// Some details about the site
exports.siteName = 'SEO for Web Devs'

exports.gaTrackingID = process.env.GA_TRACKING_ID
exports.mailchimpListID = process.env.MAILCHIMP_LIST_ID
