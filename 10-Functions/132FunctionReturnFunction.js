'use strict';

const greeting = function (greet) {
  return function (name) {
    console.log(`${greet} ${name}`);
  };
};

const greeterHey = greeting('Hey!');
greeterHey('Jonas');
greeting('Hello!')('Eva');

//Challenge 把上述function写成箭头函数

const greetArrow = greet => name => console.log(`${greet} ${name}`);

greetArrow('Morning')('Jonas');
