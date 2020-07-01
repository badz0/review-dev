// let h1 = {
//   tagName: 'h1',
//   id: 'main-title',
//   textContent: 'title',
//   parent: div
// };

// let div = {
//   tagName: 'div',
//   children: [h1]
// };



// let title = document.getElementById('main-title');
// let title = document.querySelector('h1#main-title');
// setTimeout(() => {
//   title.textContent = 'not a title';
// }, 3000);

// let spanIndex = title.querySelector('#main-title > .index');
// console.dir(spanIndex);


// let titles = document.querySelectorAll('.title')[0];

// titles.forEach((item) => {
//   console.log('item: ', item);
// });

let titles = document.getElementsByClassName('title');

Array.from(titles).forEach((item, i) => {
  item.textContent = 'ola ' + i;
});


let counter = document.querySelector('.counter');

console.log('counter: ', counter);
// setInterval(() => {
//   counter.innerText = +counter.innerText + 1;
// }, 1000);

let sec = 0;
let color = ['red', 'blue', 'green'];
// setInterval(() => {
//   let classIndex = sec % color.length;

//   counter.className = 'counter ' + color[classIndex];
//   counter.style.fontSize = 20 + sec + 'px';
//   counter.innerHTML = ++sec;
// }, 1000);


let title = document.querySelector('h1#main-title');

// title.innerHTML = `<input />`

// title.firstChild.value = '212312';

// setTimeout(() => {
//   console.log(title.firstChild.value);
// }, 3000);

console.log(title.getAttribute('custom-attr'));


// setTimeout(() => {
//   title.style.backgroundColor = 'orange';
//   title.style.color = 'blue';
//   // console.log(title.style.cssText);
// }, 3000);


console.log(
  parseInt(getComputedStyle(title)['font-size'])
);


let button = document.createElement('button');

button.innerText = 'click';

title.insertAdjacentHTML('beforebegin', '<button>dsfsad</button>');

button.remove();


title.innerHTML = title.innerHTML + '<button>dsfsad</button>';


