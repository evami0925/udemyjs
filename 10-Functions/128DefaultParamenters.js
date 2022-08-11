'use strict';

//LESSON 128 Default Paramenter
const bookings = [];
const createBooking = function (
  flightNumber,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers=numPassengers || 1;
  // price=price||199;
  const booking = {
    flightNumber,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);

//如果想skip a defalut paramenter 时 用undefined
createBooking('LH123', undefined, 1000);
