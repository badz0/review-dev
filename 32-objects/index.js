
let key = 'age';

// let tel = 9999;


let user = {
  hello: function() {
    console.log('hello');
  },
  buy() {
    console.log('buy');
  },
  10: 'number',
  '12': 'number',
  'first name': 'ivan',
  [key]: 22,
  ['hello' + 'afsd']: 'dfdf',
  // tel
};


user.tel = '00000';
delete user.tel;
// user['hello']();
// user.buy();





function addContact(book) {
  let name = prompt('name');
  if (name in book) {
    console.log('already exists');
    return;
  }
  let tel = prompt('tel');

  book[name] = tel;
  console.log(' book: ',  book);
}

// addContact(contactsBook);

// console.log('contactsBook: ', contactsBook);

let user1 = {name: 'ivan'};

let user2 = user1;

let a = 2120;
let b = a;

// console.log('user1: ', user1);
// console.log('user2: ', user2);

// user2.name = 'vlad';

// console.log('user1: ', user1);
// console.log('user2: ', user2);


// console.log({} === {});
// console.log(user1 === user2);

const str = {name: 'ivan'};
str.name = 222
// console.log('str: ', str);






let mainBook = {
  IVAN: 12312,
  vlad: 99999,
  innerBook: {
    littleIvan: 555
  }
};
let ivanaBook = {
  IVAN: 666,
};

let copyBook = {...mainBook};

// let copyBook = Object.assign({}, mainBook);


let defaultCar = {
  capacity: '1.2L',
  color: 'blue',
  wheelsAmount: 4
}

function configureCar(options) {
  let car = Object.assign({}, defaultCar, options);
  return car;
}


let ivanCar = configureCar({color: 'black', wheelsAmount: 3});
// console.log(ivanCar === defaultCar);

// console.log('ivanCar: ', ivanCar);
// console.log('defaultCar: ', defaultCar);



user = {
  name: 'ihor',
  age: 30,
  lastName: 'Borodin'
};

// let { name, age } = user;

let arr = ['valera'];

// let [name, age = 20] = arr;


function helloUser({name, age}) {
  console.log(`hello ${name} ${age}`)
}

// helloUser(user);


function getContact() {
  let name = prompt('name');
  let tel = prompt('tel');
  return [name, tel, 3, 324, 21312];
}

// let [name, tel, ...restData] = getContact();
// console.log('restData: ', restData);
// console.log('name, tel: ', name, tel);


// let [...restData] = [...someData]


// let contactBook = {
//   ivan: 12312,
//   vlad: 99999,
// };

// for (key in contactBook) {
//   console.log('key: ', key);
// }

// Object.entries(contactBook).forEach(([key, val]) => {
//   console.log('key, val: ', key, val);
// })

let users = [
  {name: 'ivan', id: 'adf8f32h32fh9832'},
  {name: 'vlad', id: 'adf8f32h32fh9833'},
  {name: 'ihor', id: 'adf8f32h32fh9834'},
];

let ihor = users.find(user => {
  return user.id === 'adf8f32h32fh9834';
})
// console.log('ihor: ', ihor);


// let usersObj = {
//   adf8f32h32fh9832: {name: 'ivan', id: 'adf8f32h32fh9832'},
//   adf8f32h32fh9833: {name: 'vlad', id: 'adf8f32h32fh9833'},
//   adf8f32h32fh9834: {name: 'ihor', id: 'adf8f32h32fh9834'},
// };

// console.log(usersObj['adf8f32h32fh9834']);

let usersObj = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {})

// console.log('usersObj: ', usersObj);



user = {
  firstName: 'ivan',
  lastName: 'vorobev',
  fullName() {
    console.log(this.firstName + ' ' + this.lastName);
  }
};

// user.fullName();


let contactBook = {
  ivan: 12312,
  vlad: 99999,
  ihor: 324132,
  valera: 53453,
  test() {
    // console.log(this)
  },
  getRecordsAmount() {
    return Object.keys(this).length - 1;
  },
  search(str) {
    let keys = Object.keys(this);
    let result = keys.filter(key => {
      return key.includes(str);
    });

    return result;
  }
};


// console.log(this);
contactBook.test();

function generateCombinations(word) {
  let result = [];
  word = word.split('');
  for (let i = 0; i < 1; i++) {
    let letter = word[0];
    let copy = [...word]
    copy.shift();
    for (let j = i; j < word.length; j++) {
      copy.splice(j + 1, 0, letter);
      result.push(copy);
      copy.splice(j + 1, 1);
      // console.log(copy);
    }
  }
  // console.log(result);
}

generateCombinations("man");

function getModa(...arr) {
  // console.log('arr: ', arr);
  let result = {};
  arr.forEach(n => {
    result[n] = result[n] + 1;
  });
}

getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);


// console.log(contactBook.search('i'));
