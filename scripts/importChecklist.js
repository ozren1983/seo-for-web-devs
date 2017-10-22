const Checklist = require('../models/Checklist')
const checklist = require('./checklist.json')
const mongoose = require('./mongooseInit')

let promises = []
for (checklistItem of checklist) {
    let bullets = []
    for (bullet of checklistItem.bullets) {
        bullets.push(bullet.title)
    }
    promises.push(new Checklist({title: checklistItem.title, bullets: bullets}).save())
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
