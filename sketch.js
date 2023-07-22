const DEFAULT_COLOR = "white";
const DEFAULT_GRID_SIZE = 16;
const container = document.querySelector("#container");

const range = document.querySelector("#range-input");
range.value = DEFAULT_GRID_SIZE;

const color = document.querySelector("#color-picker");

const span = document.querySelector("#show-input");
span.innerHTML = `${DEFAULT_GRID_SIZE} x ${DEFAULT_GRID_SIZE}`;

let createGrid = () => {
  let userInput = range.value;
  let gridHeight = 500 / userInput;
  let gridWidth = 500 / userInput;

  for (let i = 1; i <= userInput ** 2; i++) {
    const div = document.createElement("div");

    div.classList.add("grid");

    div.style.cssText = `height: ${gridHeight}px; width: ${gridWidth}px`;

    container.appendChild(div);
  }
};

createGrid();

range.addEventListener("change", () => {
  span.innerHTML = `${range.value} x ${range.value}`;
});

const btnApply = document.querySelector("#apply");

btnApply.addEventListener("click", () => {
  let gridPixels = container.querySelectorAll("div");
  gridPixels.forEach((gridPixel) => gridPixel.remove());
  createGrid();
});

color.addEventListener("change", () => {
  if (container.hasChildNodes()) {
    grids = gridSelector();
    grids.forEach((grid) => {
      grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = color.value;
      });
    });
  }
});

let gridSelector = () => {
  return document.querySelectorAll("#container div");
};

const btnDraw = document.querySelector("#draw");

btnDraw.addEventListener("click", () => {
  grids = gridSelector();
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = color.value;
    });
  });
});

const btnErase = document.querySelector("#erase");

btnErase.addEventListener("click", () => {
  grids = gridSelector();
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = DEFAULT_COLOR;
    });
  });
});

const btnClear = document.querySelector("#clear");

btnClear.addEventListener("click", () => {
  grids = gridSelector();
  grids.forEach((grid) => {
    grid.style.backgroundColor = DEFAULT_COLOR;
  });

  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = DEFAULT_COLOR;
    });
  });
});
