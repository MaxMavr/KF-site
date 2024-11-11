const logo = document.querySelector('.logo-cube');
const cube = document.querySelector('.cube');

const transitionFast = 'all .2s cubic-bezier(0.35, 0.36, 0.58, 0.98)';
const transitionSlow = 'all .5s cubic-bezier(0.75, 0.35, 0.4, 0.99)';
const rad2deg = 180;

let debounceTimeout;

const sides = ['left', 'right', 'top', 'buttom'];

sides.forEach(side => {
  const sideDiv = document.createElement('div');
  sideDiv.classList.add('side', side);
  cube.appendChild(sideDiv);
});

function updateCubeRotation(event) {
  clearTimeout(debounceTimeout);
  
  debounceTimeout = setTimeout(() => {
    const { clientX, clientY } = event;
    const { clientWidth, clientHeight, offsetTop, offsetLeft } = logo;

    const angleX = Math.atan((clientY - (clientHeight / 2 + offsetTop)) / (2.5 * clientHeight));
    const angleY = Math.atan((clientX - (clientWidth / 2 + offsetLeft)) / (2.5 * clientHeight));

    cube.style.transition = transitionFast;
    cube.style.transform = `rotateX(${-rad2deg * angleX}deg) rotateY(${rad2deg * angleY}deg)`;
  }, 16);
}

function resetCubeRotation() {
  clearTimeout(debounceTimeout);
  
  cube.style.transition = transitionSlow;
  cube.style.transform = 'rotateX(0deg) rotateY(0deg)';
}

function updateCubeParameters() {
  const cubeOrigin = `${logo.clientHeight / 2}px ${logo.clientHeight / 2}px ${logo.clientHeight / -2}px`;
  logo.style.perspective = `${2 * logo.clientHeight}px`;
  document.documentElement.style.setProperty('--cube-origin', cubeOrigin);
}

updateCubeParameters();

const resizeObserver = new ResizeObserver(updateCubeParameters);
resizeObserver.observe(logo);

cube.addEventListener("pointerleave", resetCubeRotation);
cube.addEventListener("mousemove", updateCubeRotation);
