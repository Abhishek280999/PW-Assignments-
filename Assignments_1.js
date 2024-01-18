/*
Q1 Writ a program that grads studnts basd on thir mar s
 If gratr than 90 thn A Grad
 If btwn 70 and 90 thn a B grad
 If btwn 50 and 70 thn a C grad
 Blow 50 thn an F grade
*/

function calculateGrade(mark) {
    if (mark > 90) {
        return 'A';
    } else if (mark >= 70 && mark <= 90) {
        return 'B';
    } else if (mark >= 50 && mark < 70) {
        return 'C';
    } else {
        return 'F';
    }
}
console.log(calculateGrade(95))


/*
Generate numbers btwn any 2 givn numbers.
*/

function generateNumbersBetween(start, end) {
    
    if (start > end) {
        console.error('Invalid input: start should be less than or equal to end.');
        return [];
    }

    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return result;
}

// Example: Generating numbers between 5 and 10
let numbersBetween5And10 = generateNumbersBetween(5, 10);
console.log(numbersBetween5And10);


/*
Use a nested ternary operator to check that a number is positive, negative or zero. You have to print
“positive” if the number is positive and similarly for negative and zero also.
*/
function checkNumberStatus(number) {
    const result = number > 0 ? "positive" : (number < 0 ? "negative" : "zero");
    console.log(`The number is ${result}.`);
}

// Example usage:
checkNumberStatus(5);   // Output: The number is positive.
checkNumberStatus(-2);  // Output: The number is negative.
checkNumberStatus(0);   // Output: The number is zero.



/*
Describe the usage of the comma operator in JavaScript and provide an example.
*/

var x = 1, y = 2, z = 3;

var result = (x++, y++, z++);

console.log(result);  // Output: 3 (the value of the last expression, which is z++)
console.log(x, y, z); // Output: 2 3 4 (each variable has been incremented by 1)


/*
You're creating a basic login system. Make a login function with two things: a username and a
password. Check if the username is "admin" and the password is "12345". If they're both correct, show "Login
successful"; if not, show "Invalid credentials."
*/


function login(username, password) {
    // Check if the provided username and password are correct
    if (username === "admin" && password === "12345") {
        console.log("Login successful");
    } else {
        console.log("Invalid credentials");
    }
}

// Example usage:
login("admin", "12345");   // Output: Login successful
login("user", "password"); // Output: Invalid credentials


/* You are working on an e-commerce platform. Write a JavaScript program that takes the payment
method ("credit", "debit", or "paypal") as input and uses a switch statement to determine and print the
processing fee associated with each payment method. For example, "credit" may have a processing fee of
2%, "debit" 1.5%, and "paypal" 3%. */

function calculateProcessingFee(paymentMethod) {
    let processingFee;

    switch (paymentMethod) {
        case "credit":
            processingFee = 2;
            break;
        case "debit":
            processingFee = 1.5;
            break;
        case "paypal":
            processingFee = 3;
            break;
        default:
            console.log("Invalid payment method");
            return;
    }

    console.log(`The processing fee for ${paymentMethod} is ${processingFee}%.`);
}

// EXP
calculateProcessingFee("credit");  // Output: The processing fee for credit is 2%.
calculateProcessingFee("debit");   // Output: The processing fee for debit is 



/*
You are building a weather application. Write a JavaScript program that takes the current temperature
as input and uses the conditional (ternary) operator to determine and print the weather condition. If the
temperature is above 30°C, the condition is "Hot"; otherwise, it is "Moderate".
*/

function determineWeatherCondition(temperature) {
    let weatherCondition = temperature > 30 ? "Hot" : "Moderate";
    console.log(`The weather condition is ${weatherCondition}.`);
}


determineWeatherCondition(25);  // Output: The weather condition is Moderate.
determineWeatherCondition(35);  // Output: The weather condition is Hot.



/*
You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
given integer.
*/

function calculateSumOfNumbers(n) {
   
    if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
        console.log("Please enter a valid positive integer.");
        return;
    }

    let sum = 0;
    let i = 1;

    do {
        sum += i;
        i++;
    } while (i <= n);

    console.log(`The sum of numbers from 1 to ${n} is: ${sum}`);
}

// Example usage:
calculateSumOfNumbers(5);   // Output: The sum of numbers from 1 to 5 is: 15
calculateSumOfNumbers(10);  // Output: The sum of numbers from 1 to 10 is: 55
calculateSumOfNumbers(-3);  // Output: Please enter a valid positive integer.
calculateSumOfNumbers(3.5); // Output: Please enter a valid positive integer.
