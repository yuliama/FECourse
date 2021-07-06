class Car {
  constructor(id, brand, model, color, km, year) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.km = km;
    this.year = year;
  }
  kmPerYear() {
    let currentYear = new Date().getFullYear();
    if (currentYear == this.year) return this.km;
    return this.km / (currentYear - this.year);
  }
}

let cars = [];
let highestKmPerYearId;


(async () => {
  await $.get("cars.json", data => {
    cars = data.map(car => new Car(car.id, car.brand, car.model, car.color, car.km, car.year));
  });
  refreshDOM();
})();

function calcHighestKM() {
  let maxKM = 0;
  for (let element of cars) {
    if (element.kmPerYear() > maxKM) {
      maxKM = element.kmPerYear();
      highestKmPerYearId = element.id;
    }
  }
}

function AddCar(car) {

  let brand = '', model = '', color = '', km = 0, year = 0;

  $.each(car.form, function (key, value) {
    if (value.id === "brand") brand = value.value;
    else if (value.id === "model") model = value.value;
    else if (value.id === "color") color = value.value;
    else if (value.id === "km") km = Number(value.value);
    else if (value.id === "year") year = Number(value.value);
  });

  let id = Number(findMaxCarId());
  cars.push(new Car(++id, brand, model, color, km, year));

  refreshDOM();
}

function findMaxCarId() {
  return cars[cars.length - 1].id;
}

function refreshDOM() {
  calcHighestKM();

  $(".cars").text("");

  $.each(cars, function (key, value) {
    //h2 - brand + model
    let h2 = document.createElement("h2");
    h2.innerHTML = value.brand + ' ' + value.model;

    //color
    let divColor = document.createElement("div");
    divColor.innerHTML = 'Color: ' + value.color;

    //km
    let divKm = document.createElement("div");
    divKm.innerHTML = 'km: ' + value.km;

    //year
    let divYear = document.createElement("div");
    divYear.innerHTML = 'Year: ' + value.year;

    //card
    let card = document.createElement("div");

    card.className = value.id == highestKmPerYearId ? "highestKM card" : "card";
    card.append(h2);
    card.append(divColor);
    card.append(divKm);
    card.append(divYear);

    $(".cars").append(card);
  });
}