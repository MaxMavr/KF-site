const logo = document.querySelector('.logo-cube');
const cube = document.querySelector('.cube');

const side_front = document.querySelector('.side.front');
const side_left = document.querySelector('.side.left');
const side_right = document.querySelector('.side.right');
const side_top = document.querySelector('.side.top');
const side_buttom = document.querySelector('.side.buttom');

const rad2deg = 180;

cube.addEventListener("mousemove", rotationCube);
cube.addEventListener("mouseleave", returnRotationCube);

function rotationCube(el) {
  var angleX = Math.atan((el.clientY - logo.clientHeight / 2 - logo.offsetTop) / (2.5 * logo.clientHeight)),
      angleY = Math.atan((el.clientX - logo.clientHeight / 2 - logo.offsetLeft) / (2.5 * logo.clientHeight));

  cube.style.transition = 'all .2s cubic-bezier(0.35, 0.36, 0.58, 0.98)';
  cube.style.transform = `rotateX(${-rad2deg * angleX}deg)
                          rotateY(${rad2deg * angleY}deg)`;
}

function returnRotationCube(el) {
  cube.style.transition = 'all .5s cubic-bezier(0.75, 0.35, 0.4, 0.99)';
  cube.style.transform = `rotateX(0deg)
                          rotateY(0deg)`;
}

function СhangParam3dСube() {

  var cube_origin = `${logo.clientHeight / 2}px ${logo.clientHeight / 2}px ${logo.clientHeight / -2}px`;

  logo.style.perspective = `${2 * logo.clientHeight}px`;

  document.documentElement.style.setProperty('--cube-origin', cube_origin);
}


СhangParam3dСube();
let resObserv = new ResizeObserver(() => {
  СhangParam3dСube();
});

resObserv.observe(logo);
