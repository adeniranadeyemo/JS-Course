'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this to create methods
//   //   this.calcAge = function () {
//   //     console.log(2027 - this.birthYear);
//   //   };
// };

// const Jonas = new Person('Jonas', 1991);
// // console.log(Jonas);

// const Mathilda = new Person('Mathilda', 2017);
// const Jack = new Person('Jack', 2005);

// Person.hey = function () {
//   console.log('Hey there.');
//   console.log(this);
// };

// Person.hey();
// .hey() is not inherited as it's not passed to the Person.prototype
// Jonas.hey();

// console.log(Mathilda, Jack);
// console.log(Jonas instanceof Person);

// 1. New empty object {} is created
// 2. Function is called, this = {};
// 3. {} is linked to prototype
// 4. Function automatically returns {}

// Prototypes | Prototypal inheritance
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// Jonas.calcAge();
// Mathilda.calcAge();
// Jack.calcAge();

// console.log(Jonas.__proto__);
// console.log(Jonas.__proto__ === Person.prototype);
// console.log(Jack.__proto__ === Person.prototype);

//
// console.log(Person.prototype.isPrototypeOf(Jonas));
// console.log(Person.prototype.isPrototypeOf(Mathilda));
// console.log(Person.prototype.isPrototypeOf(Person));

//
// Person.prototype.species = 'Homo Sapiens';
// console.log(Jonas.hasOwnProperty('firstName'));
// console.log(Jonas.hasOwnProperty('species'));

// console.log(Jonas.__proto__);
// Object.prototype - Top off prototype chain
// console.log(Jonas.__proto__.__proto__);
// console.log(Jonas.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// const arr = [9, 3, 2, 9, 4, 5, 2, 7, 4, 9];
// const arr2 = [10, 6, 4, 6, 8, 8, 1, 1];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Not advisable for large scale projects as new methods
// can be added with the same name and that will cause issues
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());
// console.log(arr2.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(x => x + 1);

// Challenge 1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}km/hr`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}km/hr`);
// };

// const Car1 = new Car('BMW', 50);
// const Car2 = new Car('Mercedes', 70);

// Car1.accelerate();
// Car1.accelerate();
// Car1.brake();
// Car1.accelerate();

// Car2.accelerate();
// Car2.brake();
// Car2.brake();

// class expression
// const PersonCl = class {

// }

// Instance method
// class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to the .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey, ${this.fullName}.`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // set can be used to pass parameters
//   // to be used in the property.
//   // set must have a parameter and just one
//   // Setting a property that already exist for validation
//   set fullName(name) {
//     // console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert('Given name is not a full name');
//   }

//   // get is used without a parameter
//   // to get a property
//   get fullName() {
//     return this._fullName;
//   }

//   set birthYear(year) {
//     if (year === 2000) this._birthYear = year;
//     else alert(`That's just wrong!!`);
//   }

//   get birthYear() {
//     return this._birthYear;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there.');
//     console.log(this);
//   }
// }

// PersonCl.hey();
// console.log(PersonCl.prototype);

// const Jessica = new PersonCl('Jessica Davis', 1000);
// Jessica.birthYear = 2000;
// console.log(Jessica);
// console.log(Jessica);
// console.log(Jessica.__proto__ === PersonCl.prototype);
// Jessica.hey();
// Jessica.calcAge();
// Jessica.greet();
// console.log(Jessica.age);

// const Walter = new PersonCl('Walter', 1995);
// const Walter = new PersonCl('Walter White', 1995);
// Walter.calcAge();
// Walter.greet();
// console.log(Walter.age);

// const Niran = new PersonCl('Adeyemo Adeniran', 2000);
// console.log(Niran._birthYear);
// console.log(Niran.birthYear);
// console.log(Niran.age);
// Niran.greet();
// Invalid for the same reason sated above
// Niran.hey();

// console.log(Jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey, ${this.firstName}`);
// };

// 1. Classes are not hoisted
// They can't be used before they are declared
// in the code unlike function declaration

// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

///////////////////////////////////////////
// let account = {
//   owner: 'Jonas',
//   movements: [200, -334, 435, 150, 98],

