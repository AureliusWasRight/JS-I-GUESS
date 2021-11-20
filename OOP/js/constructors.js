//! Constructor Function

function Todo(name, completed) {
    console.log(this);
    this.name = name;
    this.completed = completed;
    this.getTodoName = () => {
        console.log(this.name);
    };
}

const todo = new Todo("Buy water", false);
const todo2 = new Todo("Buy milk", true);
const todo3 = new Todo("Buy apples", true);

const todoArray = [todo, todo2, todo3];

todoArray.forEach((todo) => {
    console.log(todo);
    todo.getTodoName();
});
