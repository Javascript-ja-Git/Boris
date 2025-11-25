/* const tvs = [
    [86, 'Android', 100, 40],
    [52, 'Apple', 89, 30],
    [62, 'Samsung', 120, 35],
];

/* for (let i= 0; i< tvs.lenght; i++) {
console.log(tvs[i[3]]);}

) */

/* const tv = {
    diagonal: 86,
    opSystem: 'Android',
    powerConsumption: 100,
    weight: 40,
};

const user = {
    email: 'brs@tlu.ee',
    lastname: 'Sh',
    yearOfBirth: 1990,
};

console.log (tv.diagonal); */

/* const tvs = [{
    diagonal: 86,
    opSystem: 'Android',
    powerConsumption: 100,
    weight: 40,},
    {
    diagonal: 90,
    opSystem: 'Apple',
    powerConsumption: 110,
    weight: 50,},
    {
    diagonal: 100,
    opSystem: 'Samsung',
    powerConsumption: 200,
    weight: 60,},
]; */

// -------2025-11-25 11:49:14 -----📢-------

/* const tvs = [{
    id:1,
    diagonal: 86,
    opSystem: 'Android',
    powerConsumption: 100,
    weight: 40,},
    {
    id:2,
    diagonal: 90,
    opSystem: 'Apple',
    powerConsumption: 110,
    weight: 50,},
    {
    id:3,
    diagonal: 100,
    opSystem: 'Samsung',
    powerConsumption: 200,
    weight: 60,},
];

/* for (let i = 0; 1< tvs.length; i++) {
    console.log(tvs[0].weight);
} */

/* for(let i=0; i < tvs.length; i++){
    if(tvs[i].opSystem == 'Android'){
        console.log(tvs[i])

    }
} */

/* const tv = {}; // teed valik ja naitab 

tv.diagonal = Number(prompt("Sisesta ekraani diagonaal:"));
tv.opSystem = prompt("Sisesta operatsioonisüsteem:");
tv.powerConsumption = Number(prompt("Sisesta energiatarbimine:"));
tv.weight = Number(prompt("Sisesta kaal:"));

// Kuvame kasutaja sisestatud andmed
console.log("Kasutaja sisestas järgmised TV andmed:");
console.log("Diagonaal:", tv.diagonal);
console.log("Operatsioonisüsteem:", tv.opSystem);
console.log("Energiatarbimine:", tv.powerConsumption);
console.log("Kaal:", tv.weight); */

/* const parameter = prompt("Sisesta TV parameeter (diagonal, opSystem, powerConsumption, weight):");

for (let i = 0; i < tvs.length; i++) {

    if (parameter in tvs[i]) { 
        console.log(`TV ${tvs[i].id} ${parameter}: ${tvs[i][parameter]}`);
    } else {
        console.log("Sellist parameetrit ei eksisteeri.");
        break;
    }
} */

/* const tvs = [
  { id: 1, diagonal: 86, opSystem: 'Android', powerConsumption: 100, weight: 40 },
  { id: 2, diagonal: 55, opSystem: 'Tizen', powerConsumption: 75, weight: 18 },
  { id: 3, diagonal: 65, opSystem: 'WebOS', powerConsumption: 90, weight: 22 },
  { id: 4, diagonal: 75, opSystem: 'Android', powerConsumption: 120, weight: 32 },
  { id: 5, diagonal: 43, opSystem: 'Roku', powerConsumption: 60, weight: 12 },
  { id: 6, diagonal: 50, opSystem: 'FireOS', powerConsumption: 70, weight: 14 },
  { id: 7, diagonal: 98, opSystem: 'Android', powerConsumption: 150, weight: 50 },
  { id: 8, diagonal: 32, opSystem: 'Tizen', powerConsumption: 45, weight: 7 },
  { id: 9, diagonal: 85, opSystem: 'WebOS', powerConsumption: 130, weight: 38 },
  { id: 10, diagonal: 40, opSystem: 'Roku', powerConsumption: 55, weight: 10 },
  { id: 11, diagonal: 70, opSystem: 'Tizen', powerConsumption: 110, weight: 30 },
  { id: 12, diagonal: 58, opSystem: 'Android', powerConsumption: 80, weight: 20 },
  { id: 13, diagonal: 65, opSystem: 'Roku', powerConsumption: 95, weight: 23 },
  { id: 14, diagonal: 77, opSystem: 'WebOS', powerConsumption: 125, weight: 35 },
  { id: 15, diagonal: 42, opSystem: 'FireOS', powerConsumption: 50, weight: 11 },
  { id: 16, diagonal: 60, opSystem: 'Android', powerConsumption: 85, weight: 19 },
  { id: 17, diagonal: 48, opSystem: 'Tizen', powerConsumption: 65, weight: 13 },
  { id: 18, diagonal: 55, opSystem: 'WebOS', powerConsumption: 78, weight: 17 },
  { id: 19, diagonal: 90, opSystem: 'Android', powerConsumption: 140, weight: 45 },
  { id: 20, diagonal: 39, opSystem: 'Roku', powerConsumption: 48, weight: 9 },
  { id: 21, diagonal: 50, opSystem: 'Tizen', powerConsumption: 69, weight: 16 },
  { id: 22, diagonal: 65, opSystem: 'FireOS', powerConsumption: 92, weight: 21 },
  { id: 23, diagonal: 75, opSystem: 'WebOS', powerConsumption: 118, weight: 33 },
  { id: 24, diagonal: 82, opSystem: 'Android', powerConsumption: 135, weight: 41 },
  { id: 25, diagonal: 55, opSystem: 'Roku', powerConsumption: 72, weight: 15 },
  { id: 26, diagonal: 43, opSystem: 'WebOS', powerConsumption: 58, weight: 11 },
  { id: 27, diagonal: 70, opSystem: 'FireOS', powerConsumption: 105, weight: 28 },
  { id: 28, diagonal: 78, opSystem: 'Tizen', powerConsumption: 128, weight: 36 },
  { id: 29, diagonal: 85, opSystem: 'Android', powerConsumption: 145, weight: 48 },
  { id: 30, diagonal: 32, opSystem: 'WebOS', powerConsumption: 42, weight: 6 }
];

const opSystem = prompt ('Millised tellikad');
for (let i = 0; i < tvs.length; i ++){
    if (tvs[i].opSystem.toLocaleLowerCase() == opSystem.toLocaleLowerCase()) {
        console.log (tvs[i]);
    }
}; */

