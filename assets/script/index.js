'use strict';

let createButton = document.querySelector('.create');
let storage = document.querySelector('.storage');
let shapeSelector = document.querySelector('.shape');
let colorSelector = document.querySelector('.color');

createButton.addEventListener('click', function() {
  let newShape = document.createElement('div');

  newShape.className = `${shapeSelector.value} ${colorSelector.value}`;
  storage.appendChild(newShape);
});


