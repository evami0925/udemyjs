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

  //   order: function (starterMenuIndex, mainMenuIndex) {
  //     return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  //   },
  //orderDelivery:function (obj)知识点利用object拆分，直接写成下述格式
  orderDelivery: function ({ starterMenuIndex, mainMenuIndex, time, address }) {
    //   console.log(obj);
    console.log(
      `order received! ${this.starterMenu[starterMenuIndex]} and ${this.mainMenu[mainMenuIndex]} will be devlivered to ${address} at ${time}`
    );
  },
};
//知识点//CREATE METHOD,，we only pass in one obj to this function, as we receive that obj, we do immediately destructing
restaurant.orderDelivery({
  time: '18:10',
  address: 'glen waverley',
  starterMenuIndex: 2,
  mainMenuIndex: 2,
});

//上述pass in one obj还可以结合default value，如下
// orderDelivery: function ({
//     starterMenuIndex = 1,
//     mainMenuIndex = 0,
//     time = '20:00',
//     address,
//   })

// restaurant.orderDelivery({
//   address: 'glen waverley',
//   starterMenuIndex: 1,
// });
//LESSON 104 DESTRUCTING OBJECTS

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//variable name to be different to property name

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//set defalut values
const { menu = [], starterMenu: startes = [] } = restaurant;
console.log(menu, startes);
//知识点 it is helpful when we dont have or data hard-coded like we have it here

//mutating/switching variables while destructing objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//now we want to destructure this {a:23,b:7,c:14} object
//我们不能说const{a,b}因为上述已经declare a和b了
({ a, b } = obj);
console.log(a, b);
//知识点，如果需要overwrite上述意见declare过得variable，下述 array拆分的时候 加（），例如({ a, b } = obj);

//NESTED OBJECTS
//we want retrive fri //上面我们已经 提取了openingHours
const { fri } = openingHours;
console.log(fri);
//excise we want creat two variable, open and close for sat
const {
  sat: { open: o, close: c },
} = openingHours;
console.log(o, c);
//知识点 如果在nested object情况下提取variable，需要用：例如如下
// const {
//     openingHours: {
//       thu: { open, close },
//       fri,
//     },
//   } = restaurant;
//   console.log(open, close);

//CREATE METHOD,//看上边笔记第40行，
//we normally have a function with a lots of parameters, but dont know the order of parameters, instead of defining the parameters manully
//we can just pass an object into the function as an argument, and the function will then immediately destructure that object
