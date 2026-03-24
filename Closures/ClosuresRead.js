// the problem we are facing we need private data(hidden variable) and a state that persists btwn function call

//if u dont use closures u can see we have a global variable working fine like closure but any can change the value of global means no private data and we also want that even if
// outer function finished but inner function has access to its global variable insider outer variable values

// let count = 0;

// function increment() {
//     count++;
//     console.log(count);
// }

// increment();
// increment();

//after closure: A function to remember its variables even after the outer function is finished | Closure = function + its remembered variables
// question arise when i saw closure code why they storing function in var, then i found to keep reference of inner function, bcz each outer get called new count variable get created to keep memory alive we have to do

function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    }
}

const counter = createCounter();
counter();
counter();


function bankAccount() {
    let balance = 1000;

    return {
        deposit(amount) { //this is method shorthand writing function key: function() only work inside object
            balance += amount;
            console.log("successful")
        },
        getBalance() {
            return balance;
        }
    }
}

const lunchKeBaad = bankAccount();

console.log(lunchKeBaad.getBalance());
lunchKeBaad.deposit(500);
console.log(lunchKeBaad.getBalance());


// benefit of closure: data hiding, maintain stata, no pollution of global scope, used in async code[below for loop run and each settimeout remeber i value]

for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 3000);
}

/**
 one more question when we can make private variable using # then why need closure
 # this came after closure means closure was present before it and second to create that u need classes way and also why you creating cls, object memory consuming but by closure
 in functional way we are able to achieve, CLOSURE ARE LIGHTER THAN CREATING ENTIRE CLASSE INSTANCE

 ADDED BY AI
 The Class Approach (#)
Use this when you are building Blueprints for objects. It’s perfect for Object-Oriented Programming (OOP).
Logic: The data is tied to an "Instance" of a class.
Syntax: this.#password = 123;
Best for: Large structures, like a User class or a DatabaseConnection class.

The Closure Approach
Use this when you are using Functional Programming. It’s perfect for small, portable pieces of logic.
Logic: The data is tied to a "Function scope."
Best for: Event handlers, Middleware, Timers, and "Function Factories

 */

/**
 Added by AI
 
 The Problem with Global Variables:
If you store a counter in a global variable so that multiple functions can use it, any piece of code in your entire app can accidentally change it. This leads to buggy, insecure code.

The Solution (Closure):
Closures allow us to create a "Private Sanctuary" for data. The data stays alive (like a global variable) but is only accessible to one specific function (like a local variable).
 */