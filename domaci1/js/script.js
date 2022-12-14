/* Staviti textareu u koju će korisnik upisivati puno rečenica. Nakon završetka unosa, klikom na "razbij" button u paragrafu ispod pružite detaljlnu statistiku unesenih rečenica.

npr. broj znakova koji je unesen,broj rečenica koji je unesen,(traži točku npr) koliko rečenica ne počinje sa velikim slovom...
 */

function razbij(e) {
  e.preventDefault();

  // 1. Broj unesenih znakova bez razmaka
  let upisaneRecenice = document.getElementById("upisaneRecenice").value;
  let splittedPoZnakovima = upisaneRecenice.split(""); // upisane rečenice se razvajaju po slovima ne uključujući razmak i stavljaju se u niz (Array)...npr i,v,a,n

  // a) ne kužim način filtriranja...
  let brojZnakova = splittedPoZnakovima.filter((znak) => znak !== " ").length;

  // b) testiranja outputa!
  console.log(brojZnakova);

  //-----------------------------------------------------------------------------------------------

  // 2. Broj unesenih rečenica

  let splittedPoRijecima = upisaneRecenice.split(" "); //upisane rečenice se razdvajaju po točki te se riječi isto stavljaju u Array

  // a) način filtriranja nejasan
  let brojRijeci = splittedPoRijecima.filter((rijec) => rijec !== " ").length;

  // b) Testiranje outputa
  console.log(brojRijeci);

  // 3. Upis u html:

  document.getElementById(
    "statistika"
  ).innerHTML = `<br>Upisana rečenica: <b>${upisaneRecenice}</b><br> Broj riječi u rečenici: <b>${brojRijeci}</b> <br> Broj znakova ne uključujući razmake je: <b>${brojZnakova}</b>`;
}
