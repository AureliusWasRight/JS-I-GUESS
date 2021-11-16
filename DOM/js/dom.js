const collectionItems = document.getElementsByClassName("item");
const nodeItems = document.querySelectorAll(".item");

for (item of collectionItems) {
    console.log(item);
}

nodeItems.forEach(function (item) {
    console.log(item);
});

for (item of nodeItems) {
    console.log(item);
}
