// //locations
// //store hours
'use strict';


var storeArray = [];
var storeForm = document.getElementById('addNewStore');
var storeTable = document.getElementById('storeStuff');

var storeHours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var header = function () {
  //var tHead = document.createElement('thead');
  var tHead = document.createElement('thead');
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');

  thElement.textContent = 'Store';
  trElement.appendChild(thElement);


  for (var i in storeHours) {
    thElement = document.createElement('th');

    //append tr to thead
    //append thead to table

    thElement.textContent = storeHours[i] + '00';

    trElement.appendChild(thElement);
  }

  thElement = document.createElement('th');
  thElement.textContent = 'Day Total';
  trElement.appendChild(thElement);
  tHead.appendChild(trElement);

  storeTable.appendChild(tHead);
};

storeForm.addEventListener('submit', addNewStore);

var StoreConstructor = function (minCustomer, maxCustomer, avgCookieSale, storeLocation) {

  this.min = minCustomer;
  console.log('minCustomer, ' + minCustomer);

  this.max = maxCustomer;
  console.log('maxCustomer, ' + maxCustomer);

  this.avgSale = avgCookieSale;
  console.log('avgSale, ' + avgCookieSale);

  this.storeLocal = storeLocation; //storeLocation = string
  console.log('storeLocal, ' + storeLocation);

  this.hourlySales = [];
  this.daysTotal = 0;

  storeArray.push(this);

};



// var pike =
new StoreConstructor(23, 65, 6.3, '1st and Pike');
// pike.salesPerHour();
// pike.render();

// var seaTac =
new StoreConstructor(3, 24, 1.2, 'SeaTac Airport');
// seaTac.salesPerHour();
// seaTac.render();

// var capHill =
new StoreConstructor(20, 38, 2.3, 'Capitol Hill');
// capHill.salesPerHour();
// capHill.render();

// var alkiStore =
new StoreConstructor(2, 16, 4.6, 'Alki');
// alkiStore.salesPerHour();
// alkiStore.render();

// var seaCenter =
new StoreConstructor(11, 38, 3.7, 'Seattle Center');
// seaCenter.salesPerHour();
// seaCenter.render();



StoreConstructor.prototype.salesPerHour = function () {

  var dayTotal = 0;

  for (var i = 0; i < storeHours.length; i++) {

    var cusRandoNum = (Math.random() * (this.max - this.min) + (this.min));

    var hourlyTotal = (Math.floor(cusRandoNum * this.avgSale));

    dayTotal += hourlyTotal;


    this.hourlySales.push(hourlyTotal);

  }
  this.daysTotal = dayTotal;
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

  for (var i in storeHours) {

    tdElement = document.createElement('td');
    tdElement.textContent = this.hourlySales[i];
    trElement.appendChild(tdElement);

  }

  tdElement = document.createElement('td');
  tdElement.textContent = this.daysTotal;
  trElement.appendChild(tdElement);

  storeTable.appendChild(trElement);

};

function renderAllStores() {
  for (var i in storeArray) {
    storeArray[i].render();
  }
}

function allSalesPerHour() {
  for (var i in storeArray) {
    storeArray[i].salesPerHour();
  }
}

function footer() {
  //var tHead = document.createElement('thead');
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');

  tdElement.textContent = 'Total Per Hour';
  trElement.appendChild(tdElement);

  var totalTotal = 0;


  for (var i in storeHours) {

    var newHourlyTotal = 0;

    for (var j in storeArray) {
      newHourlyTotal += storeArray[j].hourlySales[i];
      // console.log(storeArray[j].hourlySales[i]);
    }

    totalTotal += newHourlyTotal;
    tdElement = document.createElement('td');
    tdElement.textContent = newHourlyTotal;
    trElement.appendChild(tdElement);

  }

  tdElement = document.createElement('td');
  tdElement.textContent = totalTotal;
  trElement.appendChild(tdElement);

  storeTable.appendChild(trElement);
}




function addNewStore(event) {

  event.preventDefault();

  var newMinCus = event.target.minCustomer.value;
  var newMaxCus = event.target.maxCustomer.value;
  var newAvgCookieSale = event.target.avgCookieSale.value;
  var newStoreLocal = event.target.storeLocation.value;

  new StoreConstructor(newMinCus, newMaxCus, newAvgCookieSale, newStoreLocal);

  storeTable.innerHTML = '';

  header();
  allSalesPerHour();
  renderAllStores();
  footer();

}


header();
allSalesPerHour();
renderAllStores();
footer();

