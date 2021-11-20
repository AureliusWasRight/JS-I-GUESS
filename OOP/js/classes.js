class Enemy {
    constructor(health, name, level) {
        this.health = health;
        this.name = name;
        this.level = level;
    }
    getInfo() {
        console.log(this.name, this.health, this.level);
    }
}

const cat = new Enemy(25, "Flopper", 100);
const dog = new Enemy(10, "Woofer", 10);

cat.getInfo();
dog.getInfo();

class Dragon extends Enemy {
    constructor(health, name, level, color, spell) {
        super(health, name, level);
        this.color = color;
        this.spell = spell;
    }
}

const dragon = new Dragon(99, "Boi", 100, "red", "fire-breath");
dragon.getInfo();
