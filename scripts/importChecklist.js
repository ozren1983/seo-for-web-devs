const Checklist = require('../models/Checklist')
const checklist = require('./checklist.json')
const mongoose = require('./mongooseInit')

const promises = []

for (checklistItem of checklist) {
  const bullets = []
  for (bullet of checklistItem.bullets) {
    bullets.push(bullet.title)
  }
  promises.push(new Checklist({ title: checklistItem.title, bullets }).save())
}

Promise.all(promises)
  .then(resp => {
    console.log('Import finished.')
    process.exit()
  })
  .catch(err => {
    console.error(err)
    process.exit()
  })
