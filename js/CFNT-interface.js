import { CurrencyLookup } from './../js/currencylookup.js';
// Will use NewsLookup and CryptoLookup when I have time to add the rest of the APIs...
// import { NewsLookup } from './../js/newslookup.js';
// import { CryptoLookup } from './../js/cryptolookup.js';

let displayTickerResults = function(response) {
  let usdBTC = response.quotes["USDBTC"];
  let usdGBP = response.quotes["USDGBP"];
  let usdCAD = response.quotes["USDCAD"];
  let usdAUD = response.quotes["USDAUD"];
  let usdJPY = response.quotes["USDJPY"];
  let usdCHF = response.quotes["USDCHF"];
  let usdEUR = response.quotes["USDEUR"];
  $("#btc-usd").text(usdBTC);
  $("#gbp-usd").text(usdGBP);
  $("#cad-usd").text(usdCAD);
  $("#aud-usd").text(usdAUD);
  $("#jpy-usd").text(usdJPY);
  $("#chf-usd").text(usdCHF);
  $("#eur-usd").text(usdEUR);
}


let displayCurrencyData = function(response, converter) {
  $("#foreign-exchange-result").show();
  if (response !== null) {
    let currencyRate = response.quotes[converter];
    $("#foreign-exchange-list").append(`<li>${converter} = ${currencyRate}</li>`);
  } else {
    $("#foreign-exchange-list").append("No data");
  }
};

let error = function(error) {
  $("#foreign-exchange-result").text("Uh oh... something went wrong");
};

$(document).ready(function() {
  let tickerLookup = new CurrencyLookup();
  let countries = "BTC,GBP,CAD,AUD,JPY,CHF,EUR,ZWL";
  tickerLookup.getCurrencyData(countries, displayTickerResults, error);
  let newCurrencyLookup = new CurrencyLookup();
  $("#foreign-exchange-select").submit(function(event){
    event.preventDefault();
    let foreignCurrency = $("#foreign-currency-option").val();
    newCurrencyLookup.getCurrencyData(foreignCurrency, displayCurrencyData, error);
  });
});
