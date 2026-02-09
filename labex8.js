// 1. Reusable logic for both dice
function rollDice(faces) {
    return Math.floor(Math.random() * faces) + 1;
}

// 2. Main function called by the HTML buttons
function handleRoll(diceValue) {
    let outcome = rollDice(diceValue);
    document.getElementById("displayResult").innerHTML = outcome;
    runUnitTest(outcome, diceValue);
}

// 3. Unit Test function
function runUnitTest(result, maxSides) {
    if (result >= 1 && result <= maxSides) {
        console.log("TEST PASSED");
    } else {
        console.error("TEST FAILED");
    }
}

//running unit test
runUnitTest(5,6)
runUnitTest(8,6)
runUnitTest(2,6)
runUnitTest(5,10)
runUnitTest(18,10)
runUnitTest(12,10)