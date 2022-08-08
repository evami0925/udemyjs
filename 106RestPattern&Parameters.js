'use strict';

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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//106 REST PATTERN AND REST PARAMETERS

//  1)Destructing
//知识点，rest pattern always should be the last element in the destructing assignment &有且只有一个rest
//知识点  rest pattern use collect values into an array

//array
//spread, beacause on right side of =
const arr = [1, 2, ...[3, 4]];
//Rest, beacause on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//objects
//select only sat, rest should go into a new object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2)Functions
//知识点 NOTE在function里面， take all numbers or values packed into one array that we passed into functions
const add = function (...numbers) {
  console.log(numbers); //numbers 此时就已经重组成数组了
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(2, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

//如果拿到的是一个数组例如下面
const x = [23, 5, 7];
add(...x);

//知识点 & NOTE  RESET 使用情况和spread一样，we can only use the RESET ... when building an array, or when we want pack values into one array and pass array into a fucntion

//见29行
restaurant.orderPizza('prawn', 'rice', 'olive', 'tomato');
restaurant.orderPizza('mushrooms'); //此时otheringrediants会形成一个[]

//NOTE SPREAD OPERATOR USED BY =====write Values separated by Commas
//     RESET OPERATOR  USED BY =====write Variables names separated by Commas
