// Objects

// POJO – Plain Old JavaScript Object

// const volume = 250;

// const cupOfCoffee = {
//   volume, // no need to duplicate key: value notation when already created variable with value has a name that matches our desired key name
//   isFull: true,
//   type: 'Cafe Latte',
//   drink: () => {
//     console.log('I drink coffee');
//   },
//   printInfo: function() {
//     console.log(`My cup of ${this.type} has volume ${this.volume} mL.`); // `this` exists in the context of THIS object
//   }
// };

// const { printInfo } = cupOfCoffee;

// printInfo();  // variables `type` and `volume` does not exist in THIS (global) context (after Destructuring assignment)
// // How to add context of `this` to this function?
// // fn.bind(thisArg) – returns a new function with assigned context to original function
// const printInfoWithContext = printInfo.bind(cupOfCoffee);
// printInfoWithContext(); // console.log displays info about my cup of coffee
// // fn.call(thisArg) – calls a function immediately with provided context
// printInfo.call(cupOfCoffee); // console.log displays info about my cup of coffee


// // Iterate keys of object – for loop
// for (const key in cupOfCoffee) {
//   console.log(`The value of key "${key}" is equal ${cupOfCoffee[key]}`);
// }

// // Iterate keys of object – map/forEach keys
// Object.keys(cupOfCoffee).forEach(key => {
//   console.log(`The value of key "${key}" is equal ${cupOfCoffee[key]}`);
// });

// class Car {
//   // In constructor we provide variable arguments that are necessary when we create new object of this class
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }

//   // Variables that are not required when we create new object of this class
//   doors = 5;
//   isTurnedOn = false;
//   speed = 0;

//   // Methods of the class
//   turnOn() {
//     this.isTurnedOn = true;
//   }

//   turnOff() {
//     this.isTurnedOn = false;
//   }

//   accelerate() {
//     this.speed += 10; // this.speed = this.speed + 10
//   }

//   decelerate() {
//     this.speed -= 10;
//   }

//   displayInfo() {
//     console.log(`Manufacturer: ${this.brand}; Model: ${this.model}.`);
//   }

//   // Static methods are not accessible from object of this class, if needed, we need to call this method from class directly
//   /*
//     const cars = [new Car('Renault', 'Coupe'), new Car('Volkswagen', 'Passat')];
//     const carNames = cars.map(Car.displayCarName); // now `carNames` will contain only the model name of each car: ['Coupe', 'Passat']
//   */
//   static displayCarName(car) {
//     return car.name;
//   }
// }

// const myFirstCar = new Car("Opel", "Astra");
// console.log(myFirstCar);
// myFirstCar.displayInfo();

// class Pen {
//   constructor(color) {
//     this.color = color;
//     // we assign context of the class to the method, so method will now the context and properties of class
//     // even when called OUTSIDE the context (like in event listener executed in method `addClickEventListener`
//     this.displayMyPenColor = this.displayMyPenColor.bind(this);
//   }

//   writeText(text) {
//     console.log(text);
//   }

//   displayMyPenColor() {
//     console.log(`I have ${this.color} pen!`); // accessing value of property inside class: this.varName
//   }

//   addClickEventListener() {
//     document.querySelector('button').addEventListener('click', () => {
//       console.log(`I have ${this.color} pen!`);
//     });
//   }
// }

// const myGreyPen = new Pen('grey');
// myGreyPen.displayMyPenColor();
// myGreyPen.addClickEventListener();

// const obj = {
//   color: 'grey',
//   displayMyPenColor() {
//     console.log(`I have ${this.color} pen!`);
//   }
// };

// const { displayMyPenColor } = obj;
// displayMyPenColor.call(obj);
// const newFn = displayMyPenColor.bind(obj);
// newFn();

// DOM, querySelector, addEventListener

// querySelector or querySelectorAll – returns element or NodeList of elements that are matching
// provided criteria (CSS notation)
// const container = document.querySelector('.exercise');
// // Event Delegation – we create only one listener to detect event on one from many elements inside given container
// // element.addEventListener(typeOfEvent, function);
// container.addEventListener('click', event => {
//   if (event.target.nodeName === 'BUTTON') {
//     console.log(event.target.value);
//   }
// });

// Add new elements to the page
const addNewParagraphButton = document.querySelector('#add-paragraph-element');
const listOfParagraphsContainer = document.querySelector('#list-of-paragraphs');
addNewParagraphButton.addEventListener('click', () => {
  const newParagraph = document.createElement('p');
  // newParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const newTextNode = document.createTextNode(`${+new Date()}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`);
  newParagraph.appendChild(newTextNode);
  const referenceChild = listOfParagraphsContainer.children[0];
  // listOfParagraphsContainer.appendChild(newParagraph);
  // listOfParagraphsContainer.insertBefore(newParagraph, listOfParagraphsContainer.firstChild);
  listOfParagraphsContainer.replaceChild(newParagraph, referenceChild);
});

// Modify elements
const changeColorButton = document.querySelector('#change-color');
changeColorButton.addEventListener('click', () => {
  listOfParagraphsContainer.style.color = 'orange';
  listOfParagraphsContainer.innerHTML = '<b>Lorem ipsum</b>';
});

// Delete elements from the page
const deleteParagraphButton = document.querySelector('#delete-paragraph-element');
const listOfParagraphsToDeleteContainer = document.querySelector('#list-of-paragraphs-to-delete');
deleteParagraphButton.addEventListener('click', () => {
  // Element Node – children[0] instead of .firstChild
  const referenceChild = listOfParagraphsToDeleteContainer.children[0];
  listOfParagraphsToDeleteContainer.removeChild(referenceChild);
});

// Remove whole element instead of child inside
const deleteContainer = document.querySelector('#delete-container');
deleteContainer.addEventListener('click', () => {
  listOfParagraphsToDeleteContainer.remove();
});

// const triggerSetTimeoutButton = document.querySelector('#trigger-set-timeout');
// const stopSetTimeoutButton = document.querySelector('#stop-set-timeout');
// let consoleLogAfterSecond = null;

// triggerSetTimeoutButton.addEventListener('click', () => {
//   consoleLogAfterSecond = setTimeout(() => {
//     console.log('Triggered after one second');
//   }, 5000);
// });
// stopSetTimeoutButton.addEventListener('click', () => {
//   console.log('timeout cleared');
//   clearTimeout(consoleLogAfterSecond);
// });

// const triggerSetIntervalButton = document.querySelector('#trigger-set-interval');
// const stopSetIntervalButton = document.querySelector('#stop-set-interval');
// let consoleLogEverySecond = null;

// triggerSetIntervalButton.addEventListener('click', () => {
//   consoleLogEverySecond = setInterval(() => {
//     console.log('Triggered after one second');
//   }, 1000);
// });
// stopSetIntervalButton.addEventListener('click', () => {
//   console.log('interval cleared');
//   clearInterval(consoleLogEverySecond);
// });
