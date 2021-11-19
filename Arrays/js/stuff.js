//? Map

const videos = [
    "Software Engineering",
    "Stuff made stuff",
    "FLEXBOX MASTERRACE",
];
console.log(videos);

const newVideos = videos.map(function (video) {
    return video.toUpperCase();
});

const moreVideos = videos.map(function (video) {
    console.log(video);
});

const addedVidoes = videos.map(function (video) {
    return video;
});

addedVidoes.push("Yo");

console.log(videos);
console.log(newVideos);
console.log(moreVideos);
console.log(addedVidoes);
