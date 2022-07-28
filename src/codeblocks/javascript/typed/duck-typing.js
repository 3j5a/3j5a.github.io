let ifItWalksLikeADuck = it => !!it.waddle && it.waddle() === "waddle";
let itQuacksLikeADuck = it => !!it.quack && it.quack() === "quack";
let itMustBeADuck = it => ifItWalksLikeADuck(it) && itQuacksLikeADuck(it);
let lordLove = it => console.log(`Lord love ${it}!`);

class Duck {
    waddle() { return "waddle"; };
    quack() { return "quack" };
    toString() { return "a Duck"; }
}

class ElectricDuck {
    mostPeopleGetHappy() {};
    sickInTheMind() {};
    T_H_M() {};
    toString() { return "The Electric Duck"; }
}

let duck = new Duck();
if (itMustBeADuck(duck)) {
    lordLove(duck);
}
let electricDuck = new ElectricDuck();
console.log(itMustBeADuck(electricDuck));
electricDuck.waddle = () => "waddle";
electricDuck.quack = () => "quack";
if (itMustBeADuck(electricDuck)) {
    lordLove(electricDuck);
}
