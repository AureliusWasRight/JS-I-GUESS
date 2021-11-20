//! pointer -> it refers to and object
//? this in object returs object
//? this.attribute  returns object attribute
const user = {
    name: "Devboi",
};

const admin = {
    name: "admin",
};

function sayHi() {
    console.log(this);
}

function yell() {
    console.log(this.name.toUpperCase());
}

user.yell = yell;
admin.yell = yell;
user.yell();
admin.yell();

user.hi = sayHi;
admin.hi = sayHi;
user.hi();
admin.hi();

sayHi();
