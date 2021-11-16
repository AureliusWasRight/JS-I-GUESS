let user_name = "Banana";
let fruit_number = 0;

function a(user_name) {
    switch (user_name) {
        case "Banana": {
            console.log("Hello Banana");
            fruit_number = 1;
            break;
        }
        case "Apple": {
            console.log("Hello Apple");
            fruit_number = 2;
            break;
        }
        case "Orange": {
            console.log("Hello Orange");
            fruit_number = 3;
            break;
        }
        default: {
            console.log("WRONG FRUIT");
            break;
        }
    }
}

a(user_name);

user_name = "Apple";
a(user_name);

user_name = "";
a(user_name);

let user_input = prompt("Choose a  fruit");
let converted_input = user_input.toLowerCase();

console.log(converted_input);

switch (converted_input) {
    case "kiwi": {
        alert("You chose a kiwi");
        break;
    }
    case "banana": {
        alert("You chose a banana");
        break;
    }
    default: {
        alert("Unknown fruit");
        break;
    }
}
