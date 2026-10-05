const divide = (num1, num2) => {
    console.log(`Dividing ${num1} by ${num2}...`);

    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("Division by zero is not allowed.");
        } else {
            resolve(num1 / num2);
        }
    });
};

divide(10, 0)
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Error:", error))
    .then(() => divide(10, 3))
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Error:", error))
    .then(() => divide(20, 4))
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Error:", error))
    .then(() => divide(15, 5))
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Error:", error))
    .then(() => divide(25, 6))
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Error:", error));