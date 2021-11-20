function Enemy(health, name, level) {
    this.health = health;
    (this.name = name), (this.level = level);
}

Enemy.prototype.getInfo = function () {
    console.log(this.name, this.health, this.level);
};

Enemy.prototype.attack = function () {
    console.log(`${this.name} has attacked!`);
};

Enemy.prototype.block = function () {
    console.log(`${this.name} has blocked!`);
};

function Dragon(health, name, level, color, spell) {
    //! Keyword this references the Dragon object
    Enemy.call(this, health, name, level);
    //? Define dragon-specific attributes as normal
    this.color = color;
    this.spell = spell;
}

// ? Inheriting prototypes
Dragon.prototype = Object.create(Enemy.prototype);

Dragon.prototype.fireBreath = function () {
    console.log("Fire breath");
};

const newDragon = new Dragon(100, "Smaug", 25, "red", "lazyiness");

console.log(newDragon);
console.log(newDragon.attack());
