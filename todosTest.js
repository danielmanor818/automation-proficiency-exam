const todoPage = require (`./todos`)
let todopage = new todoPage(`https://elevation-local-todo.herokuapp.com/`)
todopage.insertAndComplete()
