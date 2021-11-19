const items = ["Banana", "Apple", "Kiwi", "Dragon Fruit"];
const ratings = [10, 32, 134, 66, 13, 534, 34.3];

const vidya = [
    { title: "Mass Effect", rating: 9.5 },
    { title: "League", rating: 0.1 },
    { title: "BingChilling", rating: 11 },
    { title: "GodOfChina", rating: 11 },
];

// ? Copying the array
const descRating = [...ratings];
const ascRating = [...ratings];

console.log(descRating);
console.log(ascRating.sort((a, b) => a - b));
console.log(descRating.sort((a, b) => b - a));
console.log(ratings);

const name = "devbozo";
const letters = [...name];

const allItems = [...items, ...ratings];
const newItems = ["this", "is", "bozo", ...ratings];
console.log(allItems);
console.log(newItems);
