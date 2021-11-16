const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");
const nameInput = document.querySelector(".name-input");
const items = todoList.children;

button.addEventListener("click", function (event) {
    event.preventDefault();
    //* create new element
    const newItem = document.createElement("li");
    //* add a class to it
    newItem.classList.add("item");
    //* add text
    newItem.innerText = nameInput.value;
    todoList.appendChild(newItem);
    todoNr.innerText = items.length;
    // ! Deleteing the value from the input
    nameInput.value = "";
    // ! Creating the element and attaching the listner to it
    newItem.addEventListener("click", deleteItem);

    console.log(nameInput);
});

function deleteItem(event) {
    //* - which element console.log(event.target);
    //* console.log("Delete item");
    event.stopPropagation(); // ! makes sure it will not bubble to other items
    event.target.remove(); // ! removes the element
}

todoList.addEventListener("click", () => chooseClass("fade"));

function chooseClass(a) {
    todoList.classList.toggle(a);
}