// naitab parametrid in dev window ⬇️
const book = {
    pealkiri: "Sõrmuste Isand",
    autor: "J. K. R. Rouling",
    lehekulgedeArv: 423,
    loetud: false
};

console.log (book);


//kusib ja naitab sisestatud parametrid ⬇️
/* // Küsi kasutajalt raamatu info
const pealkiri = prompt("Sisesta raamatu pealkiri:");
const autor = prompt("Sisesta raamatu autor:");
const lehekulgedeArv = Number(prompt("Sisesta lehekülgede arv:"));
const loetudInput = prompt("Kas raamat on loetud? (jah/ei)");

// Teeme booleani (true/false)
let loetud;
if (loetudInput.toLowerCase() === "jah") {
  loetud = true;
} else {
  loetud = false;
}

// Loome raamatu objekti
const book = {
  pealkiri: pealkiri,
  autor: autor,
  lehekulgedeArv: lehekulgedeArv,
  loetud: loetud
};

// Näitame tulemust
console.log("Raamatu info:");
console.log("Pealkiri:", book.pealkiri);
console.log("Autor:", book.autor);
console.log("Lehekülgi:", book.lehekulgedeArv);
console.log("Loetud:", book.loetud); */

// ➡️ loo massiiv mis siseldab objecte  ⬇️

const books = [
    { pealkiri: "Sõrmuste Isand", autor: "Tolkien", lehekulgedeArv: 423, loetud: true },
    { pealkiri: "Harry Potter", autor: "Rowling", lehekulgedeArv: 320, loetud: false },
    { pealkiri: "Sandman", autor: "Gaiman", lehekulgedeArv: 190, loetud: true }
];

/* console.log("Raamatute arv massiivis: " + books.length); */

// ➡️ naitab koiki raamata pealkir  ⬇️
/* 
for (let i = 0; i < books.length; i++) {
    console.log(books[i].pealkiri);
} */

/* let summa = 0;

for (let i = 0; i < books.length; i++) {
    summa += books[i].lehekulgedeArv;
}

const keskmine = summa / books.length;

console.log("Keskmine lehekülgede arv:", keskmine); */

// ➡️ koik loetud raaamatud  ⬇️

/* for (let i = 0; i < books.length; i++) {
    if (books[i].loetud === true) {
        console.log(books[i].pealkiri);
    }
} */

    // ➡️ loetud raamatud arv kokku  ⬇️

  /*   let summa = 0;

    for (let i = 0; i < books.length; i ++) {
        if(books[i].loetud === true) {
            summa += books [i].lehekulgedeArv;
        }
    }

    console.log("Loetud raamatute lehekülgi kokku:", summa); */

    // -------2025-11-25 14:28:57 -----📢-------

/*     function ChangeTitle () {
        console.log ('ChangeTitle');
    } */

/*         function ChangeTitle () {
document.getElementById('title').innerHTML = 'Uuus pealkiri';
        } */

// ➡️ teine pealkir ⬇️

/* function ChangeTitle() {
    console.log (document.gete)
    document.getElementById("title1").innerHTML = "Uus esimene pealkiri";
    document.getElementById("title2").innerHTML = "Uus teine pealkiri";
} */
// ➡️  ⬇️
/* function changeMainTitle() {
    const text = document.getElementById('text-for-title').value;
    document.getElementById("title1").innerHTML = text;
}

function changeSubTitle() {
    document.getElementById('title2').innerHTML = 'Veel uuem pealkiri';
} */

/* function changeMainTitle() {
    const input = document.getElementById('text-for-title').value;

    if (input.trim() === "") {
        document.getElementById("title1").innerHTML = "Default pealkiri";
    } else {
        document.getElementById("title1").innerHTML = input;
    }
}

function changeSubTitle() {
    document.getElementById('title2').innerHTML = "Veel uuem pealkiri";
} */
