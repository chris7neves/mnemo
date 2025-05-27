// const { container } = require("webpack");
import { ItemContainer } from "./itemContainer.js"
import { Item } from "./item.js"


const containerSpace = document.getElementById("container-space")
const todoSpace = document.getElementById("todo-space")
const habitSpace = document.getElementById("habit-space")
const newProjectBtn = document.getElementById("new-project-btn")
const scheduelSpace = document.getElementById("schedule-space")


const containerMap = new Map(); // Keeps the actual container items. Link the uuid of the items to the data in the html


newProjectBtn.addEventListener("click", (event) => {

    // Create new container
    let container = new ItemContainer();

    // Add to the containermap
    containerMap.set(container.uuid, container)

    // Generate the html for the container
    let containerHtml = createContainerCardHTML(container)

    // Add it to the space
    addContainerHtmlToSpace(todoSpace, containerHtml)
})



function createItemHTML(item) { // Maybe let this delegate to a todo or a habit function
    let itemDom = document.createElement("li")
    itemDom.classList.add("item")
    itemDom.innerText("Todo")

    return itemDom;
}


function addItem(item, container) {
    /**
     * Takes in an item object and a reference to a container, and adds it.
     */


}

function createContainerCardHTML(itemContainer) {
    /**
     * I need to use this to create containers and not raw html so i can add event listeners to the new todo button.
     */
    let label = itemContainer.label
    console.log(label)

    // Container Card
    let containerCard = document.createElement("div")
    containerCard.classList.add("container-card")
    containerCard.dataset.containerId = itemContainer.uuid
    
    // Make the container card label
    let containerLabel = document.createElement("span")
    containerLabel.classList.add("container-card-label")
    containerLabel.innerText = label
    containerCard.append(containerLabel)

    // Make the container card add item button
    let addItemButton = document.createElement("button")
    addItemButton.innerHTML = "&#xFF0B"
    addItemButton.classList.add("newitem-button")
    addItemButton.dataset.parentId = itemContainer.uuid 

    addItemButton.addEventListener("click", function (event) {
        let parentContainer = containerMap.get(event.target.dataset.parentId)

        //
    })

    containerCard.append(addItemButton)

    return containerCard
}

function addContainerHtmlToSpace(space, containerHtml) {
/**
 * Given a space, adds the html of a container and adds it to the map tracking it as a kv pair.
 */
    space.append(containerHtml)
}

let todoContainer = new ItemContainer()
containerMap.set(todoContainer.uuid, todoContainer)
addContainerHtmlToSpace(todoSpace, createContainerCardHTML(todoContainer))

let habitContainer = new ItemContainer("Habits")
containerMap.set(habitContainer.uuid, habitContainer)
addContainerHtmlToSpace(habitSpace, createContainerCardHTML(habitContainer))