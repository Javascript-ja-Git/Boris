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

/* function kontrolliArvu(number, min,max) {
  if (number >= min && number <= max) {
    return true;
  } else {
    return false;
  }
}

// küsime kasutajalt sisendi
const number = Number(prompt('sisestage arv'))

console.log(checkifRange(number,1, 100))
console.log(checkifRange(number, 20, 30)) */

/* const firstName = 'Tina';
console.log  */

// -------2025-11-11 15:07:37 -------------------------
//tegevused stringidega 
/* const carNumber = prompt ('sisesta ome auto number'); */
/* alert(carNumber.toUpperCase());
alert(carNumber); */

/* if(carNumber.includes('EKL')) {
    alert('laabapaas lubatud');

}else{
    alert ('labipaas keelatud');
}
 */

/* const allowedCarNumber = ['123EKL', '234EKL', '123ABC', '234bcd'];
const (allowedCarNumber.includes(carNumber)) {
    alert ('Laabipas lubatud');

} else {
    alert('Labipaas keelatud');
} */


    //my version 
function checkEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    return true;
  } else {
    return false;
  }
}

// küsi kasutajalt e-mail
const userEmail = prompt("Sisesta oma e-mail:");

// kontrolli tulemust
if (checkEmail(userEmail)) {
  alert("E-mail on kehtiv ✅");
} else {
  alert("E-mail ei ole kehtiv ❌");
}

// opetaja 

function checkEmail (email) {
    if (! email.includes('@') || !email.includes('.')) {
        return false;

    }
    return true;
}

const email = prompt ('sisesta ome email');
console.log (checkifemail(email));