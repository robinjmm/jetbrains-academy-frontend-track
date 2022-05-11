// Use "prompt()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
// const input = require('sync-input')

let defaultState = {
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9,
    money: 550
}

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
    money: 6,
    cups: 1
}

function outputLog() {
    console.log(`The coffee machine has:
    ${defaultState.water} ml of water
    ${defaultState.milk} ml of milk
    ${defaultState.beans} g of coffee beans
    ${defaultState.cups} disposable cups
    $${defaultState.money} of money`);
}

function compute(coffee) {
    for (let key in coffee) {
        if (key === "money") {
            defaultState[key] = defaultState[key] + coffee[key]
        } else {
            defaultState[key] = defaultState[key] - coffee[key]
        }
    }
}


outputLog();


console.log("Write action (buy, fill, take):");
let userInput = prompt();

if (userInput === "buy") {
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
    let coffeeChoice = prompt();

    if (coffeeChoice === "1") {
        compute(espresso);
        outputLog();
    } else if (coffeeChoice === "2") {
        compute(latte);
        outputLog();
    } else if (coffeeChoice === "3") {
        compute(cappuccino);
        outputLog();
    } else {
        console.log("Invalid Input");
    }
} else if (userInput === "fill") {
    console.log("Write how many ml of water you want to add:");
    defaultState.water += parseInt(prompt());

    console.log("Write how many ml of milk you want to add:");
    defaultState.milk += parseInt(prompt());

    console.log("Write how many grams of coffee beans you want to add:");
    defaultState.beans += parseInt(prompt());

    console.log("Write how many disposable coffee cups you want to add:");
    defaultState.cups += parseInt(prompt());

    outputLog();
} else if (userInput === "take") {
    console.log(`I gave you $${defaultState.money}`);
    defaultState.money -= defaultState.money

    outputLog()
}