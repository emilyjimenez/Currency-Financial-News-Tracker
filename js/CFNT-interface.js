import { CurrencyLookup } from './../js/currencylookup.js';
import { NewsLookup } from './../js/newslookup.js';
import { CryptoLookup } from './../js/cryptolookup.js';

let displayCurrencyData = function(response) {
  $("#foreign-exchange-result").show();
  if (response.success === true) {
    let currencyRate = response.quotes;
    $("#foreign-exchange-list").append(`<li>${currencyRate}</li>`);
  } else {
    $("#foreign-exchange-list").append("No data");
  }
};

let error = function(error) {
  $("#foreign-exchange-result").text("Uh oh... something went wrong")
}

$(document).ready(function() {
  let newCurrencyLookup = new CurrencyLookup();
  $("#foreign-exchange-select").submit(function(event){
    event.preventDefault();
    let foreignCurrency = $("#foreign-currency-option").val();
    newCurrencyLookup.getCurrencyData(foreignCurrency, displayCurrencyData, error)
  });
});
