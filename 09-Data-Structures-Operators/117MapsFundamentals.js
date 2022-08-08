'use strict';

//创建map
const rest = new Map();
//增加data to a map， use set method知识点
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze,Italy');
console.log(rest.set(2, 'Lisbon,Portugal'));
//CALLING THE SET METHOD LIKE THIS, does not only update the map that's called on
//but also returns the map知识点

//change the next set知识点
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open:D')
  .set(false, 'We are closed');

//Read data from a map, use get method知识点
console.log(rest.get('name'));
console.log(rest.get(true));

//usecase
const time = 21;
console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));

//判断是否这个map contains a certain key知识点
console.log(rest.has('categories'));

//delete element from a map, which happens based on the key\知识点
rest.delete(2);
console.log(rest);

//comparig 删除这个 to objects，we can also delete properties from objects using Delete Operator.
//Objects 也有 has 这个method，which is called hasOwnProperty

//Maps have the size property rest.size
console.log(rest.size);

//remove all elements from maps
// rest.clear();

//we can use array or objects as map keys
rest.set([1, 2], 'Test'); //知识点 NOTE
console.log(rest);
console.log(rest.size);
console.log(rest.get([1, 2])); //这样是没办法调这个array的数据的，即使是同一个样子的element，
//但他们not the same object in the heap,所以需要如下查询//知识点 NOTE  //需注意
const arr = [1, , 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
rest.set(document.querySelector('h1'), 'heading'); //知识点 NOTE
console.log(rest);

//118 MAPS-ITERATION

//更推荐的增加maps element的方法//知识点 NOTE
const question = new Map([
  ['question', "what's the best programming language in the world?"],
  [1, 'C'],
  [2, 'JAVA'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question);

//上述很像array structure that is returned from calling object.entries即 可以联想到可以从
//object.entries转成object//知识点 NOTE

// Convert object to map
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
  [`day-${2 + 4}]`]: {
    open: 0,
    close: 24,
  },
};

const hoursMap = new Map(Object.entries(openingHours));

//ITERATION

//FOR-OF LOOP (//回想object里 for-of loop ，question这里是用object.entries（object）)//知识点 NOTE

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`answer ${key}:${value}`);
}
// const answer = Number(prompt('YOUR ANSWER'));
// console.log(question.get(question.get('correct') === answer));

//convert MAP TO ARRAY //知识点 NOTE
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.values()]); //注意格式
console.log([...question.keys()]);
