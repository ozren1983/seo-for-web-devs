const Checklist = require('../models/Checklist')


exports.checklist = (req, res) => {
  Checklist
    .find()
    .select({title: true, bullets: true})
    .then(checklist => {
      res.render('checklist', {
        title: 'Web Developer\'s SEO Checklist',
        checklist: checklist
      })
    })
    .catch(err => {
      res.status(500)
      res.render('error', {
        status: 'Checklist not available.',
        message: 'We\'re having some problems fetching the checklist. Please try again a little bit later.'
      })
    })
}
