let ifItWalksLikeADuck = it => !!it.waddle && it.waddle() === "waddle";
let itQuacksLikeADuck = it => !!it.quack && it.quack() === "quack";
let itMustBeADuck = it => ifItWalksLikeADuck(it) && itQuacksLikeADuck(it);
let lordLoveA = it => console.log(`Lord love a ${it.constructor.name}!`);

class Duck {
    waddle() { return "waddle"; };
    quack() { return "quack" };
}

class LectricDuck {
    mostPeopleGetHappy() {};
    sickInTheMind() {};
    T_H_M() {};
}

let duck = new Duck();
if (itMustBeADuck(duck)) {
    lordLoveA(duck);
}
let lectricDuck = new LectricDuck();
console.log(itMustBeADuck(lectricDuck));
lectricDuck.waddle = () => "waddle";
lectricDuck.quack = () => "quack";
if (itMustBeADuck(lectricDuck)) {
    lordLoveA(lectricDuck);
}
