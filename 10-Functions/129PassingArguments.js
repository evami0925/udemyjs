'use strict';

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 23478945234,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  console.log(flightNum);
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 23478945234) {
    alert('Checked in');
  } else {
    alert('wrong passport');
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

//解析
const flightNum = flight;
const passenger = jonas;
