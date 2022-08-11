'use strict';

//LESSON 136 Immediately Invoke Fuction Pattern 即function只excuted once 且同时call function

//表达式形式
const run = function () {
  console.log('only show once');
};
run();

//上述如果写成IIFP形式即
(function () {
  console.log('only show once');
})();

//箭头函数形式
const runonce = () => console.log('only show once');

//写成IIFP如下

(() => console.log('only show once'))();
