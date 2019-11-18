const net = document.getElementById('net');
const resetBtn = document.getElementById('reset');

// Adding elements into the page
let element = document.createElement('button');
element.classList.add('elem');
for (let i = 0; i < 2500; i++) {
  element = element.cloneNode(true);
  element.innerText = Math.ceil(Math.random() * 3);
  net.appendChild(element);
}

// 1D array to 2D array
const elements = document.querySelectorAll('.elem');
let elements2D = [];
let elemIndex = 0;
for (let i = 0; i < 50; i++) {
  elements2D[i] = [];
  for (let j = 0; j < 50; j++) {
    elements2D[i][j] = elements[elemIndex];
    elemIndex++;
  }
}

// Event listeners for the net elements
for (let elIndi = 0; elIndi < elements2D.length; elIndi++) {
  for (let elIndj = 0; elIndj < elements2D[elIndi].length; elIndj++) {
    elements2D[elIndi][elIndj].addEventListener('click', () => {
      const step = Number(elements2D[elIndi][elIndj].innerText);
      let elClass = '';
      switch (step) {
        case 1:
          elClass = 'elem elem_green';
          break;
        case 2:
          elClass = 'elem elem_blue';
          break;
        case 3:
          elClass = 'elem elem_red';
          break;
        default:
          break;
      }
      for (let i = 0; i < 50; i++)
        for (let j = 0; j < 50; j++) {
          // if (i >= elIndi - step && i <= elIndi + step && j >= elIndj - step && j <= elIndj + step)
          //   elements2D[i][j].classList = elClass;
          // if (i >= elIndi - step + 1 && i <= elIndi + step - 1 && j >= elIndj - step + 1 && j <= elIndj + step - 1)
          //   elements2D[i][j].classList = 'elem';
          // if (i === elIndi && j === elIndj)
          //   elements2D[i][j].classList = elClass;
          if ((i === elIndi - step || i === elIndi + step || j === elIndj - step || j === elIndj + step || (i === elIndi && j === elIndj)) && i >= elIndi - step && i <= elIndi + step && j >= elIndj - step && j <= elIndj + step) {
            elements2D[i][j].classList = elClass;
            console.log('click');
          }
        }
    });
  }
}

// Reset button
resetBtn.addEventListener('click', () => {
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
      elements2D[i][j].classList = 'elem';
    }
  }
});