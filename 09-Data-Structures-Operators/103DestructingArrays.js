'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]]; //NOTE 创建一个array 返回值
  },
};

//LESSON 103 DESTRUCTING ARRAYS

//知识点  更换两个variable位置

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Excise====write a function for order food
//知识点 看上述创建一个array返回值，然后 拆分成两个values，即 用此方法，receive 2 return values from a function
// console.log(restaurant.order(2, 0));
//知识点  function return an array and then we can immediately destruct the result into different variables, its basically allows us to return multiple values from a function
const [start, mainCourse] = restaurant.order(2, 0);
console.log(start, mainCourse);

//NESTED destructuring
//知识点想取值2和【5,6】   // 在j取值【5,6】时 记住不要加【】
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

//如果取值2,5,6时
const [a, , [b, c]] = nested;
console.log(a, b, c);

//Default values
//知识点  set defalut values for the variables when we extracting them, 当不知道length of the array的时候，会非常有用
//so if we have an array that is shorter than we might think, then we might try to unpack the array in positions
//that don;t even exist
//尤其是用于when we get data from an API

//例如当我们不知道【8,9】的array长度的时候
let [q, w, e] = [8, 9];
console.log(q, w, e);
//此时e会是undefined，即 我们可以设置default values 如下
[q = 1, w = 1, e = 1] = [8, 9];
console.log(q, w, e);
// e会是1
