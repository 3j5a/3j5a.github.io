function* mangoInfinityGenerator() {
    for(let i = 0; i < Infinity; i++) {
        yield "🥭";
    }
}
let mangoInfinity = mangoInfinityGenerator();
let nextMango;
while(nextMango = mangoInfinity.next().value) {
    console.log(`🐒 eating ${nextMango}`)
}
