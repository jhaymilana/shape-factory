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
  constructor(shape, color) {
    this._shape = shape;
    this._color = color;
  }

  set shape(shape) { this._shape = shape; }
  set color(color) { this._color = color; }

  get id() { return this._shape; }
  get name() { return this._color; }

  getInfo() {
    return `Unit: ${colorSelector.value} ${shapeSelector.value}`;
  }
}

function createShape() {
  let newShape = document.createElement('div');

  newShape.className = `${shapeSelector.value} ${colorSelector.value}`;
  storage.appendChild(newShape);
}

createButton.addEventListener('click', function() {
  if (storage.childElementCount <= 19) {
    createShape();
//  unitArray.push(``);
  } else {
    output.innerHTML = 'The storage is full!'
  }
});

// push() to add objects into array
let unitArray = [];