'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    //flight: `${this.iataCode}${flightNum}`,name: `${name}`,
  },
};

lufthansa.book(239, 'Jonas');
lufthansa.book(635, 'Seteve');
console.log(lufthansa);
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//CALL METHOD
book.call(eurowings, 23, 'Sarah'); //知识点 需注意 call the call method,then call method call the book function
console.log(eurowings);

book.call(lufthansa, 239, 'Mary');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss AIR LINES',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//APPLY METHOD, does not receive a list of arguments after the this keyword, instead, it goona to take array of the arguments
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
//现在已经不用apply了 而用...【】 用call method 如下
book.call(swiss, ...flightData);
