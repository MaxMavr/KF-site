const logo = document.querySelector('.logo-cube');

const side_front = document.querySelector('.side.front');
const side_left = document.querySelector('.side.left');
const side_right = document.querySelector('.side.right');
const side_top = document.querySelector('.side.top');
const side_buttom = document.querySelector('.side.buttom');


logo.style.perspective = `${2 * logo.clientHeight}px`;
side_left.style.transform = `  rotateY(-90deg) translateX(${logo.clientHeight / -2}px) translateZ(${logo.clientHeight / -2}px)`;
side_right.style.transform = ` rotateY(90deg)  translateX(${logo.clientHeight /  2}px) translateZ(${logo.clientHeight / -2}px)`;
side_top.style.transform = `   rotateX(90deg)  translateY(${logo.clientHeight / -2}px) translateZ(${logo.clientHeight /  2}px)`;
side_buttom.style.transform = `rotateX(-90deg) translateY(${logo.clientHeight /  2}px) translateZ(${logo.clientHeight /  2}px)`;


let resObserv = new ResizeObserver(() => {
  logo.style.perspective = `${2 * logo.clientHeight}px`;
  side_left.style.transform = `  rotateY(-90deg) translateX(${logo.clientHeight / -2}px) translateZ(${logo.clientHeight / -2}px)`;
  side_right.style.transform = ` rotateY(90deg)  translateX(${logo.clientHeight /  2}px) translateZ(${logo.clientHeight / -2}px)`;
  side_top.style.transform = `   rotateX(90deg)  translateY(${logo.clientHeight / -2}px) translateZ(${logo.clientHeight /  2}px)`;
  side_buttom.style.transform = `rotateX(-90deg) translateY(${logo.clientHeight /  2}px) translateZ(${logo.clientHeight /  2}px)`;

  console.log("The element was resized");
});

resObserv.observe(logo);




logo.style.perspective = `${2 * logo.clientHeight}px`;
cube.style.transform = `rotateY(45deg) translateZ(${logo.clientHeight / -2}px)`;

side_front.style.transform =  `                translateZ(${logo.clientHeight /  2}px)`;
side_left.style.transform =   `rotateY(-90deg) translateZ(${logo.clientHeight / -2}px)`;
side_right.style.transform =  `rotateY(90deg)  translateZ(${logo.clientHeight / -2}px)`;
side_top.style.transform =    `rotateX(90deg)  translateZ(${logo.clientHeight /  2}px)`;
side_buttom.style.transform = `rotateX(-90deg) translateZ(${logo.clientHeight /  2}px)`;
