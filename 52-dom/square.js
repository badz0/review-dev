
class Square {
  constructor(arr = [2,56,6]) {
    console.log(arr);
    this.square = document.getElementById('square');

    this.square.addEventListener('click', () => {
      this._start();
    }, {once: true});
  }

  _start() {
    console.log('click');
    this.square.style.width = '100px';
    this.square.style.height = '100px';
    this.square.textContent = '';
    setTimeout(() => {
      this.square.style.transition = 'all 0s';
    }, 300)

    // requestAnimationFrame
    const moveCallback = (event) => {
      this._move(event);
    };

    this.square.addEventListener('mousedown', () => {
      document.addEventListener('mousemove', moveCallback);
    });

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', moveCallback);
    });
  }

  _move(event) {
    if (window.innerHeight > event.y + 50 && 0 < event.y - 50) {
      this.square.style.top = event.y + 'px';
    }
    if (window.innerWidth > event.x + 50) {
      this.square.style.left = event.x + 'px';
    }
  }

}








document.addEventListener('DOMContentLoaded', function() {
  new Square();
});

