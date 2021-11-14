let a = 10;
let b = 10;
let c = 20;

console.log(a == b);
console.log(c != a);

// TRUE???
console.log(10 == "10");

// triple compare
// typechecking
// FALSE
console.log(10 === `10`);

const access = true;

if (access) {
    console.log("true");
} else {
    console.log("no access");
}

if (access && a === 10) {
    console.log("AND");
}

const age = 15;
const bank = 100;

if (age >= 18) {
    console.log("You are old enough");
} else if (bank > 30) {
    console.log("You have neough money");
} else {
    console.log("Godobye");
}
