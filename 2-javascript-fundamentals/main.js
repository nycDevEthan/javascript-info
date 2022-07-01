// 2.4 - https://javascript.info/variables
// TASKS

// Working with variables
let admin, name;

name = 'John';
admin = name;

alert(admin);

// Giving the right name

let ourPlanet = 'Earth';
let currentUser = 'Ethan';

// Uppercase const? - no code


// 2.15 - https://javascript.info/function-basics
// TASKS

// Is "else" required? - no code

// Rewrite the function using '?' or '||'

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you');
}

// Function min(a, b)

function min(a,b) {
    return (a <= b) ? a : b;
}

// Function pow(x,n)

// function pow(x,n) {
//     let power = Math.pow(x,n);
//     return power;
// }

function pow(x,n) {
    let power = x;

    for (let i = 1; i < n; i++) {
        power *= x;
    }

    return power;
}

let x = prompt("Enter x value: ", '');
let n = prompt("Enter n value: ", '');

if (x < 1 || n < 1) {
    alert('Value cannot be less than 1');
} else {
    pow(x,n);
}