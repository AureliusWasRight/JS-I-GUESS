// ? Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// * Event Listeners

todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(event) {
    // Prevent from refreshing
    event.preventDefault();

    //* Create div which will hold todos
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //* Create todo item (li)
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    todoInput.value = "";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //* Checkmark button
    const checkmarkButton = document.createElement("button");
    checkmarkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkmarkButton.classList.add("checkmark-btn");
    todoDiv.appendChild(checkmarkButton);

    //* Trash button
    const removeButton = document.createElement("button");
    removeButton.innerHTML = '<i class="fas fa-trash"></i>';
    removeButton.classList.add("remove-btn");
    todoDiv.appendChild(removeButton);

    //* Append to list
    todoList.appendChild(todoDiv);
}
