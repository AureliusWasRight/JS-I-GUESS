const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
const items = todoList.children;

// Attaching an event listener

button.addEventListener("click", addNewItem);

function addNewItem() {
    const newItem = document.createElement("li");
    newItem.classList.add("item");
    newItem.innerText = `Item ${items.length + 1}`;
    todoList.appendChild(newItem);
    todoNr.innerText = items.length;
}
