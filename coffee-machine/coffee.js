// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

console.log(`Starting to make a coffee
Grinding coffee beans
Boiling water
Mixing boiled water with crushed coffee beans
Pouring coffee into the cup
Pouring some milk into the cup
Coffee is ready!
`);

let ingredients = {
    water: 200,
    milk: 50,
    beans: 15
}

console.log("Write how many cups of coffee you will need:");
const cupsOfCoffee = Number(input());

console.log(`For ${cupsOfCoffee} cups of coffee you will need:`)
for (let ingredient in ingredients) {
    if (ingredient === 'beans') {
        console.log(`${ingredients[ingredient] * cupsOfCoffee} g of coffee beans`);
    } else {
        console.log(`${ingredients[ingredient] * cupsOfCoffee} ml of ${ingredient}`);
    }
}