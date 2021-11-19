//? Map

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

const newVideos = videos.map(function (video) {
    return video.toUpperCase();
});

//? Find

const searchTutorial = videos.find(function (video) {
    return video.includes("FLEXBOX");
});

console.log(searchTutorial);

//? filter

const shortSearch = videos.filter(function (video) {
    return video.length < 10;
});

const highRating = vidya.filter(function (game) {
    return game.rating > 9;
});

console.log(highRating);
console.log(shortSearch);
