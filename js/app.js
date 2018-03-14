// //locations
// //store hours
'use strict';


var storeArray = [];

var storeTable = document.getElementById('storeStuff');

var storeHours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var header = function () {

  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');

  trElement.textContent = 'Store';
  thElement.appendChild(trElement);

  for (var i = 0; i < storeHours.length; i++) {
    thElement = document.createElement('th');

    thElement.textContent = storeHours[i];

    trElement.appendChild(thElement);
  }

  thElement = document.createElement('th');
  thElement.textContent = 'Day Total';
  trElement.appendChild(thElement);

  storeTable.appendChild(trElement);
};
header();

var StoreConstructor = function (minCustomer, maxCustomer, avgCookieSale, storeLocation) {

  this.min = minCustomer;
  this.max = maxCustomer;
  this.avgSale = avgCookieSale;
  this.storeLocal = storeLocation;
  this.hourlySales = [];
  this.dayTotals = 0;
  storeArray.push(this);

};


StoreConstructor.prototype.salesPerHour = function () {

  var dayTotal = 0;

  for (var i = 0; i < storeHours.length; i++) {

    var cusRandoNum = (Math.random() * (this.max - this.min) + (this.min));

    var hourlyTotal = (Math.floor(cusRandoNum * this.avgSale));

    dayTotal += hourlyTotal;


    this.hourlySales.push(hourlyTotal);

  }
  this.dayTotals = dayTotal;
};

StoreConstructor.prototype.render = function () {

  //create a var trElement 'tr'
  var trElement = document.createElement('tr');
  //create a var tdElement 'td'
  var tdElement = document.createElement('td');
  //assign this.keyWord to td
  tdElement.textContent = this.storeLocal;
  //tdElement append to tr
  trElement.appendChild(tdElement);
  //repeat -create tdElement, assign, append

  for (var i = 0; i < storeHours.length; i++) {
    tdElement = document.createElement('td');
    tdElement.textContent = this.hourlySales[i];
    trElement.appendChild(tdElement);
  }

  tdElement = document.createElement('td');
  tdElement.textContent = this.dayTotals;
  trElement.appendChild(tdElement);

  storeTable.appendChild(trElement);

};

//TODO:
//MAKE A BLOODY FOOTER!!!


var pike = new StoreConstructor(23, 65, 6.3, '1st and Pike');
pike.salesPerHour();
pike.render();

var seaTac = new StoreConstructor(3, 24, 1.2, 'SeaTac Airport');
seaTac.salesPerHour();
seaTac.render();

var capHill = new StoreConstructor(20, 38, 2.3, 'Capitol Hill');
capHill.salesPerHour();
capHill.render();

var alkiStore = new StoreConstructor(2, 16, 4.6, 'Alki');
alkiStore.salesPerHour();
alkiStore.render();

var seaCenter = new StoreConstructor(11, 38, 3.7, 'Seattle Center');
seaCenter.salesPerHour();
seaCenter.render();























/* var pikeLocation = {

  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,

  salesPerHour: function () {

    var pikeStore = document.getElementById('pikeLocal');

    var dayTotal = 0;

    for (var i = 0; i < storeHours.length; i++) {

      var cusRandoNum = (Math.random() * (this.maxCustomer - this.minCustomer) + (this.minCustomer));

      var hourlyTotal = (Math.floor(cusRandoNum * this.avgCookieSale));

      var cookiesPerHour = document.createElement('li');
      cookiesPerHour.textContent = storeHours[i] + ':00 = ' + hourlyTotal;

      pikeStore.appendChild(cookiesPerHour);

      dayTotal += hourlyTotal;

    }
    var totalCounter = document.createElement('li');

    totalCounter.textContent = 'Total per day = ' + dayTotal;

    pikeStore.appendChild(totalCounter);
  },

};
console.log(pikeLocation);
pikeLocation.salesPerHour();


var seaTacLocation = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,

  salesPerHour: function () {
    var dayTotal = 0;

    var seaTacStore = document.getElementById('seaTacLocal');
    console.log(seaTacStore);

    for (var i = 0; i < storeHours.length; i++) {

      var cusRandoNum = (Math.random() * (this.maxCustomer - this.minCustomer) + (this.minCustomer));

      var hourlyTotal = (Math.floor(cusRandoNum * this.avgCookieSale));

      var cookiesPerHour = document.createElement('li');

      cookiesPerHour.textContent = storeHours[i] + ':00 = ' + hourlyTotal;

      seaTacStore.appendChild(cookiesPerHour);

      dayTotal += hourlyTotal;

    } var totalCounter = document.createElement('li');
    totalCounter.textContent = 'Total per day = ' + dayTotal;

    seaTacStore.appendChild(totalCounter);
  },
};
console.log(seaTacLocation);
seaTacLocation.salesPerHour();

var seattleCenterLocation = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 3.7,

  salesPerHour: function () {
    var seattleCenterStore = document.getElementById('seattleCenterLocal');
    console.log(seattleCenterStore);

    var dayTotal = 0;

    for (var i = 0; i < storeHours.length; i++) {
      var cusRandoNum = (Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);

      var hourlyTotal = (Math.floor(cusRandoNum * this.avgCookieSale));

      var cookiesPerHour = document.createElement('li');

      cookiesPerHour.textContent = storeHours[i] + ':00 = ' + hourlyTotal;

      seattleCenterStore.appendChild(cookiesPerHour);

      dayTotal += hourlyTotal;

    }
    var totalCounter = document.createElement('li');
    totalCounter.textContent = 'Total per day = ' + dayTotal;

    seattleCenterStore.appendChild(totalCounter);
  },
};
console.log(seattleCenterLocation);
seattleCenterLocation.salesPerHour();

var capitolHillLocation = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 2.3,

  salesPerHour: function () {
    var capitolHillStore = document.getElementById('capitolHillLocal');
    console.log(capitolHillStore);

    var dayTotal = 0;

    for (var i = 0; i < storeHours.length; i++) {
      var cusRandoNum = (Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);

      var hourlyTotal = (Math.floor(cusRandoNum * this.avgCookieSale));

      var cookiesPerHour = document.createElement('li');

      cookiesPerHour.textContent = storeHours[i] + ':00 = '+ hourlyTotal;

      capitolHillStore.appendChild(cookiesPerHour);

      dayTotal += hourlyTotal;
    }

    var totalCounter = document.createElement('li');

    totalCounter.textContent = 'Total per day = ' + dayTotal;

    capitolHillStore.appendChild(totalCounter);

  },
};
console.log(capitolHillLocation);
capitolHillLocation.salesPerHour();

var alkiLocation = {
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 4.6,

  salesPerHour: function () {
    var alkiStore = document.getElementById('alkiLocal');
    console.log(alkiStore);

    var dayTotal = 0;

    for (var i = 0; i < storeHours.length; i++) {
      var cusRandoNum = (Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);

      var hourlyTotal = (Math.floor(cusRandoNum * this.avgCookieSale));

      var cookiesPerHour = document.createElement('li');

      cookiesPerHour.textContent = storeHours[i] + ':00 = ' + hourlyTotal;

      alkiStore.appendChild(cookiesPerHour);

      dayTotal += hourlyTotal;
    }

    var totalCounter = document.createElement('li');

    totalCounter.textContent = 'Total per day = ' + dayTotal;

    alkiStore.appendChild(totalCounter);
  },
};
console.log(alkiLocation);
alkiLocation.salesPerHour();
*/