const square = document.getElementById('square');

square.addEventListener('click', function() {
  this.style.width = '100px';
  this.style.height = '100px';
  this.textContent = '';
  setTimeout(() => {
    this.style.transition = 'all 0s';
  }, 300)

  init();
}, { once: true });


function moveSquare(event) {
  let { x, y } = event;

  const halfSquare = 50;
  if (x < halfSquare) x = halfSquare;
  if (x > window.innerWidth - halfSquare) x = window.innerWidth - halfSquare;
  square.style.left = x + 'px';

  if (y < halfSquare) y = halfSquare;
  if (y > window.innerHeight - halfSquare) y = window.innerHeight - halfSquare;
  square.style.top = y + 'px';
}

function init() {
  square.addEventListener('mousedown', function() {
    document.addEventListener('mousemove', moveSquare);
  });
  document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', moveSquare);
  });

  square.addEventListener('keydown', (event) => {
    const leftCode = 37;
    const upCode = 38;
    const rightCode = 39;
    const downCode = 40;
    switch (event.keyCode) {
      case leftCode:
        moveSquare({x: square.offsetLeft - 20, y: square.offsetTop});
        break;
      case upCode:
        moveSquare({x: square.offsetLeft, y: square.offsetTop - 20});
        break;
      case rightCode:
        moveSquare({x: square.offsetLeft + 20, y: square.offsetTop});
        break;
      case downCode:
        moveSquare({x: square.offsetLeft, y: square.offsetTop + 20});
        break;
    }
  })
}
