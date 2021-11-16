const names = ["Dev", "Couxe", "Floppa", "Logic", "Boooo"];

for (let name of names) {
    if (name === "Floppa") {
        console.log("STOPPING LOOP");
        break;
    }
    console.log(name);
}

// gets index of each string

for (let name of names) {
    console.log(names.indexOf(name));
}

// ForEach is reserved for arrays;
/* Can only break out of loops
names.forEach(function (name, index) {
    if(name === "Floppa")
    {
        break;
    }
    console.log(name, index);
});
*/

names.forEach(function (name, index) {
    console.log(name, index);
});

const nums = [1, 2, 3, 4, 5, 6];

for (let n of nums) {
    console.log(n);
}
