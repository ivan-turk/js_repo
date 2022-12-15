let uiObjekti = {
  zamisljeniBroj: 5,
  label: document.getElementById("label"),
  uneseniBroj: document.getElementById("unos"),
  btnPlay: document.getElementById("btn"),
  btnReset: document.getElementById("btn2"),
  arrowBox: document.getElementById("arrow-box"),
  poruka: document.getElementById("msg"),
  statistika: document.getElementById("statistika"),
  nagrada: document.getElementById("nagrada"),
};

let brojac = 0;

function statistika() {
  if (brojac <= 10 && brojac >= 8) {
    uiObjekti.statistika.innerHTML = `Kliknuli ste ${brojac} puta do rezultata! Osvojeno 3. mjesto!`;
    uiObjekti.statistika.style.display = "block";
  } else if (brojac <= 7 && brojac >= 5) {
    uiObjekti.statistika.innerHTML = `Kliknuli ste ${brojac} puta do rezultata! Osvojeno 2. mjesto!`;
    uiObjekti.statistika.style.display = "block";
  } else if (brojac <= 4 && brojac >= 2) {
    uiObjekti.statistika.innerHTML = `Kliknuli ste ${brojac} puta do rezultata! Osvojeno 1. mjesto!`;
    uiObjekti.statistika.style.display = "block";
    uiObjekti.nagrada.style.display = "block";
  } else {
    uiObjekti.statistika.innerHTML = `Kliknuli ste ${brojac} puta do rezultata! Potrudite se više za nagradu!`;
    uiObjekti.statistika.style.display = "block";
  }
}

function resetBtn() {
  uiObjekti.btnPlay.style.display = "none";
  uiObjekti.btnReset.style.display = "block";
  uiObjekti.uneseniBroj.style.display = "none";
  uiObjekti.label.style.display = "none";
}

function klikBtn(event) {
  event.preventDefault();
  brojac = brojac += 1;
  if (uiObjekti.uneseniBroj.value === "" || uiObjekti.uneseniBroj.value < 0 || uiObjekti.uneseniBroj.value > 100) {
    uiObjekti.arrowBox.style.display = "block";
    uiObjekti.arrowBox.innerHTML = `&#215`;
    uiObjekti.poruka.innerHTML = `<h3>Ne provocirajte :)<br><br>Upišite broj od 0 - 100!!</h3>`;
  } else if (uiObjekti.uneseniBroj.value > uiObjekti.zamisljeniBroj) {
    uiObjekti.arrowBox.style.display = "block";
    uiObjekti.arrowBox.innerHTML = `&#8595`;
  } else if (uiObjekti.uneseniBroj.value < uiObjekti.zamisljeniBroj) {
    uiObjekti.arrowBox.style.display = "block";
    uiObjekti.arrowBox.innerHTML = `&#8593`;
  } else {
    uiObjekti.poruka.innerHTML = `<h3>Bravo pogodili ste</h3>`;
    uiObjekti.arrowBox.style.display = "block";
    uiObjekti.arrowBox.innerHTML = `&#10003`;
    statistika();
    resetBtn();
  }
}
