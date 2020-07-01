

let user = {
  firstName: 'ivan',
  lastName: 'bbbadsas',
  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}

// console.log('user: ', user);


// console.log('old user', user);
// console.log(user.getName());

class User {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  get age() {
    return 2020 - this.birthYear;
  }

  get name() {
    return this.firstName + ' ' + this.lastName;
  }

  set name(value) {
    if (value.length < 4) {
      console.log('sorry name is too short');
      return;
    }

    [this.firstName, this.lastName] = value.split(' ');
  }

  testMethod() {
    console.log('heelloo');
  }
}



let ivan = new User('ivan anonym', 1990);
// console.log('ivan: ', ivan);
// console.log('ivan: ', ivan);
// console.log('ivan age: ', ivan.age);
ivan.birthYear = 2000;
// console.log('ivan: ', ivan);
// console.log('ivan age: ', ivan.age);



function OldUser(name) {
  this.name = name;
}

OldUser.prototype.testMethod = function() {
  console.log('heelloo');
}

let ihor = new OldUser('ihor');
// ihor.testMethod();
// console.log('ihor: ', ihor);


String.prototype.split = function() {
  console.log('hello Ivan');
}


class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return this.name + ' ' + this.age;
  }
}

class SuperHero extends Human {
  constructor(name, age, superPower) {
    super(name, age);
    this.superPower = superPower;

    this._weakness = superPower + age + 'vvvvaddde';
  }

  static fight(hero1, hero2) {
    if (hero1.superPower.length > hero2.superPower.length) {
      return 'hero ' + hero1.name + ' wwon';
    } else {
      return 'hero ' + hero2.name + ' wwon';
    }
  }

  getInfo() {
    return super.getInfo() + ' ' + this.superPower;
  }

  useSuperPower() {
    console.log(this.superPower + ' completed');
    this._privetPower();
  }

  _privetPower() {

  }
}

// let human = new Human('Oleh', 29);
// console.log('human: ', human);
// console.log( human.getInfo() );

let student = new SuperHero('IvanStudent', 18, 'vyzhyty na stypendiyu');
let ironIvan = new SuperHero('IvanStark', 39, 'dofiga babla');

console.log(
  SuperHero.fight(student, ironIvan)
);


class ContactBook {
  static sos = 911;

  constructor() {
    this.numberList = {};
    this._countryCode = '+38';
  }

  getNumber(name) {
    return this.numberList[name] || 'no such contact';
  }

  addNumber(name, tel) {
    if (name in this.numberList) {
      console.log('already exists');
      return;
    }

    if (!tel.includes(this._countryCode)) {
      tel = this._countryCode + tel;
    }

    if (this._checkTelDuplication(tel)) return;

    this.numberList[name] = tel
  }

  _checkTelDuplication(tel) {
    if (Object.values(this.numberList).includes(tel)) {
      console.log('tel already exist');
      return true;
    } else return false;
  }

  get amount() {
    return Object.keys(this.numberList).length;
  }
}

console.log('ContactBook.sos: ', ContactBook.sos);

let book = new ContactBook();

book.addNumber('Ivan Grygorovych', '3423414534');
book.addNumber('Ivan Vasylovych', '+383423414534');

console.log('book: ', book);
console.log(book.getNumber('Ivan Grygorovych'));

console.log(book.getNumber('asdfasdfs'));

console.log(book.amount);


