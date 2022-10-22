const input = require('sync-input');

console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);

let usdToJpy = 113.5;
let usdToEur = 0.89;
let usdToRub = 74.36;
let usdToGbp = 0.75;

let listOfCurr = ["JPY", "EUR", "RUB", "USD", "GBP"];

let condition = true;
do {
    console.log("What do you want to do?");
    let action = Number(input("1-Convert currencies 2-Exit program\n"));
    if (action === 1) {
        console.log("What do you want to convert?");
        let convertFrom = input("From: ").toUpperCase();
        let isConvertFromNotSupported = listOfCurr.find(curr => curr === convertFrom) === undefined;
        if (isConvertFromNotSupported) {
            console.log("Unknown currency.");
        } else {
            let convertTo = input("To: ").toUpperCase();
            let isConvertToNotSupported = listOfCurr.find(curr => curr === convertTo) === undefined;
            if (isConvertToNotSupported) {
                console.log("Unknown currency.");
            } else {
                let amount = Number(input("Amount: "));
                if (!Number.isInteger(amount)) {
                    console.log("The amount has to be a number.");
                } else if (amount < 1) {
                    console.log("The amount cannot be less than 1");
                } else {
                    let usdAmount;
                    let result;
                    switch (convertFrom) {
                        case "USD": {
                            usdAmount = amount;
                            break;
                        }
                        case "JPY": {
                            usdAmount = amount / usdToJpy;
                            break;
                        }
                        case "EUR": {
                            usdAmount = amount / usdToEur;
                            break;
                        }
                        case "RUB": {
                            usdAmount = amount / usdToRub;
                            break;
                        }
                        case "GBP": {
                            usdAmount = amount / usdToGbp;
                            break;
                        }
                    }

                    switch (convertTo) {
                        case "USD": {
                            result = usdAmount.toFixed(4);
                            break;
                        }
                        case "JPY": {
                            result = (usdToJpy * usdAmount).toFixed(4);
                            break;
                        }
                        case "EUR": {
                            result = (usdToEur * usdAmount).toFixed(4);
                            break;
                        }
                        case "RUB": {
                            result = (usdToRub * usdAmount).toFixed(4);
                            break;
                        }
                        case "GBP": {
                            result = (usdToGbp * usdAmount).toFixed(4);
                            break;
                        }
                    }
                    console.log(`Result: ${amount} ${convertFrom} equals ${result} ${convertTo}`);
                }

            }
        }
    }
    else if (action === 2) {
        condition = false;
        console.log("Have a nice day!");
    } else {
        console.log("Unknown input");
    }
} while (condition);
