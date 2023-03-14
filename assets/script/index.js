/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Assignment 2
Jayvee Milana

Shape Factory

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

'use strict';

let createButton = document.querySelector('.create');
let storage = document.querySelector('.storage');
let shapeSelector = document.querySelector('.shape');
let colorSelector = document.querySelector('.color');
let output = document.querySelector('.output p');


class shapeObject {
  constructor(shapeSelector, colorSelector) {
    this._shape = shapeSelector;
    this._color = colorSelector;
  }

  set shape(shape) { this._shape = shape; }
  set color(color) { this._color = color; }

  get id() { return this._shape; }
  get name() { return this._color; }
}

function createShape() {
  let newShape = document.createElement('div');

  newShape.className = `${shapeSelector.value} ${colorSelector.value}`;
  storage.appendChild(newShape);
}

function getInfo() {
  return `Unit: ${colorSelector.value} ${shapeSelector.value}`;
}

createButton.addEventListener('click', function() {
  if (storage.childElementCount <= 19) {
    createShape();
  } else {
    output.innerHTML = 'The storage is full!'
  }
});

let unitArray = [];