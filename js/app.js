// //locations
// //store hours

var storeHours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(storeHours);


var pikeLocation = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,

  salesPerHour: function () {
    var pikeStore = document.getElementById('pikeLocation');

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


var seaTacLocation;