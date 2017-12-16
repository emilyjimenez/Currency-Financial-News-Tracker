import { CurrencyLookup } from './../js/currencylookup.js';
import { NewsLookup } from './../js/newslookup.js';
import { CryptoLookup } from './../js/cryptolookup.js';

let displayData = function(response) {
  $("#foreign-exchange-result").show();
  if (response !== null) {
    let currencyRate = response.quotes;
    $("#foreign-exchange-list").append(`<li>${currencyRate}</li>`);
  } else {
    $("#foreign-exchange-list").append("No data");
  }
};

let error = function(error) {
  $("#foreign-exchange-result").text("Uh oh... something went wrong");
};

$(document).ready(function() {
  let newCurrencyLookup = new CurrencyLookup();
  $("#foreign-exchange-select").submit(function(event){
    event.preventDefault();
    let response = $("#foreign-currency-option").val();
    newCurrencyLookup.getData(response, displayData, error);
  });
});
