// const list = document.querySelectorAll("li");

// list.forEach((li) => {
//     li.addEventListener("click", function () {
//         console.log(this);
//     });
// });

const user = {
    name: "devboi",
    videos: ["html", "css", "vue", "node"],
    greet() {
        console.log(`Hello there ${this.name}`);
        // ? Add function
        const getVideos = () => {
            console.log(`You currently have ${this.videos.length} videos`);
        };
        getVideos();
    },
    check() {
        console.log(`Hello there ${this.name}`);
        this.videos.forEach((video) => {
            console.log(this.name);
        });
    },
};

user.greet();
user.check();
