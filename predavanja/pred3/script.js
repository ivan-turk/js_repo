function napuniBody() {
  document.body.innerHTML += "<br><hr><br><p>Dobar dan svima</p>"; //u DOM dodavanje texta u body element!
  console.log(x);
  console.log(z);
  console.log(mojaDugaRecenica);
}

// -------------------------  += OPERATOR ---------------------------------------------------

// Pisanje stringa u više redova - trik:  NADODAVANJE u varijavlu X sa += operatorom!

let x = "Ovo je vrlo dugi string";
x += " koji je u dva reda";
x += " jer se inače ne može čitati.";

let z = 5;
z += 1; //rezultat je 6, prvo se sa + zbrojilo pa sa = dodalo u varijablu z!
// kao da je napisano z = z + 1;

let mojaDugaRecenica = `fsdfa asdfadsfasas asdfasdfasd\n sdafadfsa`;

// ------------------------------- METODE NAD STRINGOVIMA! --------------------------------------

// 1. Trim() metoda:
function pozdravi(e) {
  e.preventDefault();
  let ime = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  document.getElementById("pozdrav").innerHTML = `<br><pre>Pozdrav ${ime.trim()}. Hvala ti na upitu. Odgovorit ćemo ti uskoro na email ${email}</pre>`;
}

//2. indexOf() metoda:

function zamijeni(e, nacin) {
  e.preventDefault();
  let replacedString;
  let orginalnaRecenica = document.getElementById("orginalnaRecenica").value;
  let searchTerm = document.getElementById("searchTerm").value;
  let replaceTerm = document.getElementById("replaceTerm").value;

  if (nacin === "pjeske") {
    let indexStart = orginalnaRecenica.indexOf(searchTerm);
    replacedString = orginalnaRecenica.substring(0, indexStart) + replaceTerm + orginalnaRecenica.substring(indexStart + searchTerm.length);
  } else {
    replacedString = orginalnaRecenica.replace(searchTerm, replaceTerm);
  }
  document.getElementById("zamijenjen").innerHTML = replacedString;
}
