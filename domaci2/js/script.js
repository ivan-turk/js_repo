const uiObjekti = {
  nameCar01: document.getElementById("fname"),
  topspeedCar01: document.getElementById("topspeed"),
  nameCar02: document.getElementById("sname"),
  topspeedCar02: document.getElementById("topspeed2"),
  carsColor1: document.getElementById("red1"),
  carsColor2: document.getElementById("blue1"),
  carsColor3: document.getElementById("yellow1"),
  carsColor4: document.getElementById("green1"),
  carsColor5: document.getElementById("red2"),
  carsColor6: document.getElementById("blue2"),
  carsColor7: document.getElementById("yellow2"),
  carsColor8: document.getElementById("green2"),
  raceDistance: document.getElementById("distance"),
};

let finalResult = document.getElementById("resultsfinal");

let car = {};

function createCar() {
  car.nameCar01 = uiObjekti.nameCar01.value;
  car.topspeedCar01 = uiObjekti.topspeedCar01.value;
  car.color1 = uiObjekti.carsColor1.checked ? "red" : uiObjekti.carsColor2.checked ? "blue" : uiObjekti.carsColor3.checked ? "yellow" : uiObjekti.carsColor4.checked ? "green" : "";
  car.nameCar02 = uiObjekti.nameCar02.value;
  car.topspeedCar02 = uiObjekti.topspeedCar02.value;
  car.color2 = uiObjekti.carsColor5.checked ? "red" : uiObjekti.carsColor6.checked ? "blue" : uiObjekti.carsColor7.checked ? "yellow" : uiObjekti.carsColor8.checked ? "green" : "";
  car.raceDistance = uiObjekti.raceDistance.value;
}

function results(event) {
  event.preventDefault();
  createCar();

  if (car.topspeedCar01 > car.topspeedCar02 && car.raceDistance != 0) {
    finalResult.innerHTML = `<h2>Car with given name ${car.nameCar01} is faster than car named ${car.nameCar02} !!</h2><br>`;
  } else if (car.topspeedCar01 < car.topspeedCar02 && car.raceDistance != 0) {
    finalResult.innerHTML = `<h2>Car with given name ${car.nameCar02} is faster than car named ${car.nameCar01} !!</h2><br>`;
  } else if (car.topspeedCar01 === car.topspeedCar02 && car.raceDistance != 0) {
    finalResult.innerHTML = `<h2>Car with given name ${car.nameCar02} and car with given name ${car.nameCar01} are equal !!</h2><br>`;
  } else {
    finalResult.innerHTML = `<h2>Please fill all boxes !!</h2><br>`;
  }

  let arrive1 = car.raceDistance / car.topspeedCar01;
  let arrive2 = car.raceDistance / car.topspeedCar02;

  if (car.raceDistance != 0 && car.raceDistance != "") {
    finalResult.innerHTML += `<h2>Selected ${car.color1} race car ${car.nameCar01} arrived in ${arrive1.toFixed(2)}h</h2><br>`;
    finalResult.innerHTML += `<h2>Selected ${car.color2} race car ${car.nameCar02} arrived in ${arrive2.toFixed(2)}h</h2><br>`;
  } else {
    finalResult.innerHTML = `<h2>Please fill all boxes !!</h2>`;
  }
}
