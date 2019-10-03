const SeleniumInfra = require(`./seleniumInfra`)
const seleniumInfra = new SeleniumInfra()
class TodosPage {
    constructor(URL) {
        seleniumInfra.getURL(URL)
    }

    async insertAndDelete(input) {
        try {
            await seleniumInfra.write(input, "id", "todo-input")
            await seleniumInfra.clickElement("id", "addToDo")
            console.log(`clicked on the add button in TodosPage`)
            if (await seleniumInfra.isElementExists("id", input)) {
                console.log(`found a new div`)
                return true
            }
            else {
                console.error(`cant find a new div`)
            }

            await seleniumInfra.clickElement("class", "delete", `<div data-id="1jx2o6eun3ie" class="todo">`)
            if (await seleniumInfra.isElementExists("id", input)) {
                console.log(`the div was not deleted`)
                return true
            }
            else {
                console.log(`the div was deleted`)
            }

        }

        catch (error) {
            console.error(`got an error tying to find if rlrmrnt exists`)
        }

    }

    async insertAndComplete(input) {
        try {
            await seleniumInfra.write(input, "id", "todo-input")
            await seleniumInfra.clickElement("id", "addToDo")
            console.log(`clicked on the add button in TodosPage`)
            if (await seleniumInfra.isElementExists("id", input)) {
                console.log(`found a new div`)
                return true
            }
            else {
                console.error(`error : cant find a new div`)
            }
            await seleniumInfra.clickElement("class", "fas fa-check-circle", `<i class="fas fa-check-circle">`)
            if (await seleniumInfra.isElementExists("class", "todo-complete")) {
                console.log(`the div was checked`)
                return true
            }
            else {
                console.log(`error: the div was NOT checked`)
            }

        }
        catch (error) {
            console.error(`got an error tying to activate the func`)
        }

    }

    async insertTwoDeleteFirst(todoText1, todoText2) {
        try {
            await seleniumInfra.write(input, "id", "todo-input")
            await seleniumInfra.clickElement("id", "addToDo")
            console.log(`clicked on the add button in TodosPage`)
            if (await seleniumInfra.isElementExists("id", input)) {
                console.log(`found a new div ${todoText1}`)
                return true
            }
            else {
                console.error(`error : cant find a new div`)
            }
            await seleniumInfra.write(input, "id", "todo-input")
            await seleniumInfra.clickElement("id", "addToDo")
            console.log(`clicked on the add button in TodosPage`)
            if (await seleniumInfra.isElementExists("id", input)) {
                console.log(`found a new div ${todoText2}`)
                return true
            }
            else {
                console.error(`error : cant find a new div`)
            }
        }
        catch (error) {
            console.error(`got an error trying to activate the func`)
        }
    }
}
module.exports = TodosPage
