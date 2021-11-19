// ! Higher order functions are ones which take other functions in
// ! Higher order example
function repeater(fn) {
    fn();
    fn();
    fn();
}

function sayHello() {
    console.log("Hello");
}

repeater(sayHello);

repeater(function () {
    console.log("Hello, there");
});

const videos = [
    "Software Engineering",
    "Stuff made stuff",
    "FLEXBOX MASTERRACE",
];

videos.forEach(function (video) {
    console.log("run");
    console.log(video);
});

button.addEventListener("click", function () {
    console.log(10);
});
