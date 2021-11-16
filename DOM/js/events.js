const button = document.querySelector("#submit");
const mainTitle = document.querySelector(".main-title");
const secondButton = document.querySelector("#second-button");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
// const items = todoList.children;

// // Attaching an event listener

// button.addEventListener("click", addNewItem);

// function addNewItem() {
//     const newItem = document.createElement("li");
//     newItem.classList.add("item");
//     newItem.innerText = `Item ${items.length + 1}`;
//     todoList.appendChild(newItem);
//     todoNr.innerText = items.length;
// }

button.addEventListener("click", function (event) {
    console.log(event);
    mainTitle.classList.toggle("color");
});

secondButton.addEventListener("keydown", function (event) {
    if (event.keyCode === 81) {
        mainTitle.classList.toggle("color");
    }
});
