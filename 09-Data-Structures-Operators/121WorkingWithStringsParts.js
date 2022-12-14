'use strict';

//LESSON 121WorkingWithStringsParts1  ========== //STRING METHOD

//知识点
const aireline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(aireline.length);
console.log('B737'.length);

//IndexOf  lastIndexOf   =====key sensetive 大小写敏感//知识点
console.log(aireline.indexOf('r'));
console.log(aireline.lastIndexOf('r'));
console.log(aireline.indexOf('Portugal'));

//USE CASE---EXTEACT PART OF A STRING USING THE SLICE METHOD//知识点
//AND SLICE method needs index as arguments

console.log(aireline.slice(4)); //返回一个substring
console.log(aireline.slice(4, 7)); //specify an end parameter，且记住包头不包尾

console.log(aireline.slice(0, aireline.indexOf(' ')));
console.log(aireline.slice(aireline.lastIndexOf(' ') + 1));

//negative began argument
console.log(aireline.slice(-2));
console.log(aireline.slice(1, -1));

//Practise
const checkMiddleSeats = function (seat) {
  if (seat.slice(-1) === 'B' || seat.slice(-1) === 'E') {
    console.log('you have seat in the middle');
  } else {
    console.log('you have seat in the side');
  }
};
checkMiddleSeats('11B');
checkMiddleSeats('11A');

//LESSON 122WorkingWithStringsParts2

//toLowerCase()   toUpperCase() method//知识点
console.log(aireline.toLowerCase());

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing emails
const email = 'hello@jonas.jo';
const loginEmail = '    Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

//REPLACING//知识点
const priceGB = '288,F97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);
const annocements =
  'All passengers come to boarding door 23.Boarding door 23！';
console.log(annocements.replaceAll('door', 'gate'));

//return BOOLEANS, includes(), startsWith(), endsWith() method//知识点
const plan = 'Airbus A320neo';
console.log(plan.includes('A320'));
console.log(plan.startsWith('Air'));

if (plan.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('parts of the New ARirbus family');
}

//practise
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`you are not allowed on board`);
  } else {
    console.log('you are welcome');
  }
};
checkBaggage(`I have some food and Knife`);
checkBaggage('have some snacks and gun for protection');

//LESSON 123WorkingWithStringsParts3
//split method//知识点   //需注意
console.log('a+very+nice+string'.split('+')); //NOTE split之后形成的是ARRAY ['a', 'very', 'nice', 'string']
console.log('eva mi'.split(' ')); // ['eva', 'mi']

const [firstname, lastname] = 'jonas schedtmann'.split(' ');
//join method//知识点 NOTE  array在join之后 又变成string类型//需注意
const newName = ['Mr.', firstname, lastname.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1)); //还有个方法 namesUpper.push(n.replace(n[0],n[0].toUpperCase()))
  }
};
capitalizeName('jessica ann smith davis');
capitalizeName('JONAS SCHMEDTMANN');

//padding method//知识点

const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; // number 数据类型转成String有几种方法，String()，或者是number+’‘
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

maskCreditCard(2345654345643456543);
maskCreditCard('2343567865432567432565432');

//Repeat method//知识点

const message2 = 'Bad weather......all departures delayed....';
console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${'🛫'.repeat(n)}`);
};

planesInline(2);
planesInline(6);

//concat method//知识点
//见mdn
