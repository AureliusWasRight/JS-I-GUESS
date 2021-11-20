//! Constructor Function

function Todo(name, completed) {
    console.log(this);
    this.name = name;
    this.completed = completed;
}
// ! prototype which will be inherited
// ! by objects constructed from Todo
Todo.prototype.getTodoName = function () {
    console.log(this.name);
};

const todo = new Todo("Buy water", false);
const todo2 = new Todo("Buy milk", true);
const todo3 = new Todo("Buy apples", true);

const todoArray = [todo, todo2, todo3];

todoArray.forEach((todo) => {
    todo.getTodoName();
    console.log(todo);
});

const arr = [1, 2, 3, 4, 5];
console.log(arr);

arr.push(6);
console.log(arr);

const newArray = new Array(1, 2, 3, 4, 5, 6);
console.log(newArray);
newArray.push(10);
console.log(newArray);

const newObject = new String("Devboi");
console.log(newObject);
