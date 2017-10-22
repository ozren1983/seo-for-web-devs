const path = require('path')

module.exports = {
  entry: './src/js/checklist.js',
  output: {
    filename: 'checklist.js',
    path: path.resolve(__dirname, 'public/js')
  }
}
