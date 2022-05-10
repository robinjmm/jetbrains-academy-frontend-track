// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let water = 400;
let milk = 540;
let beans = 120;
let cups = 9;
let money = 550;

let espresso = {
    water: 250,
    beans: 16,
    money: 4,
    cups: 1
}

let latte = {
    water: 350,
    milk: 75,
    beans: 20,
    money: 7,
    cups: 1
}

let cappuccino = {
    water: 200,
    milk: 100,
    beans: 12,
    money: 6
}

function outputLog(water, milk, beans, cups, money) {
    console.log(`The coffee machine has:
    ${water} ml of water
    ${milk} ml of milk
    ${beans} g of coffee beans
    ${cups} disposable cups
    $${money} of money`);
}


outputLog(water, milk, beans, cups, money);


console.log("Write action (buy, fill, take):");
let userInput = input();

if (userInput === "buy") {
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
    let coffeeChoice = input();

    if (coffeeChoice === "espresso") {
        water = water - espresso.water;
        beans = beans - espresso.beans;
        money = money + espresso.money;
        cups = cups - espresso.cups;

        outputLog(water, milk, beans, cups, money);
    } else if (coffeeChoice === "2") {
        water = water - latte.water;
        beans = beans - latte.beans;
        money = money + latte.money;
        cups = cups - latte.cups;

        outputLog(water, milk, beans, cups, money);
    } else if (coffeeChoice === "3") {
        water = water - cappuccino.water;
        beans = beans - cappuccino.beans;
        money = money + cappuccino.money;
        cups = cups - cappuccino.cups;

        outputLog(water, milk, beans, cups, money);
    }
} else if (userInput === "fill") {
    console.log("Write how many ml of water you want to add:");
    let fillWater = parseInt(input());
    water += fillWater;

    console.log("Write how many ml of milk you want to add:");
    let fillMilk = parseInt(input());
    milk += fillMilk;

    console.log("Write how many grams of coffee beans you want to add:");
    let fillBeans = parseInt(input());
    beans += fillBeans;

    console.log("Write how many disposable coffee cups you want to add:");
    let fillCups = parseInt(input());
    cups += fillCups;

    outputLog(water, milk, beans, cups, money);
} else if (userInput === "take") {
    console.log(`I gave you $${money}`);
    money -= money;

    outputLog(water, milk, beans, cups, money);
}