const nodeItems = document.querySelectorAll(".item");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr");

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 3";

const newItem1 = document.createElement("li");
newItem1.classList.add("item");
newItem1.innerText = "Item 4";

todoList.appendChild(newItem);
todoList.appendChild(newItem1);

console.log(nodeItems);

// *  Update the amount of items
todoNr.innerText = nodeItems.length;
