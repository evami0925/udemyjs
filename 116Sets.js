//LESSON 116 SETS
//SETS JUST A COLLECTION OF UNIQUE VALUES,CAN BE DIFFERENT DATA TYPES
//SETS ARE ALSO ITERABLE
//SETS ELEMENTS ARE UNIQUE, AND ORDER ARE IRRELEVANT元素不可重复&无顺序性

//create a new Set
const orderSet = new Set(['Pasta', 'Pizza', 'Risotoo', 'Pasta', 'Pizza']);
console.log(orderSet);
console.log(new Set('Jonas'));

//知识点
//GET SIZE of set
console.log(orderSet.size);

//certain element in Sets
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
//compare with Array, has method of Sets 和includes method of Arrays很像

//Add new element to sets
orderSet.add('Garlic Bread');
console.log(orderSet);

//delete element from sets
orderSet.delete('Risotto');

//清楚sets里面所有elements
orderSet.clear();

//retrieve· element·from Sets===sets没办法get data out of sets
//即如果想store elements且 retrieve it， 那就用array

//可以loop sets
for (const order of orderSet) console.log(order);

////USE CASE======REMOVE duplicate elemets from array知识点
let staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
let staffUnique = new Set(staff);
console.log(staffUnique);
//想把staffUnique变成array
staffUnique = [...new Set(staff)]; //利用解构重组
console.log(staffUnique);
console.log(new Set('Jonas').size);
