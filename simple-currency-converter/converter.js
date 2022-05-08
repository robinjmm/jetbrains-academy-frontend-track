//Write your code here
const input = require('sync-input');

console.log("Welcome to the Currency Converter!");
console.log(`1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`);
console.log("I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP");
console.log("Type the currency you wish to convert: USD");

let currencies = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GB: 0.75
};

let userDecision = input(`What do you want to do?
1-Convert currencies 2-Exit Program`);

while (userDecision !== "2") {
    console.log("What do you want to convert?");

    //Ask the user for currency input
    let fromCurrency = input("From: ").toUpperCase();
    let toCurrency = input("To: ").toUpperCase();

    // returns a boolean if input currency is inside currencies object.
    let validFromCurrency = currencies.hasOwnProperty(fromCurrency);
    let validToCurrency = currencies.hasOwnProperty(toCurrency);


    if (validFromCurrency && validToCurrency) {
        let amount = input("Amount: ");
        let intAmount;

        // check if the input amount is a valid number
        if (Number(amount) < 1) {
            console.log("The amount cannot be less than 1");
        } else if (isNaN(amount)) {
            console.log("The amount has to be a number");
        } else {
            intAmount = Number(amount);
        }

        // check if the it's the same of type of currency or different currencies.
        if (fromCurrency === toCurrency) {
            console.log(`Result: ${intAmount} ${fromCurrency} equals ${intAmount.toFixed(4)} ${toCurrency}`);
        } else {
            let converted = intAmount / currencies[fromCurrency] * currencies[toCurrency];
            console.log(`Result: ${intAmount} ${fromCurrency} equals ${converted.toFixed(4)} ${toCurrency}`);
        }
    } else {
        console.log("Unknown Currency");
    }
}