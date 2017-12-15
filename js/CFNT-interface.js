import { CurrencyLookup } from './../js/currencylookup.js';
import { NewsLookup } from './../js/newslookup.js';

let beginTicker = function() {
    $("ul#ticker02").liScroll({travelocity: 0.15});
};

$(document).ready(function() {
  beginTicker();
});
