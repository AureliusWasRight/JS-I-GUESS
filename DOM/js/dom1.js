const collectionItems = document.getElementsByClassName("item");
const todoList = document.getElementById("todo-list");
const todoNr = document.getElementsByClassName("todo-nr")[0];

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 3";

const newItem1 = document.createElement("l1");
newItem1.classList.add("item");
newItem1.innerText = "Item 4";

todoList.append(newItem, newItem1);

console.log(collectionItems);

// *  Update the amount of items
todoNr.innerText = collectionItems.length;
