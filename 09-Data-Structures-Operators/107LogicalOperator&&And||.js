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

//LESSON 107 SHORT CIRCUITING

// 知识点  &&和 || USE ANY DATA TYPE, RETURN ANY DATA TYPE,SHORT-CIRCUTING

//      ||operator
console.log(3 || 'Jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

//    知识点  || undefined,0,'',null 这些是falsy value

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
//此时会返回Hello

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//       &&operator && is only true if all the operator are true, if the first is false,the entire will be false
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 & null && 'jonas');
//
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
//上述判断句可以写成
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// SUMMARY  || OR operator will return the first truty value of all the operands, or all the last value of all of them are falsy=====
//we can use OR OPERATOR TO SET DEFALUT VALUES 知识点 NOTE
//          &&  And operator will return the first false value of all the operands,or all the last value of all of them are truty
//we can use AND OPERATOR TO execute code in the second operand if the first one is true知识点 NOTE

//LESSON 108 NULLISH COALESCING OPERATOR
//      ||operator 和三联运算符 都not works with 0, 只有用？？

restaurant.numGuests = 0;

const guests3 = restaurant.numGuests || 10;
console.log(guests3);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

//知识点  Nullish： null and undefined (NOT 0 and "")
