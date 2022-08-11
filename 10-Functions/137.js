'strict mode';

const secureBooking = function () {
  let passengerCunt = 0;
  return function () {
    passengerCunt++;
    console.log(`${passengerCunt} passengers`);
  };
};
passengerCunt = 10;

const booker = secureBooking();
booker();
booker();

/////////////////////////////////
const g = function () {
  const a = 23;
  const f = function () {
    console.log(a * 2);
  };
  f();
};
g();
//

/////////////////////////////////
//定义在外面和里面
let j; 
const i = function () {
  const a = 23;
  j = function () {
    console.log(a * 2);
  };
};
i(); //
j();
/////////////////////////////////
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

const [x, ...y] = [2, 3, 4];
console.log(x);
console.log(y);
