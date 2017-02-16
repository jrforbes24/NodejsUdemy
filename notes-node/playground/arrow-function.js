var square = (x) => x * x;
console.log(square(9));

var user = {
  name: 'John',
  sayHi: () => {
    console.log(arguments);
    console.log('Hi ' + user.name);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log('Hi. I"m ${this.name}');
  }
};

user.sayHi(1, 2, 3);
