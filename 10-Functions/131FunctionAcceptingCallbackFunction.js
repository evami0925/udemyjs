'use strict';

//LESSON 131 Function accepting callback function

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' '); //需注意
};

//Higher-oder function
const transformer = function (str, fn) {
  console.log(fn(str));
  console.log(fn.name); //function有method，也有properties  在此one of property is name property
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord); //这里upperFirstWord只是pass in value了，并没有call functio//知识点
transformer('JavaScript is the best!', oneWord); //callback function====do not call them ourselves,but instead we call JS to basically tell them later

const high5 = function () {
  console.log('🙌');
};

document.body.addEventListener('click', high5);
//addEvenetListener 也是higher order function // 这里的high5 是call back function