//   // get is used without a parameter
//   // to set a property
//   get latest() {
//     this.movements.push(2);
//     return this.movements.slice(-1).pop();
//   },

//   // set can be used to pass parameters
//   // to be used in the property.
//   // set must have a parameter and just one
//   set latest(mov) {
//     this.movements.push(mov);
//     // this.owner = mov;
//   },
// };

// console.log(account.latest);

// A property, not a method -
// account.latest(50) won't work
// account.latest = 50;
// account.latest = 345;
// console.log(account.movements);

// account = { ...account, owner: 'Rat' };
// console.log(account.owner);

////////////////////////////////////////////////
// const Footballer = function (name, club) {
//   this.name = name;
//   this.club = club;
// };

// let goat = new Footballer('Leo Messi', 'Inter Miami');
// const player2 = new Footballer('Alvarez', 'Manchester City');
// const player3 = new Footballer('Cuti Romero', 'Tottenham Hotspur');
// const player4 = new Footballer('Lisandro Martinez', 'Aston Villa');

// console.log(goat.name, player2, player3, player4);

// Footballer.prototype.nationality = 'Argentinian';
// goat = { ...goat, nationality: 'Nigerian' };
// console.log(goat.nationality);

// const arr2 = Array.from({ length: 20 }, (_, i) => i + 1);
// console.log(arr2);

//////////////////////////////////////////////////
//  Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const Steven = Object.create(PersonProto);
// Steven.init('Steven', 1900);
// console.log(Steven);
// Bad practice
// Steven.name = 'Steven';
// Steven.birthYear = 2002;
// Steven.calcAge();

// console.log(Steven.__proto__);
// console.log(Steven.__proto__ === PersonProto);

// const Sarah = Object.create(PersonProto);
// Sarah.init('Sarah', 1979);
// Sarah.calcAge();

///////////////////////////////////////////////////
// Challenge 2
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerator() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}km/hr`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}km/hr`);
//   }

//   get speedUS() {
//     return `${this.make} is going at ${this.speed / 1.6}mi/hr`;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const Ford = new Car('Ford', 120);
// console.log(Ford.speedUS);
// Ford.accelerator();
// Ford.brake();
// console.log(Ford.speedUS);

// Ford.speedUS = 50;
// console.log(Ford);
// console.log(Ford.speedUS);
// Ford.accelerator();
// Ford.accelerator();

/////////////////////////////////////////////////////////
// Linking parent to child objects with constructor functions.
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName}, and I study ${this.course}.`);
// };

// const Mike = new Student('Mike', 2020, 'Computer Science');
// console.log(Mike);
// Mike.introduce();
// Mike.calcAge();

// console.log(Mike.__proto__);
// console.log(Mike.__proto__.__proto__);

// console.log(Mike instanceof Student);
// console.log(Mike instanceof Person);
// console.log(Mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

//////////////////////////////////////////////
// Challenge 3
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;

//   Object.defineProperty(this, 'speedUS', {
//     get: function () {
//       return `${this.make} is going at ${this.speed / 1.6}mi/hr.`;
//     },

//     set: function (speed) {
//       this.speed = speed * 1.6;
//     },
//   });
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}km/hr.`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}km/hr.`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Linking the prototypes
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.about = function () {
//   console.log(
//     `This is a ${this.make} car going at ${this.speed}km/hr, with a charge of ${this.charge}%.`
//   );
// };

// EV.prototype.chargeBattery = function (chargeTo) {
//   return (this.charge = chargeTo);
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} goes at ${this.speed}km/hr, with a charge of ${this.charge}%.`
//   );
// };

// const Tesla = new EV('Tesla', 120, 23);
// console.log(Tesla);
// Tesla.about();
// Tesla.accelerate();
// Tesla.accelerate();
// Tesla.accelerate();
// Tesla.accelerate();
// console.log(Tesla.speedUS);
// Tesla.brake();
// console.log(Tesla.speedUS);

// Tesla.speedUS = 40;
// console.log(Tesla);
// Tesla.about();
// Tesla.chargeBattery(90);
// Tesla.about();
// Tesla.accelerate();
// Tesla.accelerate();
// Tesla.accelerate();
// Tesla.accelerator();

