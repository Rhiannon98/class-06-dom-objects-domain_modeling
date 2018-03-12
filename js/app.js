// //locations
// //store hours

var storeHours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(storeHours);


var pikeLocation = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,

  salesPerHour: function () {
    var pikeStore = document.getElementById('pikeLocal');

    for (var i = 0; i < storeHours.length; i++) {

      var cusRandoNum = (Math.random() * (this.maxCustomer - this.minCustomer) + (this.minCustomer));

      var cookiesPerHour = document.createElement('li');
      cookiesPerHour.textContent = storeHours[i] + ': ' + (Math.round(cusRandoNum * this.avgCookieSale));

      pikeStore.appendChild(cookiesPerHour);
    }
  },
};
console.log(pikeLocation);
pikeLocation.salesPerHour();


var seaTacLocation = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,

  salesPerHour: function () {
    var seaTacStore = document.getElementById('seaTacLocal');
    console.log(seaTacStore);

    for (var i = 0; i < storeHours.length; i++) {

      var cusRandoNum = (Math.random() * (this.maxCustomer - this.minCustomer) + (this.minCustomer));

      var cookiesPerHour = document.createElement('li');

      cookiesPerHour.textContent = storeHours[i] + ': ' + (Math.round(cusRandoNum * this.avgCookieSale));

      seaTacStore.appendChild(cookiesPerHour);
    }
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

    for (var i = 0; i < storeHours.length; i++) {
      var cusRandoNum = (Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);

      var cookiesPerHour = document.createElement('li');

      cookiesPerHour.textContent = storeHours[i] + ': ' + (Math.round(cusRandoNum * this.avgCookieSale));

      seattleCenterStore.appendChild(cookiesPerHour);
    }
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

    for (var i = 0; i < storeHours.length; i++) {
      var cusRandoNum = (Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);

      var cookiesPerHour = document.createElement('li');

      cookiesPerHour.textContent = storeHours[i] + ': ' + (Math.round(cusRandoNum * this.avgCookieSale));

      capitolHillStore.appendChild(cookiesPerHour);
    }
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

    for (var i = 0; i < storeHours.lastIndexOf; i++) {
      var cusRandoNum = (Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);

      var cookiesPerHour = document.createElement('li');

      cookiesPerHour.textContent = storeHours[i] + ': ' + (Math.round(cusRandoNum * this.avgCookieSale));

      alkiLocation.appendChild(cookiesPerHour);
    }
  },
};
console.log(alkiLocation);
alkiLocation.salesPerHour();
