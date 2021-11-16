const list_of_users = ["Larry", "Moe", "Curly", "DEV"];

console.log(typeof list_of_users);

function display(a = []) {
    for (i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
}

display(list_of_users);

// list_of_users.pop();
// list_of_users.push("NEW");
// list_of_users.shift();
// list_of_users.unshift("NEW");
// display(list_of_users);

// list_of_users.shift();
// display(list_of_users);
