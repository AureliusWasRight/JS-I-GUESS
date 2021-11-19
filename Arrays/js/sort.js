const items = ["Banana", "Apple", "Kiwi", "Dragon Fruit"];
const rating = [10, 32, 134, 66, 13, 534, 34.3];
console.log(items);

const vidya = [
    { title: "Mass Effect", rating: 9.5 },
    { title: "League", rating: 0.1 },
    { title: "BingChilling", rating: 11 },
    { title: "GodOfChina", rating: 11 },
];

items.sort();
// rating.sort(); // ! converts to string and uses alphabeticall comparioson

// ? if return is negative a is sorted before b
// ? if return is positive b is sorted before a
// ? if return is equal then nothing changes
// ! IT WILL MODIFY THE ARRAY
rating.sort((a, b) => a - b);
console.log(rating);

// ? Descending order
rating.sort((a, b) => b - a);
console.log(rating);

const sortedVidya = vidya.sort((a, b) => b.rating - a.rating);

console.log(sortedVidya);
