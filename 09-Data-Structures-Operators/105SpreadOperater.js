'use strict';

// Data needed for first part of the section
const restaurant = {
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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1},${ing2},${ing3} `);
  },
};

// LESSON 105 SPREAD OPERATOR

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

//create newmainMenu

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//spread operater ... takes all element from an array, and doesnot create new vaiables
//知识点 we can only use spread operater ... in places where we would write values separted by commas

//知识点，USE CASE====create shallow copy of array

const mainMenuCopy = [...restaurant.mainMenu];

//知识点，USE CASE====merge two arrays together
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

///知识点，spread operater ... works on all iterable， Iterables includes strings, arrays, maps, sets but Not objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
//知识点 & NOTE  we can only use the spread operater ... when building an array, or when we pass values into a fucntion 例如如下事情 就不会有用
//console.log(`${...str} Schmedtmann`); 因为${}这里不是expects multiple values spearated by a comma
const ingredients = [
  // prompt("let's make pasta! Ingredient 1?"),
  // prompt("let's make pasta! Ingredient 2?"),
  //  prompt("let's make pasta! Ingredient 3?"),
];
restaurant.orderPasta(...ingredients);

//知识点 spread operater ...works with Objects

//create newRestaurant

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

//USE CASE====create shallow copy of obejct
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
