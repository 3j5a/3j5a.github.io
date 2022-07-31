let ifItWalksLikeADuck = it => typeof it.waddle === "function"
let itQuacksLikeADuck = it => typeof it.quack === "function"
let itMustBeADuck = it => ifItWalksLikeADuck(it) && itQuacksLikeADuck(it);

let duckenstein = it => {
    it.__proto__.quack = () => console.log("quack");
    it.__proto__.waddle = () => console.log("waddle");
    return it;
}

[Infinity, false, "not a duck", /.*/, {}, Symbol("@"), null, undefined].forEach(it => {
    try {
        it = duckenstein(it);
        if (itMustBeADuck(it)) {
            console.log(`${it.constructor.name}, ${it.toString()} - It's Aduck!`)
        }
    } catch (err) {
        console.log(`${it} - I am alone and miserable. Only someone as ugly as I am could love me.`)
    }
})
