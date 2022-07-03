// Ethan O'Connell - 6/19/22
// Reading through entire https://javascript.info/object-basics chapter and doing tasks.  Went through this section again for review and practice.
// https://javascript.info/object
// Tasks

// Hello, object
// importance: 5
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Check for emptiness
// importance: 5
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }

    return true;
}

// Sum object properties
// importance: 5
// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

function sumSalaries(obj) {
    let sum = 0;
    for (let key in obj) {
        console.log(obj[key]);
        sum += obj[key];
    }
    return sum;
}

// Multiply numeric property values by 2
// importance: 3
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) === "number") {
            obj[key] *= 2;
        }
    }
}

// Ethan O'Connell 6/19/22
// https://javascript.info/object-copy
// Example code practice - typed out in VS Studio Code and tested in Chrome console

let message = "Hello";
let phrase = message;

let user = {
    name: "John"
};

let user = { name: "John" };
let admin = user; 

let user = { name: 'John' };
let admin = user;
admin.name = 'Pete';
alert(user.name);

let a = {};
let b = a;

alert (a == b);
alert (a === b);

let a = {};
let b = {};

alert (a == b);

let user = {
    name: "John",
    age: 30
};

let clone = {};

for (let key in user) {
    clone[key] = user[key];
}

clone.name = 'Pete';

alert (user.name);

//Object.assign

let user = { name: 'John' };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2);

let user = { name: 'John' };

Object.assign(user, { name: 'Pete' });

alert ( user.name );

let user = {
    name: 'John',
    age: 30
};

let clone = Object.assign({}, user);

let user = {
    name: 'John',
    sizes: {
        height: 182,
        width: 50
    }
};

alert ( user.sizes.height );

//

let user = {
    name: 'John',
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user);

alert ( user.sizes === clone.sizes);

user.sizes.width++;
alert(clone.sizes.width);

var objects = [{ 'a': 1}, { 'b': 2}];

var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);

//

const user = {
    name: 'John'
};

user.name = 'Pete';

alert(user.name);

// Ethan O'Connell 6/20/22
// https://javascript.info/garbage-collection
// Example code practice - typed out in VS Studio Code and tested in Chrome console

let user = {
    name: "John"
};

//

let user = {
    name: "John"
};

let admin = user;

user = null;

//

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});

delete family.father;
delete family.mother.husband;

//

family = null;

// Ethan O'Connell 6/21/22
// https://javascript.info/object-methods
// Example code practice - typed out in VS Studio Code and tested in Chrome console
// Tasks after example code
let user = {
    name: "John",
    age: 30
};

//

let user = {
    name: "John",
    age: 30
};

user.sayHi = function() {
    alert("Hello!");
};

user.sayHi();

// 

let user = {

};

function sayHi() {
    alert("Hello!");
}

user.sayHi = sayHi;

user.sayHi();

//

user = {
    sayHi: function() {
        alert("Hello");
    }
};

user = {
    sayHi() {
        alert("Hello");
    }
};

//

let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(this.name);
    }
};

// 

let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(user.name);
    }

};

//

// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         alert( user.name ); // error
//     }

// };

let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert( this.name ); // works
    }

};

let admin = user;
user = null;

admin.sayHi();

//

function sayHi() {
    alert(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
    alert (this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();

admin['f']();

//

function sayHi() {
    alert(this);
}

sayHi();

//

let user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user.sayHi();

// Tasks
// https://javascript.info/object-methods#tasks
// Using "this" in object literal
// importance: 5
// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?

function makeUser() {
    return this;
}

alert (makeUser().name);

function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}

let user = makeUser();

alert (user.ref().name);

// Create a calculator
// importance: 5
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {};

calculator.read = function() {
    this.a = Number(prompt("Enter in the first value", 0));
    this.b = Number(prompt("Enter in the second value", 0));
}

calculator.sum = function() {
    return this.a + this.b;
}

calculator.mul = function() {
    return this.a * this.b;
}

// let calculator = {
//     read() {
//         this.a = Number(prompt("Enter in the first value", 0));
//         this.b = Number(prompt("Enter in the second value", 0));
//     },

//     sum() {
//         return this.a + this.b;       
//     },

//     mul() {
//         return this.a * this.b;        
//     }
// };

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//

// Chaining
// importance: 2
// There’s a ladder object that allows to go up and down:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // shows the current step
//     alert( this.step );
//   }
// };
// Now, if we need to make several calls in sequence, can do it like this:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Modify the code of up, down and showStep to make the calls chainable, like this:

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// Such approach is widely used across JavaScript libraries.

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
    }
  };

// Ethan O'Connell 7/1/22
// https://javascript.info/constructor-new
// Example code practice - typed out in VS Studio Code and tested in Chrome console

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false

// 

let user = {
    name: "Jack",
    isAdmin: false
}

//

let user = new function() {
    this.name = "John";
    this.isAdmin = false;
}

//

function User() {
    alert(new.target);
}

User();

new User();

//

