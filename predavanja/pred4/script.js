const uiObjekti = {
  ime: document.getElementById("fname"),
  prezime: document.getElementById("lname"),
  musko: document.getElementById("musko"),
  zensko: document.getElementById("zensko"),
  godine: document.getElementById("godine"),
  provjerenaOsobaElement: document.getElementById("provjerenaOsoba"),
};

let osoba = {};

function stvoriOsobu() {
  osoba.ime = uiObjekti.ime.value;
  osoba.prezime = uiObjekti.prezime;
  osoba.spol = uiObjekti.musko.checked ? "musko" : uiObjekti.zensko.checked ? "zensko" : "";
  osoba.godina = parseInt(uiObjekti.godina.value) ? parseInt(uiObjekti.godina.value) : undefined;
  osoba.jeliDugoImeIPrezime = function () {
    return osoba.ime.length > 6 && osoba.prezime.length > 6;
  };
}

function provjeriOsobu(event) {
  event.preventDefault();

  stvoriOsobu();

  if (osoba.JeliDugoImeIPrezime()) {
    uiObjekti.provjerenaOsobaElement.innerHTML = `<p>Osoba ima i ime i prezime dulje od 6 znakova!</p>`;
  } else {
    uiObjekti.provjerenaOsobaElement.innerHTML = `<p>Osoba nema i ime i prezime dulje od 6 znakova!</p>`;
  }

  if (osoba.spol !== "") {
    uiObjekti.provjerenaOsobaElement.innerHTML += `<p>Vi ste normalni!</p>`; //+= služi nadodavanju!
  } else {
    uiObjekti.provjerenaOsobaElement.innerHTML += `<p>Vi ste nenormalni!</p>`;
  }

  if (!osoba.godina) {
    uiObjekti.provjerenaOsobaElement.innerHTML += `<p>Niste dobro unesli tražene podatke</p>`;
  } else if (osoba.godina % 2) {
    uiObjekti.provjerenaOsobaElement.innerHTML += `<p>Imate neparan broj godina</p>`;
  } else {
    uiObjekti.provjerenaOsobaElement.innerHTML += `<p>Vi imate paran broj godina</p>`;
  }
}

// Forma koja prima ime prezime spol i godine
//1. Provjeriti dali osoba ima i ime i prezime dulje od 6 znakova - && OPERATOR
// 2. ILI OPERATOR
// 3. Aritmetički operatori  - paran ili neparan broj godina
// 4. Inkrement i Dekrement operatori - primitiv se ne može ++ i --
// let varijabla = 4;
// varijabla++;  --> stanje se izvrši nakon prikaza postojećeg broja 4
// ++varijabla;  --> stanje se izvršava odmah i prikaže se novi broj 5

// 5. Operator upitnika ? --> kad provjeravaš nešto u dubini property ako nije objekt da se vrati undefined
