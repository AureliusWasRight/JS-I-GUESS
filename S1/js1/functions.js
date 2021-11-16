function greet(name, email) {
    console.log("Welcome to our webiste " + name + " at " + email);
}

console.log("rest of the code");

function sign_up() {
    let name = prompt("What is your name");
    let email = prompt("What is your email");
    greet(name, email);
}

// sign_up();

console.log(Math.random());
console.log(Math.max(1, 3, 5));

let n_max = Math.max(1, 5, 7, 1, 123, 63463);
console.log(n_max);

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(max(12, 32));

// can assign default values
// to funciton parameters
function min(a = 0, b = 0) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(3));
