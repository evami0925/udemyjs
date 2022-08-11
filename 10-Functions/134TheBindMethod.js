'use strict';

//LESSON 134 BIND METHOD

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas');
lufthansa.book(635, 'Seteve');

const book = lufthansa.book;

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss AIR LINES',
  iataCode: 'LX',
  bookings: [],
};

//CALL METHOD
// book.call(eurowings, 23, 'Sarah');

//BIND METHOD

//BIND ALSO allows us to manually set this keywords for any function call
//but bind does not immediately call the function. instead it returns a new function
//where this keyword is bound
//SO it's set to whatever value we passed into bind

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');
bookLH();

//in the call method ,we can pass multiple arguments here, in the bind method, we can do the same,then these arguments will
//be also set in stone,which means the function will always be called with same arguments 例如如下
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

//with EVENT LISTENERS 知识点
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); //this keyword is the buy button element,as event handler function, this keyword always points to
  // the element on which the handler is attached to 即 下述 lufthansa.buyPlane 是handler function，他attached to的是
  //document.querySelector('.buy')这个element，所以inside 这个lufthansa.buyPlane 的function，this keyword will point to
  // the button element
  this.planes++;
  console.log(this.planes);
};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

//如果我们只是如下call lufthansa.buyPlane () 那keyword就是lufthansa，因为是object calling the function
lufthansa.buyPlane();

//所以如果在event listener这还是想让他call lufthansa 则意味着我们需要mannuly define this keyword。加入function，and not to call it  *** .bind(传的是object作为argument)
//所以需要bind 写成
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application 即we can preset parameter

const addTax = (tax, value) => value + value * tax;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.2); //知识点
console.log(addVAT(100));

//上述语句还可以用function return function写成如下
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addTax2 = addTaxRate(0.23);
console.log(addTax2(200));
