//! Functions -> special objects
//* Bind Call Apply

const person = {
    firstName: "Big",
    lastName: "Floppa",
    getName() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    },
};

person.getName();

function registerUser(country, language) {
    //? Additional functionality....
    this.getName();
    console.log(`My country is ${country} and my language is ${language}`);
}

// ? Bind passes a reference to a function and copies
const register = registerUser.bind(person);
register("Byzanitum", "Koine Greek");

// ? Call invokes a method does not copy

registerUser.call(person, "Assyria", "Arabic");

// ? Apply
registerUser.apply(person, ["Italy", "IT"]);
