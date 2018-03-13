// //locations
// //store hours
'use strict';


var storeArray = [];

var storeTable = document.getElementById('storeStuff');

var storeHours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var StoreConstructor = function (minCustomer, maxCustomer, avgCookieSale, storeLocation) {

  this.min = minCustomer;
  this.max = maxCustomer;
  this.avgSale = avgCookieSale;
  this.storeLocal = storeLocation;
  this.hourlySale = [];
  storeArray.push(this);

};


StoreConstructor.prototype.salesPerHour = function () {

  var dayTotal = 0;

  for (var i = 0; i < storeHours.length; i++) {

    var cusRandoNum = (Math.random() * (this.max - this.min) + (this.min));

    var hourlyTotal = (Math.floor(cusRandoNum * this.avgSale));

    dayTotal += hourlyTotal;

    this.hourlySale.push(hourlyTotal);
  }
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
    tdElement.textContent = this.hourlySale[i];
    trElement.appendChild(tdElement);
  }

  tdElement = document.createElement('td');
  tdElement.textContent = this.dayTotal;
  trElement.appendChild(tdElement);

  storeTable.appendChild(trElement);

};



var pike = new StoreConstructor(23, 65, 6.3, '1st and Pike');
pike.salesPerHour();
pike.render();
console.log(pike);




















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