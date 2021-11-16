//* both local storage and session storage can only store strings

// ? Local Storage
// ! To clear use localStorage.clear()

// localStorage.setItem("todo", "Feed the cat!");
// localStorage.setItem("user", "Joe");
// localStorage.setItem("todo", "Feed myself!");

// ? Session Storage
// sessionStorage.setItem("todoList", "Session cat feedin");

//? Retrieveing from local storage
// const user = localStorage.getItem("user");
// console.log(user);
// console.log(typeof user);

const todoList = ["feed the cat", "feed the mouse", "feed the dog"];

const todoListObject = {
    todo1: "feed the cat",
    todo2: "feed the dog",
};

// ! use JSON method to strigify the array so that we retain the array structure
// ! allowing  localstorage to do it gets rid of brackets and puts commas
localStorage.setItem("todo", JSON.stringify(todoList));
localStorage.setItem("todoObject", JSON.stringify(todoListObject));

// ! converts stringified array into an actual array
// ! same with object
const retrieved = JSON.parse(localStorage.getItem("todo"));
const retrievedObject = JSON.parse(localStorage.getItem("todoObject"));
console.log(retrieved);
console.log(retrievedObject);
