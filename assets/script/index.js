'use strict';

let createButton = document.querySelector('.create');
let storage = document.querySelector('.storage');
let shapeSelector = document.querySelector('.shape');
let colorSelector = document.querySelector('.color');
let output = document.querySelector('.output p');

createButton.addEventListener('click', function() {
  if (storage.childElementCount <= 19) {
    let newShape = document.createElement('div');

    newShape.className = `${shapeSelector.value} ${colorSelector.value}`;
    storage.appendChild(newShape);
  } else {
    output.innerHTML = 'The storage is full!'
  }
});


