# Task 17 - Callbacks Hells and Promises

## 📌 Task Description

This task demonstrates how to use **Promises** in JavaScript to perform division and handle errors using `.then()` and `.catch()`.

The program checks whether the divisor is `0`. If it is `0`, the Promise is rejected with an error message. Otherwise, the division result is returned through `resolve()`.

## 🛠️ Concepts Used

* JavaScript Arrow Functions
* Promises
* `resolve()`
* `reject()`
* `.then()`
* `.catch()`
* Error handling
* Division operation

## 💻 Code

```javascript
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
```

## ▶️ How It Works

1. The `divide()` function accepts two numbers.
2. It creates and returns a Promise.
3. If the second number is `0`, the Promise is rejected.
4. Otherwise, the division result is resolved.
5. `.then()` handles successful results.
6. `.catch()` handles errors.
7. Multiple division operations are executed sequentially using Promise chaining.

## 📤 Expected Output

```text
Dividing 10 by 0...
Error: Division by zero is not allowed.

Dividing 10 by 3...
Result: 3.3333333333333335

Dividing 20 by 4...
Result: 5

Dividing 15 by 5...
Result: 3

Dividing 25 by 6...
Result: 4.166666666666667
```

## 🎯 Learning Objective

The main objective of this task is to understand how **JavaScript Promises** work and how `.then()` and `.catch()` can be used for handling successful and failed asynchronous operations.
