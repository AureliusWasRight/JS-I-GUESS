const videos = [
    "Software Engineering",
    "Stuff made stuff",
    "FLEXBOX MASTERRACE",
    "FLEXBOX Tutorial",
    "css",
    "java",
    "cpp",
];

const vidya = [
    { title: "Mass Effect", rating: 9.5 },
    { title: "League", rating: 0.1 },
    { title: "BingChilling", rating: 11 },
    { title: "GodOfChina", rating: 11 },
];

//? Map
// * turnary operator

const newVideos = videos.map(function (video) {
    return video.toUpperCase();
});

// const newIf = videos.map(function (video) {
//     if (video.length < 10) {
//         return video;
//     } else {
//         return "bing";
//     }
// });

const newTurnary = videos.map(function (video) {
    return video.length < 10 ? video : "nope";
});

console.log(newTurnary);

//? Find

const searchTutorial = videos.find(function (video) {
    return video.includes("FLEXBOX");
});

// console.log(searchTutorial);

//? filter

const shortSearch = videos.filter(function (video) {
    return video.length < 10;
});

const highRating = vidya.filter(function (game) {
    return game.rating > 9;
});

// console.log(highRating);
// console.log(shortSearch);

// ? some and every
// As long as 1 element true - some
// All elements must be equal to value - every
const checkRating = vidya.every(function (game) {
    return game.rating > 8;
});

// console.log(checkRating);

const checkAgane = vidya.some(function (game) {
    return game.rating > 8;
});

// console.log(checkAgane);
