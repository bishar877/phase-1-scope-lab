// Write your solution in this file!

window.customerName = 'bob';

function upperCaseCustomerName() {
  if (typeof customerName === 'string') {
    customerName = customerName.toUpperCase();
  }
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(value) {
  bestCustomer = value;
}

function changeLeastFavoriteCustomer() {
  throw new Error('Assignment to constant variable.');
}