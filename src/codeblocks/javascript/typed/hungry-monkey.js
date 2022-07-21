let mangoes = [Math.PI]
mangoes[3] = "🥭";
console.log(`${mangoes.length}`);
mangoes[-1] = "🐍";
mangoes[Infinity] = "🥭";
mangoes.forEach((mango, index) => {
    console.log(`🐒 eating ${mango} at ${index}`);
});
