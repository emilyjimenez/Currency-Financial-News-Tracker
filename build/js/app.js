(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKeyNews = "KEY GOES HERE";
exports.apiKeyCurrency = "b52a3b45df5c0e5abc5f6a4a7390f8f3";

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrencyLookup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _env = require("./../.env");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CurrencyLookup = exports.CurrencyLookup = function () {
  function CurrencyLookup() {
    _classCallCheck(this, CurrencyLookup);
  }

  _createClass(CurrencyLookup, [{
    key: "getCurrencyData",
    value: function getCurrencyData(response, displayCurrencyData, error) {
      var sourceCurrency = "USD";
      var converter = sourceCurrency.concat(response);
      $.get("http://apilayer.net/api/live?access_key=" + _env.apiKeyCurrency + "&source=" + sourceCurrency + "&currencies=" + response + "&format=1").then(function (response) {
        displayCurrencyData(response, converter);
      }).fail(function (error) {
        throw error;
      });
    }
  }]);

  return CurrencyLookup;
}();

},{"./../.env":1}],3:[function(require,module,exports){
"use strict";

var _currencylookup = require("./../js/currencylookup.js");

// Will use NewsLookup and CryptoLookup when I have time to add the rest of the APIs...
// import { NewsLookup } from './../js/newslookup.js';
// import { CryptoLookup } from './../js/cryptolookup.js';

var displayTickerResults = function displayTickerResults(response) {
  var usdBTC = response.quotes["USDBTC"];
  var usdGBP = response.quotes["USDGBP"];
  var usdCAD = response.quotes["USDCAD"];
  var usdAUD = response.quotes["USDAUD"];
  var usdJPY = response.quotes["USDJPY"];
  var usdCHF = response.quotes["USDCHF"];
  var usdEUR = response.quotes["USDEUR"];
  $("#btc-usd").text(usdBTC);
  $("#gbp-usd").text(usdGBP);
  $("#cad-usd").text(usdCAD);
  $("#aud-usd").text(usdAUD);
  $("#jpy-usd").text(usdJPY);
  $("#chf-usd").text(usdCHF);
  $("#eur-usd").text(usdEUR);
};

var displayCurrencyData = function displayCurrencyData(response, converter) {
  $("#foreign-exchange-result").show();
  if (response !== null) {
    var currencyRate = response.quotes[converter];
    $("#foreign-exchange-list").append("<li>" + converter + " = " + currencyRate + "</li>");
  } else {
    $("#foreign-exchange-list").append("No data");
  }
};

var error = function error(_error) {
  $("#foreign-exchange-result").text("Uh oh... something went wrong");
};

$(document).ready(function () {
  var tickerLookup = new _currencylookup.CurrencyLookup();
  var countries = "BTC,GBP,CAD,AUD,JPY,CHF,EUR,ZWL";
  tickerLookup.getCurrencyData(countries, displayTickerResults, error);
  var newCurrencyLookup = new _currencylookup.CurrencyLookup();
  $("#foreign-exchange-select").submit(function (event) {
    event.preventDefault();
    var foreignCurrency = $("#foreign-currency-option").val();
    newCurrencyLookup.getCurrencyData(foreignCurrency, displayCurrencyData, error);
  });
});

},{"./../js/currencylookup.js":2}]},{},[3]);
