
//Create HTML Tag
function createDiv(height = '50px', width = '50px', border = 'solid 1px red') {
  let div = document.createElement('div');
  div.style.height = height;
  div.style.width = width;
  div.style.border = border;
  document.body.appendChild(div);
  return div;
}
console.log(createDiv(undefined, undefined, 'solid 3px black'))

//Date Test
console.log("Date Testing")
function date(d = today()) {
  console.log(d);
}
function today() {
  return (new Date()).toLocaleDateString("en-US");
}
console.log(today())

//Function Testing
let taxRate = () => 0.5;
let getPrice = function (price, tax = price * taxRate()) {
  return price + tax;
}
//let fullPrice = getPrice(120);
console.log(fullPrice = getPrice(120)); 

//Arguments Testing
function sum(...args) {
  let total = 0;
  for (const x of args) {
    total += x;
  }
  return total;
}
console.log(sum(1, 2, 3));

//Spread Operator testing
const odd = ['Hi', 'Hello', 'How are you?'];
const combined = ['See You', 'Bye', 'Next Time', ...odd];
console.log(combined);

//Compare Function
function compare(a, b) {
  return a - b;
}
let result1 = compare.apply(null, [1, 2]);
console.log(result1);
let result2 = compare(...[1, 2]);
console.log(result2); 

//Spread Operator and Strings
let chars = [...'Beauty'];
let chars1 = ['Beauty']
console.log(chars); 
console.log(chars1)

//Array Entries Method
let colors = ['Red', 'Purple', 'Black'];
for (const [index, color] of colors.entries()) {
  console.log(`${color} is at index ${index}`);
}


