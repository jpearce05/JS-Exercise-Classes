/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

// re-write yesterday's project using Class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];

    // assign attributes here

  }

  eat(food) {
    if (this.stomach.length < 10) {
      return this.stomach.push(food);
    } // end of if 
  } // end of eat

  poop() {
    if (this.stomach.length >= 10) {
      return (this.stomach.splice(0, this.stomach.length));
    }

  } // end of poop

  toString() {
    return `${this.name}, ${this.age}`;
  }

} // closing Class Person


// const mom = new Parent('mom', 'USA', 'Computer Scientist');
const personOne = new Person('Mary', 50);



// console.log(mom.job());

personOne.eat();
personOne.poop();
personOne.toString();

console.log(personOne);
console.log(personOne.eat('pizza'));


/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
  constructor(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;

  }

  // add methods

  fill(gallons) {
    this.tank = gallons + this.tank;
    return this.tank;
  }

  drive(distance) {
    if (this.tank >= distance / this.milesPerGallon) {
      this.odometer += distance;
    } else {
      let possibleMiles = this.milesPerGallon * this.tank;
      distance = distance - possibleMiles;
      this.odomoter = this.odomoter + distance;
      return `I ran out of fuel at ${this.odometer} miles!`;
    }

  }

}; // end class Car

const carOne = new Car('ford', 20);
carOne.fill(10);
carOne.drive(20);
// console.log(carOne);
// console.log(carOne.fill);
// console.log(carOne.drive);


/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/
// class Lambdasian {
//   constructor (name, age, location) {
//     this.name = name;
//     this.age = age;
//     this.location = location;
//   }

//   speak () {
//     return `Hello my name is ${this.name}, I am from ${this.location}`
//   }


// } // end of class Lambda

// let lambdaOne = new Lambdasian('Butrand', 32, 'New York');


// version 2

class Lambdasian {
  constructor(object) {
    this.name = object.name;
    this.age = object.age;
    this.location = object.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }

}

let lambdaOne = new Lambdasian({
  name: 'Bernie',
  age: 32,
  location: 'New York'


}); // end of class Lambda

// let lambdaOne = new Lambdasian('Butrand', 32, 'New York');


/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Lambdasian {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;

  } // end of constructor

  demo(subject) {
    return `Today we are learning about ${subject}`
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`
  }

} // end of class Instructor extends

const instructorOne = new Instructor ({
  name: 'Frank',
  age: 44,
  location: 'Portland',
  specialty: 'React',
  favLanguage: 'JavaScript',
  catchPhrase: "Don't forget the homies"

});


  console.log(instructorOne.demo(instructorOne.favLanguage));
  console.log(instructorOne.grade(instructorOne.name, instructorOne.specialty));

/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before Lambda School
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.

    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`

    Parent 
    this.name = object.name;
    this.age = object.age;
    this.location = object.location;
*/

class Student extends Lambdasian {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
   
   
  }

    //  + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
    // AssertionError: expected 'Loving function toString() { [native code] }' to include 'JS'
    listSubjects () {
      return `Loving toString(${this.favSubjects})`
    }
     // + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
    //  AssertionError: object tested must be an array, a map, an object, a set, a string, or a weakset, but undefined given
    // AssertionError: expected 'Matt has submitted a PR for JS' to include 'sql'
    // AssertionError: expected 'Matt has submitted a PR for JS' to include 'sql'

    PRAssignment (subject) {
      // subject = this.favSubjects[0];
      return `${this.name} has submitted a PR for ${subject}`;
      console.log(subject);
      console.log(this);
    }
    
    // AssertionError: object tested must be an array, a map, an object, a set, a string, or a weakset, but undefined given
    sprintChallenge (subject) {
      return `${this.name} has begun sprint challenge on ${subject}`;
    }

} // end class Student extends

const studentOne = new Student ({
  name: 'Matt',
  age: 36,
  location: 'Portland',
  previousBackground: 'travel writer',
  className: 'CS123',
  favSubjects: ['sql', 'CSS', 'JS']
  
});

console.log(studentOne.listSubjects());
console.log(studentOne.PRAssignment('Math'));
console.log(studentOne.sprintChallenge('sql'));


/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager extends Instructor {
  constructor(a) {
    super(a)
    this.gradClassName = a.gradClassName
    this.favInstructor = a.favInstructor
  }

  // AssertionError: expected '[object Object] receives a perfect score on redux' to include 'petar'

  standUp(channel) {
    return `${this.name} announces to ${channel}, @${channel} standy times!`
  }

  debugsCode(student, subject) {
    // subject = studentOne.favSubjects[2];
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }


} // class PM end

const projectManagerOne = new ProjectManager ({
  name: 'Cyrus',
  age: 44,
  location: 'Brooklyn',
  specialty: 'Wrike',
  favLanguage: 'English',
  catchPhrase: 'Catch a bee with  honey',
  gradClassName: 'CS1',
  favInstructor: 'Sean'

});


console.log(projectManagerOne.standUp("Web32"));
console.log(projectManagerOne.debugsCode(studentOne, 'React'));

/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////

if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Lambdasian) { module.exports.Lambdasian = Lambdasian }
  if (Instructor) { module.exports.Instructor = Instructor }
  if (Student) { module.exports.Student = Student }
  if (ProjectManager) { module.exports.ProjectManager = ProjectManager }
}
