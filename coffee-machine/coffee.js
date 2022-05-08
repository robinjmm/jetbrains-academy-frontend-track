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

const water = 200;
const milk = 50;
const beans = 15;

console.log("Write how many ml of water the coffee machine has:");
let storedWater = Number(input()) / water;


console.log("Write how many ml of milk the coffee machine has:");
let storedMilk = Number(input()) / milk;


console.log("Write how many grams of coffee beans the coffee machine has:");
let storedBeans = Number(input()) / beans;


let minimum = Math.floor(Math.min(storedWater, storedMilk, storedBeans));

console.log("Write how many cups of coffee you will need:");
let cupsOfCoffee = Number(input());

if (cupsOfCoffee === minimum) {
    console.log("Yes, I can make that amount of coffee");
} else if (cupsOfCoffee < minimum) {
    console.log(`Yes, I can make that amount of coffee (and even ${minimum - cupsOfCoffee} more than that)`)
} else {
    console.log(`No, I can only make ${minimum} cups of coffee`);
}