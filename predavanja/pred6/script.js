// zamjenica THIS i funkcija unutar objekta (metoda)

let objekt1 = {
  ime: "Antun",
  prezime: "Nakic",
  predstaviSe: function () {
    return `Dobar dan ja sam ${this.ime} ${this.prezime}.`;
  },
};

let aaa = objekt1.predstaviSe();
console.log(aaa);

//__________________________________________________________________

let osoba2 = {
  ime: "Ivan",
  prezime: "Turk",
  predstaviSe: function () {
    return `Dobar dan ja sam ${osoba2.ime} ${osoba2.prezime}.`;
  },
};

let bbb = osoba2.predstaviSe();
console.log(bbb);

let osoba3 = {
  ime: "Pero",
  prezime: "Sime",
  predstaviSe: function () {
    return `Dobar dan ja sam ${this.ime} ${this.prezime}.`;
  },
};

JSON.stringify(osoba3);

let odgovor = JSON.stringify(osoba3);

console.log(odgovor);

//______________________________________
//Parsiranje json-a u objekt

let jsObjekt = JSON.parse(odgovor);
console.log(jsObjekt);

//Zadaća 16.12.2022 let,const,var,scope,objekti

/*

Napraviti nešto po svojoj volji - proizvoljni, piši let const, referenca na predavanje!





*/
