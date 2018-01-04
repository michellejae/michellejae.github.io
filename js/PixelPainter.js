console.log('sanity js')

const swatchSection = document.createElement('div');
swatchSection.id = 'swatch';
document.body.appendChild(swatchSection);

const canvasSection = document.createElement('div');
canvasSection.id = 'canvas';
document.body.appendChild(canvasSection);

function createGrid(x,y,section){

  let container = document.createElement('div');
  container.className = 'container';

  for(let i = 0; i < x; i++){
    let row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    row.innerHTML;

      for(let j = 0; j < y; j++){
        let cell = document.createElement('div');
        cell.className = 'cell';
        row.appendChild(cell);
      
      }
  }
  section.appendChild(container)
}
createGrid(10,10,swatchSection);
createGrid(20,20,canvasSection);