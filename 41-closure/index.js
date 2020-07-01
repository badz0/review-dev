// let a = 'a';

// function foo() {
//   console.log(a);
//   console.log(b);
// }

// function bar() {
//   let b = 'b';
//   foo();
// }

// bar();


function createFunc() {
  let msg = 'hello';

  return function() {
    console.log('print msg: ', msg);
  }
}


let func = createFunc();

function createCounter() {
  let counter = 0;

  return function() {
    counter++;
    console.log('counter: ', counter);
  }
}

let count = createCounter();

// count();
// count();

let count2 = createCounter();

// count2();



function ownForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

let group = {
  name: 'PPZ45',
  students: ['Ihor', 'Vlad', 'Ivan'],
  printStudents() {

    this.students.forEach((studentName) => {
      console.log(this.name, studentName);
    });
  }
};

// group.printStudents();



function printName(startStr, endStr) {
  console.log(startStr, this.firstName, this.lastName, endStr);
}

let user1 = {
  firstName: 'Ivan',
  lastName: 'Horovec',
}

let user2 = {
  firstName: 'Anton',
  lastName: 'Borovec',
}

// printName.apply(user1, ['Hi', '!!!']);
// printName.apply(user2, ['buy', '!!!']);

// let printUser1Name = printName.bind(user1, 'hello');
// printUser1Name('!!');


function multiply(a, b) {
  return a * b;
}
let double = multiply.bind(null, 2);
// console.log(double(5));


let double2 = (n) => {
  return multiply(2, n);
}

// console.log(double2(11));


function hello(msg) {
  console.log('hi', msg);
}

// setTimeout(hello, 1000, 'whats up');
let timeout = setTimeout(group.printStudents, 3000, 'you');
// clearTimeout(timeout);





// let interval = setInterval(hello, 1000, 'ola');

// setTimeout(function() {

//   clearInterval(interval)
// }, 5000);