function User(name) {
    if (!new.target) {
        return new User(name);
    }

    this.name = name;
}

let john = User("John");
alert(john.name);

//

function BigUser() {
    this.name = "John";

    return { name: "Godzilla" };
}

alert( new BigUser().name );

function SmallUser() {
    this.name = "John";

    return;
}

alert ( new SmallUser().name );

//

let user = new User;

let user = new User();

//

function User(name) {
    this.name = name;

    this.sayHi = function() {
        alert( "My name is: " + this.name );
    };
}

let john = new User("John");

john.sayHi();

/*
john = {
    name: "John",
    sayHi: function() {
        alert( "My name is: " + this.name );
    }
}
*/

//

///////
//Tasks
///////

// Two functions – one object
// importance: 2
// Is it possible to create functions A and B so that new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A;
// let b = new B;

// alert( a == b ); // true
// If it is, then provide an example of their code.

// function A() {
//     this.sayHi = function() {
//         alert("This is a method")
//     }
// }

// function B() {
//     this.sayHi = function() {
//         alert("This is a method")
//     }
// }

// let a = new A;
// let b = new B;

// alert ( a == b ); // false - same function contents - wrong answer

let obj = {};

function A() { return obj };
function B() { return obj };

alert ( new A() === new B() ); // true - correct answer - returns same externally defined object

// Create new Calculator
// importance: 5
// Create a constructor function Calculator that creates objects with 3 methods:

// read() asks for two values using prompt and remembers them in object properties.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.
// For instance:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator() {
    this.read = function() {
        this.n1 = Number(prompt("Enter the first number", 0));
        this.n2 = Number(prompt("Enter the second number", 0));
    }

    this.sum = function() {
        return this.n1 + this.n2;
    }

    this.mul = function() {
        return this.n1 * this.n2;
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// Create new Accumulator
// importance: 5
// Create a constructor function Accumulator(startingValue).

// Object that it creates should:

// Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

// Here’s the demo of the code:

// let accumulator = new Accumulator(1); // initial value 1

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// alert(accumulator.value); // shows the sum of these values

function Accumulator(startingValue) {

    this.value = startingValue;

    this.read = function() {
        this.value += Number(prompt("Enter a value to add to accumulator", 0));
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);

// Ethan O'Connell 7/1/22
// https://javascript.info/optional-chaining
// Example code practice - typed out in VS Studio Code and tested in Chrome console

let user = {};

alert(user.address.street);

let html = document.querySelector('.elem').innerHTML;

//

let user = {};

alert(user.address ? user.address.street : undefined);

let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;

let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;

//

let user = {};

alert(user.address ? user.address.street ? user.address.street.name : null : null)

// 

let user = {};

alert ( user.address && user.address.street && user.address.street.name );

let user = {
    address: {
        street: "123 nyc ave",
        city: "NYC",
        state: "NY"
    }
};

alert ( user?.address?.street );

let html = document.querySelector('p')?.innerText;

let user = null;

alert(user?.address);
alert(user?.address.street);

//

user?.address;

//

let user = null;
let x = 0;

user?.sayHi(x++);

alert(x);

//

let userAdmin = {
    admin() {
        alert("I am admin");
    }
};

let userGuest = {};

userAdmin.admin?.();

userGuest.admin?.();

//

let key = "firstName";

let user1 = {
    firstName: "John"
}

let user2 = null;

alert ( user1?.[key]);
alert( user2?.[key]);

delete user1?.firstName;

//

let user = null;

user?.name = "John";

// Ethan O'Connell 7/1/22
// https://javascript.info/symbol
// Example code practice - typed out in VS Studio Code and tested in Chrome console

let id = Symbol();

let id = Symbol("id");

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2);

//

let id = Symbol("id");
alert(id);

let id = Symbol("id");
alert(id.toString());

let id = Symbol("id");
alert(id.description);

//

let user = {
    name: "John"
};

let id = Symbol("id");

user[id] = 1;

alert ( user[id] );


let id = Symbol("id");

user[id] = "Their id value";

let user = { name: "John" };

user.id = "Our id value";

user.id = "Their id value";

//

let id = Symbol("id");

let user = {
    name: "John",
    [id]: 123
};

//

let id = Symbol("id");

let user = {
    name: "John",
    age: 30,
    [id]: 123
};

for (let key in user) alert(key);

alert ( "Direct: " + user[id] );

//

let id = Symbol("id");

let user = {
    [id]: 123
};

let clone = Object.assign({}, user);

alert ( clone[id] );

//

let id = Symbol.for("id");

let idAgain = Symbol.for("id");

alert ( id === idAgain );

//

let sym = Symbol.for("Name");
let sym2 = Symbol.for("id");

alert ( Symbol.keyFor(sym) );
alert ( Symbol.keyFor(sym2) );

let globalSymbol = Symbol.for("Name");
let localSymbol = Symbol("Name");

alert( Symbol.keyFor(globalSymbol) );
alert( Symbol.keyFor(localSymbol) );

alert( localSymbol.description );