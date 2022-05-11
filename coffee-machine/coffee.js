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
    // use ternary operator to avoid displaying negative values
    console.log(`The coffee machine has:
    ${defaultState.water < 0 ? 0 : defaultState.water} ml of water
    ${defaultState.milk < 0 ? 0 : defaultState.milk} ml of milk
    ${defaultState.beans < 0 ? 0 : defaultState.beans} g of coffee beans
    ${defaultState.cups < 0 ? 0 : defaultState.cups} disposable cups
    $${defaultState.money} of money`);
}

function compute(coffee) {
    // check if the coffee machine has sufficient ingredients
    let isEnough = false;
    for (let amount in coffee) {
        if (amount === "money") {
            continue;
        } else if (defaultState[amount] < coffee[amount]) {
            console.log(`Sorry, not enough ${amount}`);
            break;
        } else {
            isEnough = true;
        }
    }

    // the coffee machine has enough ingredients and can start making coffee
    if (isEnough) {
        console.log("I have enough resources, making you a coffee!");
        for (let key in coffee) {
            if (key === "money") {
                defaultState[key] = defaultState[key] + coffee[key]
            } else {
                defaultState[key] = defaultState[key] - coffee[key]
            }
        }
    }
    askUser();
}

function askUser() {
    console.log("Write action (buy, fill, take, remaining, exit):");
    userInput = prompt();
}

function fillCoffeeMachine() {
    console.log("Write how many ml of water you want to add:");
    defaultState.water += parseInt(prompt());

    console.log("Write how many ml of milk you want to add:");
    defaultState.milk += parseInt(prompt());

    console.log("Write how many grams of coffee beans you want to add:");
    defaultState.beans += parseInt(prompt());

    console.log("Write how many disposable coffee cups you want to add:");
    defaultState.cups += parseInt(prompt());
}

console.log("Write action (buy, fill, take, remaining, exit):");
let userInput = prompt();

// Continuously ask user for input and end the program when the input is "exit".
while (userInput !== "exit") {
    if (userInput === "buy") {
        console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to menu");
        let coffeeChoice = prompt();
        if (coffeeChoice.toLowerCase() === "back") {
            askUser();
        } else if (coffeeChoice === "1") {
            compute(espresso);
        } else if (coffeeChoice === "2") {
            compute(latte);
        } else if (coffeeChoice === "3") {
            compute(cappuccino);
        } else {
            console.log("Invalid Input");
        }
    } else if (userInput === "fill") {
        fillCoffeeMachine();
        askUser();
    } else if (userInput.toLowerCase() === "take") {
        console.log(`I gave you $${defaultState.money}`);
        defaultState.money -= defaultState.money
        askUser();
    } else if (userInput.toLowerCase() === "remaining") {
        outputLog();
        askUser();
    } else {
        console.log("Invalid Input");
        askUser();
    }
}