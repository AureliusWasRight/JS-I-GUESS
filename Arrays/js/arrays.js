let bank = 250;
let newBank = bank;

newBank = 500;

console.log(bank, newBank);

const names = ["bank", "dev", "js"];

const newNames = names;

newNames.push("Floppa");

console.log(newNames);

console.log(`names ${names}`);

const tweets = {
    name: "Dev",
    tweets: 20,
    age: 30,
};

const newTweet = tweets;
newTweet.tweets = 21;

console.log(tweets);
