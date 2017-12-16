(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKeyNews = "KEY GOES HERE";
exports.apiKeyCurrency = "b52a3b45df5c0e5abc5f6a4a7390f8f3";

},{}],2:[function(require,module,exports){
// export class CryptoLookup {
//   constructor() {
//
//   }
//   getData(response, displayData, error) {
//     $.get(`URLHERE`)
//     .then(function(response){
//       displayData(response);
//     }).fail(function(error) {
//       throw(error);
//     });
//   }
// }
"use strict";

},{}],3:[function(require,module,exports){
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
    key: "getData",
    value: function getData(response, displayData, error) {
      $.get("http://apilayer.net/api/live?access_key=" + _env.apiKeyCurrency + "&currencies=" + response + "&format=1").then(function (response) {

        displayData(response);
        console.log(response);
      }).fail(function (error) {
        throw error;
      });
    }
  }]);

  return CurrencyLookup;
}();

},{"./../.env":1}],4:[function(require,module,exports){
// import {apiKeyNews } from "./../.env";
//
// export class NewsLookup {
//   constructor() {
//
//   }
//   getData(response, displayData, error) {
//     $.get(`URLHERE`)
//     .then(function(response){
//       displayData(response);
//     }).fail(function(error) {
//       throw(error);
//     });
//   }
// }
"use strict";

},{}],5:[function(require,module,exports){
'use strict';

var _currencylookup = require('./../js/currencylookup.js');

var _newslookup = require('./../js/newslookup.js');

var _cryptolookup = require('./../js/cryptolookup.js');

var displayData = function displayData(response) {
  $("#foreign-exchange-result").show();
  if (response !== null) {
    var currencyRate = response.quotes;
    $("#foreign-exchange-list").append('<li>' + currencyRate + '</li>');
  } else {
    $("#foreign-exchange-list").append("No data");
  }
};

var error = function error(_error) {
  $("#foreign-exchange-result").text("Uh oh... something went wrong");
};

$(document).ready(function () {
  var newCurrencyLookup = new _currencylookup.CurrencyLookup();
  $("#foreign-exchange-select").submit(function (event) {
    event.preventDefault();
    var response = $("#foreign-currency-option").val();
    newCurrencyLookup.getData(response, displayData, error);
  });
});

},{"./../js/cryptolookup.js":2,"./../js/currencylookup.js":3,"./../js/newslookup.js":4}]},{},[5]);
