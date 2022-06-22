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

<<<<<<< HEAD
family = null;
=======
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
>>>>>>> 4-4-object-methods