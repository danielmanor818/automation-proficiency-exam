const SeleniumInfra = require(`./seleniumInfra`)
const seleniumInfra = new SeleniumInfra()
class TodosPage {
    constructor(URL) {
        seleniumInfra.getURL(URL)
    }
    async insertAndDelete(todoText) {
        try {
            let todotext1 = "make brakefast"
            await seleniumInfra.write(todotext1, "id", "todo-input") // sends keys to the input box
            await seleniumInfra.clickElement("id", "addToDo") // clicks on the "add" button
            if (await seleniumInfra.isElementExists("xpath", "//div[@class='todo']")) {
                console.log("new div found") // checks if a new div was made
            }
            else {
                console.error("error! new div was not found")
            }
            if (await seleniumInfra.getTextFromElement("xpath", "//span[@class='text']")) {
                console.log(`got the text from new div `) // gets the texts fron the element
            }
            else {
                console.error(`error`)
            }
            if (await seleniumInfra.clickElement("xpath", "//span[@class='delete']")) {
                await console.log(`clicked the delete button`) // clicks the red delete button, it work even if the console says it dosn't
            }
            else {
                console.error(`error! could not click on the delete button`)
            }
            if (await seleniumInfra.isElementExists("xpath", "//div[@class='todo']")) {
                console.log("error! element still alive")
            }
            else {
                console.log("element deleted")
            }
        }

        catch (error) {
            console.error(`got an error tying to acces the function`)
        }


    }
module.exports = TodosPage