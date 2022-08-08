'use strict';

// LESSON 103 Destructing Arrays 解构

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // }
  //   openingHours: {
  //     thu: {
  //       open: 12,
  //       close: 22,
  //     },
  //     fri: {
  //       open: 11,
  //       close: 23,
  //     },
  //     sat: {
  //       open: 0, // Open 24 hours
  //       close: 24,
  //     },
  //   },
};

// LESSON 103 Destructing Arrays 解构
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

let [first, , second] = restaurant.starterMenu;
console.log(first, second);

[first, , second] = [second, , first];
console.log(first, second);

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);
//Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, j, [k]] = nested;
console.log(i, j, k);
//NOTE Set Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//104 Destructing Object 解构

const restaurants = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function ({ time, address, starterMenuIndex, mainMenuIndex }) {
    console.log(
      `order successful, you ordered ${this.starterMenu[starterMenuIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered into ${address} at ${time}`
    );
  },
};

restaurants.order({});

const order = {
  time: '12:10pm',
  address: 'glen Waverley',
  starterMenuIndex: 2,
  mainMenuIndex: 1,
};

//retrieve data
const { name, openingHours, categories } = restaurants;
console.log(name, openingHours, categories);

// set name for data
const { name: names, openingHours: hours, categories: type } = restaurants;
console.log(names, hours, type);

//NOTE Set default value
const { meal = [], starterMenu: menu = [] } = restaurants;
console.log(meal, menu);

//NOTE mutating variables
let a = 111;
let b = 99;
const obj = { a: 23, b: 11 };
({ a, b } = obj);
console.log(a, b);

//Nested object
const { fri } = openingHours;
console.log(fri);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const {
  openingHours: { thu, sat },
} = restaurants;
console.log(thu, sat);

//LESSON 105 SPREAD OPERATER ....

const arr1 = [1, 2, 3];

const newArr = [1, 2, ...arr1];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurants.mainMenu, 'rice'];
console.log(newMenu);

//NOTE ...的方法 takes all elements from the array 但没有创建新的variable，所以 we can only use it in places where we would otherwise
//write values separated by commas
const newMainMenu = [...restaurants.mainMenu];
let newCategories = [...restaurants.categories];
newCategories = [...newCategories, ...newMainMenu];
console.log(newCategories);

//NOTE...的方法 适用于所有 Iterables: arrays, strings, maos, sets, 但没有objects
const str = 'jonas';
const newLetters = [...str, '', 'M', 'e'];
console.log(newLetters);
//NOTE STILL Only use the spread operator...when building an array or when we pass values into a function即multiple values sepatated by a comma
//are usually only expected when we pass arguments into a function, or when we build a new array

//EXAMPLES

const rest = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    statusbar: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
//   order: function ({ time, address, starterMenuIndex, mainMenuIndex }) {
//     console.log(
//       `order successful, you ordered ${this.starterMenu[starterMenuIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered into ${address} at ${time}`
//     );
//   },

//   orderPizza: function (int1, int2, int3) {
//     console.log(`Here is your Pizza is with 3 ingrediants, ${int1},${int2},${int3}
//   }`);
//   },
// };
// const integrediants = [
//   prompt('your pizza inte1'),
//   prompt('your pizza inte1'),
//   prompt('your pizza inte1'),
// ];
// rest.orderPizza(...integrediants);

//OBJECTS

const restaurantsCopy = { ...rest };
restaurantsCopy.name = 'pajama';
console.log(restaurantsCopy);
console.log(rest);

//REST PATTERN,
//ARRAY
const team = [1, 2, 3, 4, 5];
const [e, f, ...others] = team;
console.log(e, f, others);

const [o, , M, othersteam] = team;
console.log(o, M, othersteam);
//OBJECTS
const { statusbar, ...weekdays } = rest.openingHours;
console.log(weekdays);

const add = function (...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum = sum + number[i];
    console.log(sum);
  }
};
const mistery = [123, 23, 55];
add(...mistery);

//NOTE SPREAD OPERATOR, WRITE VAULES, Separated by a comma
//     REST PATTERN, write variable names , Separated by a comma

//LESSON 107 SHORT CIRCUITING
//USE ANY DATA TYPE, RETURN ANY DATA TYPE
//NOTE    ||  当第一个值是truty时，返回第一个，第一个是false时返回第二个，   注意，undefined，’‘， 0， null，false都是false value

console.log(undefined || 0 || '' || 'hello' || 23 || null);
//返回hello;   返回第一个truty value

//NOTE   &&当第一个值是false时，返回第一个，即返回第一个false value，如果没有false就返回最后一个
console.log('HELLO' && 23 && null && 'jonas');
//返回null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//SUMMARY  ||operater will return the first truty value of all the operands, otherwise return the last value if all of them are falsy
//         &&operater will return the first falsy value of all the oeprands, otherwise return the last value if all of them are truty

//NOTE     we can use || operator to set defalut vlaue, use && operator to execute code in the second operand if the first one is true

//LESSON 108 NULLISH COALESCING OPERATOR

//NULLISH: null and undefined (not 0, '')
restaurant.numGuests = 0;
const guestCorret = restaurant.numGuests ?? 10;
console.log(guestCorret);

//SUMMARY 可以利用&&去给已经存在value的variable去更换值
//       可以利用||判断是否这个variable有值，
