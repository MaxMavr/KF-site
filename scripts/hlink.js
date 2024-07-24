colorArray = ['#9943e2', '#5646ff', '#ff9e33', '#ff6433', '#ff4267', '#1bcec4'];

document.documentElement.style.setProperty('--link-color',
    colorArray[Math.floor(Math.random() * colorArray.length)]);