// console.dir(btn);

// btn.onclick = function() {
//   console.log('click 1');
// }

// const btn = document.getElementById('button');

// function logClick(msg) {
//   console.log(msg + ' click 2');
// }

// const logWrapper = logClick.bind(null, 'adsfdsf');

// document.getElementById('add')
//   .addEventListener('click', function() {
//     btn.addEventListener('click', logWrapper);
//   });

// document.getElementById('remove')
//   .addEventListener('click', function() {
//     btn.removeEventListener('click', logWrapper);
//   });


// document.getElementById('click-once')
//   .addEventListener('click', function(event) {
//     this.textContent = 'dfsfs';
//     // console.log('event: ', event);
//     console.log('Once');
//   }, { once: true });

// document.getElementById('click-once')
//   .addEventListener('click', function(event) {
//     // console.log('test1', event.target === this);
//     // console.log('event1: ', event);
//     console.log('btn click');
//   });

// document.querySelector('.container')
//   .addEventListener('click', function(event) {
//     // console.log('test2', event.target === this);
//     // console.log('event2: ', event);
//     console.log('container click');
//   }, { capture: true });


let squares = document.getElementsByClassName('square');

[...squares].forEach(square => {
  square.addEventListener('click', function(event) {
    event.stopPropagation();
    this.style.background = 'red';
  });
})

document.querySelector('.wrapper')
  .addEventListener('click', function(event) {
    // event.target.style.background = 'red';
    console.log('click');
    // console.log('event: ', event.target);
  });

document.querySelector('.link')
  .addEventListener('click', function(event) {
    event.preventDefault();
    console.log('link click');
  })

document.getElementById('pass-input')
  .addEventListener('keypress', function(event) {
      console.log('keypress');
      if (this.value === 'ivan') {
        this.after('access granted')
      }
  });

document.getElementById('pass-input')
.addEventListener('keydown', function(event) {
    console.log('keydown');
});
