/* const pin = prompt('Sisestage pin: ')
const pinAsNumber = Number (pin);

if (pinAsNumber){
    alert('Sesend on korrectne');
}else {
    alert ('sisenda ei ole korrektne');
}

console.log (Boolean(pinAsNumber)); */

// -------2025-11-11 12:22:40 -------------------------

// Ask username and password
/* const username = prompt("Sisesta kasutajanimi:");
const password = prompt("Sisesta parool:"); */

/* // normalize input (remove extra spaces)
const u = username ? username.trim() : "";
const p = password ? password.trim() : ""; */

// expected credentials / my version
/* const expectedUser = "admin";
const expectedPass = "3456";

if (u === expectedUser && p === expectedPass) {
  alert("Tere tulemast, admin!");
} else {
  // give a specific message what is wrong
  if (u !== expectedUser && p !== expectedPass) {
    alert("Viga: nii kasutajanimi kui ka parool on valed.");
  } else if (u !== expectedUser) {
    alert("Viga: vale kasutajanimi.");
  } else if (p !== expectedPass) {
    alert("Viga: vale parool.");
  } else {
    alert("Viga: sisestus ei ole korrektne.");
  }
} */


/* // 2-ne versioon 
const username = prompt('Sisesta kasutajanimi');

if (username) {
  if (username == 'admin') {
    const password = prompt('Sisesta parool');
    if (password) {
      if (password == '1234') {
        alert('Tere tulemast!');
      } else {
        alert('Sul ei ole süsteemile ligipääsu — vale parool.');
      }
    } else {
      alert('Sa ei sisestanud parooli.');
    }
  } else {
    alert('Vale kasutajanimi.');
  }
} else {
  alert('Sa ei sisestanud kasutajanime.');
} */

// -------2025-11-11 12:55:20 -------------------------

function kontrolliArvu(number) {
  if (number >= 1 && number <= 100) {
    return "Arv on sobivas vahemikus (1–100).";
  } else {
    return "Arv ei ole vahemikus 1–100.";
  }
}

// küsime kasutajalt sisendi
const input = prompt("Sisesta üks arv 1 ja 100 vahel:");
const number = Number(input); // muudame sisendi arvuks

// kutsume funktsiooni ja näitame tulemust
const tulemus = kontrolliArvu(number);
alert(tulemus);