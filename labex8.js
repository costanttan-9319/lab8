// Reusable logic for both dice
function rollDice(faces) {
    return Math.floor(Math.random() * faces) + 1;
}

function handleRoll(diceValue) {
    // 1. Calculate the result
    let outcome = rollDice(diceValue);
    
    // 2. Target the HTML ID to display the result
    document.getElementById("displayResult").innerHTML = outcome;

    // 3. Perform a Unit Test right in the console
    runUnitTest(outcome, diceValue);
}
//Test function to verify
function runUnitTest(result, maxSides) {
    if (result >= 1 && result <= maxSides) {
        console.log("TEST PASSED");
    } else {
        console.error("TEST FAILED");
    }
}