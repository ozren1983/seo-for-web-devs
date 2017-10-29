const store = require('store')

const checklist = {
  // add single click event listener on the whole checklist
  init: () => {
    document.getElementById('checklist').addEventListener('click', (event) => {
      checklist.processClick(event.target)
    })
  },
  // process click on labels and inputs, and ignore all other elements
  processClick: (target) => {
    if (target.nodeName === 'LABEL') {
      checklist.writeToStore(target.previousSibling.id, target.previousSibling.checked)
    }
    else if (target.nodeName === 'INPUT') {
      checklist.writeToStore(target.id, target.checked)
    }
  },
  readFromStore: () => {
    store.each((value, key) => {
      if (value === true) {
        document.getElementById(key).checked = true
      }
    })
  },
  writeToStore: (id, value) => {
    store.set(`${id}`, value)
  }
}

window.addEventListener('load', () => {
  checklist.init()
  checklist.readFromStore()
})
