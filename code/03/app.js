/*let i = 0;
while ( i < 5) {
console.log (i);
i++;
console.log (i);
}*/

/*let i = 5;
while ( i <= 15) {
//console.log (i);
i++;
}

console.log (i);*/

/* let a = 10
for (let i = 5 ; i <= 15; i++) {
    console.log(a);
} */

//console.log(i);

/* for (let i = 0; i > 0; i++){
    console.log ('hello');
}

i = 1;
do {
    console.log (i); // naitab 1 
    i++; // vaartub saab 2
} while (i <= 5) // go till 5 and stop dont go to next ring */ 


/* const number = Number(prompt("Sisesta üks arv:"));
let i = 0;
let sum = 0

while (i <= number) {
      console.log(i + " + " + sum + " = " + (sum + i)); //  makes the visual calculation 
  sum = sum + i; // uuendame summat
  i++;
} */


//when i is 3 dont do anything else count 

/* const number = Number(prompt("Sisesta üks arv:"));
let i = 0;
let sum = 0

while (i <= number) {
    if ( i == 3){sum = sum + i;}
    console.log(i,sum);
  i++;
} */

// kivi paber scisors 

const player1 = prompt("Player 1: Vali kivi, paber, or kaared");
const player2 = prompt("Player 2: Vali kivi, paber, or kaared");

if (player1 === player2) {
  alert("Viik");

} else if (
  (player1 == "kivi" && player2 == "kaared") ||
  (player1 == "paber" && player2 == "kivi") ||
  (player1 == "kaared" && player2 == "paber")
) {
  alert("Player 1 wins! 🏆");

} else if (
  (player2 === "kivi" && player1 === "kaared") ||
  (player2 === "paber" && player1 === "kivi") ||
  (player2 === "kaared" && player1 === "paber")
) {
  alert("Player 2 wins! 🏆");
} else {
  alert("Invalid choice! Please type kivi, paber, or kaared.");
}