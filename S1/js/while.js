// key - value pair
const user = {
    name: "Floppa", // <-- proprety
    age: 12351,
    subs: "OVERFLOW",
    money: 934431,
};

for (let x in user) {
    console.log(x);
}

for (let x in user) {
    console.log(user[x]);
}

console.log(user["subs"]);

let i = 20;
// alwas add increment

while (i < 30) {
    console.log(i);
    i++;
}

i = 0;
do {
    console.log(i);
    i++;
} while (i < 30);
