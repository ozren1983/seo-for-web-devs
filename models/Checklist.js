const mongoose = require('mongoose')
// use built in ES6 Promises
mongoose.Promise = global.Promise

const checklistSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: 'Please enter a title!',
        trim: true,
    },
    bullets: [String]
})

module.exports = mongoose.model('Checklist', checklistSchema)
