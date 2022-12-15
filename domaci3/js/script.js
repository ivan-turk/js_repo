let uiObjekti = {
  zamisljeniBroj: Math.floor(Math.random() * 100),
  label: document.getElementById("label"),
  uneseniBroj: document.getElementById("unos"),
  btnPlay: document.getElementById("btn"),
  btnReset: document.getElementById("btn2"),
  arrowBox: document.getElementById("arrow-box"),
  poruka: document.getElementById("msg"),
  statistika: document.getElementById("statistika"),
};

let brojac = 0;

function statistika() {
  uiObjekti.statistika.style.display = "block";
  uiObjekti.statistika.innerHTML = `Morali ste kliknuti ${brojac} puta do rezultata! Možete vi to i bolje`;
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
    uiObjekti.poruka.innerHTML = `<h3>Ne upisujte gluposti!<br><br>Traži se broj od 0 - 100</h3>`;
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
