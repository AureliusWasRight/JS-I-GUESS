const user = {
    name: "BOI",
    age: 25,
    is_ceo: false,
    greet: function () {
        console.log("Hello there, " + user.name);
    },
};

user.greet();
console.warn("WARNING");
console.error("CRITICAL ERROR");
