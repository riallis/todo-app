const Todo = require('./todo')

Todo.methods(['get', 'post','put', 'delete', 'options'])
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo