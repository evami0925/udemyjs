'use strict';

const weekdays = ['mon', 'tue', 'Wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    //NOTE1
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  openingHours, //NOTE3

  orderPasta(ing1, ing2, ing3) {
    //NOTE2
    console.log(`Here is your pasta with ${ing1},${ing2},${ing3} `);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
//LESSON 114 LOOPING OBJECTS,OBJECTS KEYS,VALUES AND ENTRIES
//FOR-OF LOOP 可以loop 一个array that is iterable，也可以loop over objects 不是iterable的，but in an indirect way

//Object Keys知识点
//property names即Keys （先用Object.keys方法 取出keys组成一个array，然后for-of loop，取出每个value
const a = Object.keys(openingHours);
console.log(a); //Object.keys 该方法是取property name成array

let openStr = `We are open on ${a.length} days`;
for (const day of a) {
  openStr += `${day}`;
}
console.log(openStr);

//Object Values知识点
const time = Object.values(openingHours);
console.log(time);

//ENTIRE OBJECT 用Object entries知识点
const entries = Object.entries(openingHours);
console.log(entries);
for (const [key, { open, close }] of entries) {
  //知识点 NOTE
  console.log(`on ${key},we open at ${open},close at ${close}`);
}
//知识点，如果是array里面提取 是array.entries（）具体操作 可以看LESSON 111,
// for (const [i, el] of menu.entries()) {
//     console.log(`${i + 1}:${el}`);//需注意
// }
