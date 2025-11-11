/* const weekdays = ["esmaspaev","teisipaev","kolmapaev","neljapaev","reede","laupaev","puhapaev","puhkepaev","pesupaev"]; */

/* console.log (weekdays[0]);
console.log (weekdays[1]);
console.log (weekdays[2]);
console.log (weekdays[3]);
console.log (weekdays[4]);
console.log (weekdays[5]);
console.log (weekdays[6]);
console.log (weekdays[7]); */

// -----------------------------------------
// 
// -----------------------------------------
/* for (let i = 0; i < weekdays.length; i++) {
    console.log(weekdays[i]);
} */

/* console.log(weekdays.length); // naitab mittu elemente on maasiivis  */

/* const temperatures = [10, 12, 14, 16, 10]; */
/* for (let i = 1; i <= 5; i ++) {
const temp = Number (prompt ('Mitu kraadi on hetkel temperatuur?'));
temperatures.push(temp);
} */
/* let sum = 0;
for (let  i = 0;  i < temperatures.length;  i++) { 
sum = sum + temperatures[i];
console.log(sum)
}

const average = sum / temperatures.length;

console.log (average);
console.log(temperatures.length-1); */
// ------------⬇️⬇️⬇️⬇️⬇️---------------
// 1 - 10 calculation 

/* const numbers = []; // tühi massiiv

for (let i = 1; i <= 10; i++) {
  numbers.push(i); // lisame massiivi ühe arvu korraga
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]); // kuvame iga elemendi konsoolis
} */

// ------------⬇️⬇️⬇️⬇️⬇️---------------tagurpidi 

/* const numbers = [];

for (let i = 1; i <= 10; i++) {
  numbers.push(i);
}

// väljastame tagurpidi
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
} */

// ------------⬇️⬇️⬇️⬇️⬇️---------------hinnad 

/* const prices = [12, 45, 23, 67, 34, 90, 45,67, 35, 17]

for (let i = 0; i < prices.length; i++){
    console.log(prices[i]*1)
} */

// ------------⬇️⬇️⬇️⬇️⬇️---------------0/2/4/6/8

/* const prices = [12, 45, 23, 67, 34, 90, 45,67, 35, 17]

for (let i = 0; i < prices.length; i = i+2){
    console.log(prices[i]*1)
}  */
// ------------⬇️⬇️⬇️⬇️⬇️---------------

/* let k = 'kolmapaev';
k = 'kolmapaev';
console.log(k); */
/* 
const weekdays = ["esmaspaev","teisipaev","kolmapaev","neljapaev","reede","laupaev","puhapaev"];
weekdays = []; */

// #region------------⬇️⬇️⬇️⬇️⬇️---------------Match object 

/* //console.log(Math.PI);
const sales = [10, 5, 15, 20];

console.log(Math.random()); // juhuslik arv 0 ja 1 vahel

console.log = Math.floor(Math.random() * 4) - 1; // juhuslik täisarv 0–2 vahel
//console.log(sales[randomNumber]); */
//#endregion

// ⬇️⬇️⬇️⬇️⬇️---------------------------takes one and counts back 1 
/* //#region 
function dice() {
  const randomNumber = Math.ceil(Math.random() * 6);
  return randomNumber;
} */

/* const maNumber = Number (prompt('Palun sisesta maksimaalne juhuarv'));
console.log (dice(max.Number)); */

/* const names = ['Jaan', 'Juta', 'Kalle', 'Malle', 'Tiina', 'Juhan'];
const randomNumber = dice(names.length);
console.log(names[randomNumber - 1]); */

//#endregion
// ------------------------⬆️⬆️⬆️⬆️⬆️
// ---------------------------

/* const names = ['Mati', 'Kati', 'Kalle', 'Maalle'];
for (let i = 0; i < names.length; i++) {
  console.log (names [i]);
} */

// -------2025-11-11 10:53:17 -------------------------

function logElements(array){
  for( let i = 0 ; i < array.length; i ++) {
    console.log(array[i]);
  }}

  const names = ['Jaan', 'Juta', 'Kalle', 'Malle', 'Tiina', 'Juhan'];
  const Number = [1, 2, 3, 5, 7, 9, 0];

  logElements(names);
  logElements(Number);
