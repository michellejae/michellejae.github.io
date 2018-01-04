console.log('sanity js')

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