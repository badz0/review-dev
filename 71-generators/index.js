// const now = new Date(2020, 1, 11, 11, 11, 11, 222);
// const now = new Date('2019-01-11T10:10:11.111Z');
// const now = new Date();

// timestamp
// console.log('now: ', now.getTime());
// console.log('now: ', Date.now());

// console.log( now.getDay() ); // нд 0, пн - 1\
// now.setDate(now.getDate() - 1);
// now.setFullYear(2000);
// console.log( now.getDay() );
// console.log('now: ', now);
// console.log( now.getMonth() );

// console.log( 
//   now.toLocaleString('ua', {year: 'numeric'}) + ' ' +
//   now.toLocaleString('ua', {month: 'long'})
// );


const now = new Date();

const past = new Date('2010-10-10')

function isAdult(birthday) {
  let minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 18);
  return Date.parse(birthday) <= minDate;
}

// console.log( isAdult('2005-10-10') );

// console.log(performance.now());

// for (let i = 0; i < 100000; i++) {
//   isAdult('2005-10-10');
// }
// console.log(Date.now());


// let ivan = {name: 'ivan'};

// let obj = {};
// obj[ivan] = 'hey';
// console.log('obj: ', obj);

// let map = new Map();
// map.set(ivan, 'hey').set('test', 'hello');

// console.log('map: ', map);

// let set = new Set(['adsf', '34', ivan, ivan]);

// console.log('set: ', set);

// let arr = [1, 45, 1, 55];
// arr = [...new Set(arr)];
// console.log('arr: ', arr);


function call(func, context) {
  const symbKey = Symbol();
  context[symbKey] = func;
  context[symbKey]();
  delete context[symbKey];
}

function printName() {
  console.log(this.name);
}



let user = { name: 'ivan', uniqukey: 'haha' };

// call(printName, user);


// let symbol1 = Symbol('test');

// console.log(Symbol.for('test') === Symbol.for('test'));

// console.log('user: ', user);
// console.log('symbol: ', symbol1);

let range = {
  from: 0,
  to: 10,
  [Symbol.iterator]() {
    console.log('hey');
    let to = this.to;
    let i = this.from;
    return {
      next() {
        let done = i === to;
        i++;
        return { done, value: i - 1 };
      }
    };
  }
};

let range2 = {
  from: 0,
  to: 10,
  *[Symbol.iterator]() {
    for (let i = this.from; i <= this.to; i++) {
      yield i;
    }
  }
};

// for (key of range2) {
//   console.log('key: ', key);
// }


function* test() {
  let input = yield 1;
  console.log('input: ', input);
  yield 2;
  yield 3;
}

const gen = test();
// gen.next().value;
// gen.next('hello').value;

function lateLog(msg) {
  setTimeout(() => {
    console.log(msg);
  }, 100)
}


function* counter() {
  let i = 0;
  while(true) {
    yield i++;
  }
}

let count = counter();
console.log(count.next().value);
console.log(count.next().value);
console.log(count.next().value);
console.log(count.next().value);
