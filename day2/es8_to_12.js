///promise.all
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Hello');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

//promise.race
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 10, 'one');
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 20, 'two');
});

Promise.race([promise4, promise5]).then((value) => {
  console.log(value);
});

//set
/*
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
alert( set.size ); 

for (let user of set) {
  alert(user.name); //3,john,pete,mary
}  */

//map
const map1 = new Map();
map1.set('flower', 'fruit');
console.log(map1.get('flower'));
console.log(map1.get('juice'));

//array.of
let numbers = Array.of(3);
console.log(numbers.length); // 1
console.log(numbers[0]); // 3

//array.from
console.log(Array.from('ooo'));// ["o", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x));// [2, 4, 6]

//array find
const array1 = [4, 15, 8, 100, 50];
const found = array1.find(element => element > 10);
console.log(found);//1

//array findIndex
const array2 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array2.findIndex(isLargeNumber));

//Object.assign
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);//{ a: 1, b: 4, c: 5 }
console.log(returnedTarget === target);//true

//object.is
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true


//startsWith()
const str = 'Hello beauty';
console.log(str.startsWith('Hel'));//true
console.log(str.startsWith('Hel', 3));//false

//endsWith()
const str1 = 'Cats are the best!';
console.log(str1.endsWith('best!'));//true
console.log(str1.endsWith('best', 17));//true
const str2 = 'Is this a question?';
console.log(str2.endsWith('question'));//false

//string include
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);//"The word "fox" is in the sentence"




