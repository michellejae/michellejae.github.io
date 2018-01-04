console.log('sanity js')
// Title div
const title = document.createElement('div');
title.id = 'title';
document.body.appendChild(title);
title.innerHTML = 'working title'

const headers = document.createElement('div');
headers.id = 'headers';
document.body.appendChild(headers);

const swatchHeader = document.createElement('div');
swatchHeader.id = 'swatchHeader';
headers.appendChild(swatchHeader);
swatchHeader.innerHTML = 'swaaaatch'

const canvasHeader = document.createElement('div');
canvasHeader.id = 'canvasHeader';
headers.appendChild(canvasHeader);
canvasHeader.innerHTML = 'canvas';


const swatchSection = document.createElement('div');
swatchSection.id = 'swatch';
document.body.appendChild(swatchSection);

const canvasSection = document.createElement('div');
canvasSection.id = 'canvas';
document.body.appendChild(canvasSection);







let store;

function swatch(cell) {
  let randomColor = getRandomColor();
  cell.style.backgroundColor = randomColor;

  let swatchClick = cell.addEventListener("click", function () {
    store = cell.style.backgroundColor
    console.log('color', store)
  })
}

function canvas(cell) {
  let canvasColor = cell.addEventListener("click", function () {
    cell.style.backgroundColor = store
  })
  }

let erase = document.createElement('button');
erase.id = 'erase';
document.body.appendChild(erase);
erase.innerHTML = 'ERASE';

//let clear = document.createElement()



function backToWhite(event){
  changeBackgroundColor('#ffff',e.target);
}

function changeByColor(color,target){
  document.querySelectorAll('#canvas .cell').style.backgroundColor = color;
}



function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}


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
      choice(cell);

    }
  }
  section.appendChild(container)
}
createGrid(10, 10, swatchSection, swatch);
createGrid(20, 20, canvasSection, canvas);