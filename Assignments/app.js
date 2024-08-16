function checkNumber() {
    const number = parseFloat(document.getElementById('numberInput').value);

    if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else if (number === 0) {
        console.log("The number is zero.");
    } else {
        console.log("Please enter a valid number.");
    }
}
