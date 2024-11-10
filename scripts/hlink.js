const colorArray = [
    'var(--highlight-o-color)',
    'var(--highlight-r-color)', 
    'var(--highlight-p-color)', 
    'var(--highlight-b-color)', 
    'var(--highlight-y-color)'
];

const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)]

document.documentElement.style.setProperty('--link-color', randomColor);
