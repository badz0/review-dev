
// function isIvan(name) {
//  if (name === 'Ivan' || name === 'ivan' ||
//   name === 'іван' || name === 'Іван') {
//    return true;
//  } else {
//    return false;
//  }
// }

// const userName = 'Іван';

// if (isIvan(userName)) {
//   console.log('hi Ivan');
// }




// const sayHiUser = (name) => {
//   console.log('Hello ' + name);
//   return 'done';
// }

// const result = sayHiUser('Ivan');
// console.log('result: ', result);

// const isIvan = name => name === 'Ivan';

// const ivan = isIvan('ddd');
// console.log('ivan: ', ivan);


(function() {
  var a = 'dfd';
  var b = 'ddf';
  // console.log('bla bla');
})();


// let bar = 1;

// function foo() {
//   console.log('bar: ', bar);
//   bar = 2;

//   function inner() {
//     console.log('bar: ', bar);
//     bar = 3;
//   }


//   inner();
// }
// foo();
// bar = 4;
// console.log('bar: ', bar);





// const pure = a => a + 3;

function removeA(str) {
  let pureStr = '';
  for(let i = 0; i < str.length; i++) {
    if (str[i] !== 'a') {
      pureStr += str[i];
    }
  }
  return pureStr;
}

function removeARecursion(str) {
  const index = str.indexOf('a');
  return index === -1 ? str :
    removeARecursion(str.substr(0, index) + str.substr(index + 1))

  // const index = str.indexOf('a');
  // if (index !== -1) {
  //   let temp = str.substr(0, index) + str.substr(index + 1);
  //   return removeARecursion(temp);
  // } else {
  //   return str;
  // }
}

const result = removeARecursion('ivan and ivan');
// console.log('result: ', result);



function square(x) {
  return x * x;
}


function pow(n, exp) {
  if (exp === 0) return 1;
  let result = n;
  for (let i = 1; i < exp; i++) {
    result *= n;
  }

  return result;
}

// console.log( pow(2, 2) );


function isPalindrome(str) {
  let result = true;
  const halfLength = Math.floor(str.length / 2);

  for (let i = 0; i < halfLength; i++) {
    const leftChar = str[i];
    const rightChar = str[str.length - (i + 1)];

    if (leftChar !== rightChar) {
      return false;
    }
  }

  return result;
}

const isPalindromeCope = str => str.split('').reverse().join('') === str;


console.log( isPalindrome('madam') );

let even = 10 % 2 === 0;