/////////////////////////////////////////////////////////////
// Linking parent to child objects with ES6 Classes.
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to the .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey, ${this.fullName}.`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // set can be used to pass parameters
//   // to be used in the property.
//   // set must have a parameter and just one
//   // Setting a property that already exist for validation

//   set fullName(name) {
//     // console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert('Given name is not a full name!');
//   }

//   // get is used without a parameter
//   // to get a property
//   get fullName() {
//     return this._fullName;
//   }

//   set birthYear(year) {
//     if (year) this._birthYear = year;
//     else alert(`No birthyear added!`);
//   }

//   get birthYear() {
//     return this._birthYear;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋🏽');
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName}, and I study ${this.course}.`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }.`
//     );
//   }
// }

// const Martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// console.log(Martha);
// Martha.introduce();
// Martha.calcAge();

/////////////////////////////////////////////////////////////
// Linking parent to child objects with Object.create.
// const PersonProto = {
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// const Steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName}, and I study ${this.course}.`);
// };

// const Jay = Object.create(StudentProto);
// Jay.init('Jay', 2010, 'Computer Science');
// // console.log(Jay);
// Jay.introduce();
// Jay.calcAge();

/////////////////
// Encapsulation with fields and methods
// 1. Pulic fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// {There is also the static version}

// class Account {
//   // 1. Public fields (they are on the instances and not in the prototype)
//   locale = navigator.language;

//   // 2. Private fields (they are on the instances and not in the prototype)
//   // They are not accessible outside of the class which
//   // makes them perfect for data privacy and encapsulation
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // Protected property
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an acount, ${this.owner}.`);
//   }

//   // 3 Public methods
//   // Public interface
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(value) {
//     this.#movements.push(value);
//     return this;
//   }

//   withdrawal(value) {
//     this.deposit(-value);
//     return this;
//   }

//   requestLoan(value) {
//     if (this._approveLoan(value)) {
//       this.deposit(value);
//       console.log(`Loan approved.`);
//       return this;
//     } else {
//       console.log(`Loan not approved`);
//       return this;
//     }

//     // if (this.#approveLoan(value)) {
//     //   this.deposit(value);
//     //   console.log(`Loan approved.`);
//     // } else {
//     //   console.log(`Loan not approved`);
//     // }
//   }

//   _approveLoan(value) {
//     return true;
//     // return false;
//   }

//   // 4. Private methods - Not fully supported yet
//   // #approveLoan(value) {
//   //   return true;
//   //   // return false;
//   // }

//   // 5.
//   static helper() {
//     console.log(`Helper!!`);
//   }
// }

// const acc1 = new Account('Niran', 'USD', 1111);
// acc1.deposit(300);
// acc1.withdrawal(200);
// acc1.requestLoan(1000);

// console.log(acc1.getMovements());
// console.log(acc1);
// Account.helper();

// // console.log(acc1.#movements);
// // console.log(acc1.#pin);
// // console.log(acc1._approveLoan());

// // Chaining
// acc1.deposit(300).deposit(500).withdrawal(30).requestLoan(100).withdrawal(100);
// console.log(acc1.getMovements());

////////////// Challenge 4
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/hr.`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/hr.`);
    return this;
  }

  get speedUS() {
    console.log(`${this.make} is going at ${this.speed / 1.6}mi/hr`);
  }

  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }
}

class EV extends Car {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} goes at ${this.speed}km/hr, with a charge of ${
        this.#charge
      }%.`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge += chargeTo;
    return this;
  }

  info() {
    console.log(
      `${this.make} is going at ${this.speed}km/hr, with a charge of ${
        this.#charge
      }%.`
    );
    return this;
  }
}

const Rivian = new EV('Rivian', 120, 23);
Rivian.info()
  .chargeBattery(20)
  .info()
  .accelerate()
  .brake()
  .chargeBattery(40)
  .info()
  .accelerate()
  .accelerate()
  .accelerate();
// console.log(Rivian);
Rivian.speedUS;
Rivian.speedUS = 200;
Rivian.speedUS;
console.log(Rivian);
