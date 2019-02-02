const badBoy = document.createElement('div');
badBoy.id = 'badBoy';
document.body.appendChild(badBoy);

const title = document.createElement('div');
title.id = 'title';
badBoy.appendChild(title);
title.innerHTML = 'working title'

const headers = document.createElement('div');
headers.id = 'headers';
badBoy.appendChild(headers);

const swatchHeader = document.createElement('div');
swatchHeader.id = 'swatchHeader';
headers.appendChild(swatchHeader);
swatchHeader.innerHTML = 'swaaaatch'

const canvasHeader = document.createElement('div');
canvasHeader.id = 'canvasHeader';
headers.appendChild(canvasHeader);
canvasHeader.innerHTML = 'get yo paint on';


const swatchSection = document.createElement('div');
swatchSection.id = 'swatch';
badBoy.appendChild(swatchSection);

const canvasSection = document.createElement('div');
canvasSection.id = 'canvas';
canvasSection.addEventListener('mousedown', handleMouseDown)
canvasSection.addEventListener('mouseup', handleMouseUp)
badBoy.appendChild(canvasSection);


//global variable for color
let store;

//set the colors in swatch
function swatch(cell) {
  let randomColor = getRandomColor();
  cell.style.backgroundColor = randomColor;

  //save color
  let swatchClick = cell.addEventListener("click", function () {
    store = cell.style.backgroundColor
    console.log('color', store)
  })
}

let mouse = false;

//color
function canvas(cell) {
  cell.addEventListener("click", function () {
    cell.style.backgroundColor = store
  })
  // cell.addEventListener('mouseover', function () {
  //   if (mouse) {
  //     cell.style.backgroundColor = store;
  //   }
  // })
}


//erase
let erase = document.createElement('button');
erase.id = 'erase';
document.body.appendChild(erase);
erase.innerHTML = 'ERASE';
erase.addEventListener('click', function () {
  store = '#FFF'
});

//clear
let clear = document.createElement('button');
clear.id = 'clear';
document.body.appendChild(clear)
clear.innerHTML = 'CLEAR';
clear.addEventListener("click", backToWhite);

function backToWhite(event) {
  const cells = document.querySelectorAll('#canvas .cell');
  for (let i = 0; i < cells.length - 1; i++) {
    changeBgColor('#FFF', cells[i]);
  }
}

function changeBgColor(color, target) {
  target.style.backgroundColor = color;
}

//generate random color
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color;
}


//create grid
function createGrid(x, y, section, choice) {

  let container = document.createElement('div');
  container.className = 'container';

  for (let i = 0; i < x; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    row.innerHTML;

    for (let j = 0; j < y; j++) {
      let cell = document.createElement('div');
      cell.className = 'cell';
      row.appendChild(cell);
      //choice = swatch/canvas
      choice(cell);
    }
  } 
  section.appendChild(container)
}

function handleMouseDown() {
  mouse = true;
}

function handleMouseUp() {
  mouse = false;
}
createGrid(10, 10, swatchSection, swatch);
createGrid(20, 20, canvasSection, canvas);