import {apiKeyCurrency } from "./../.env";

export class CurrencyLookup {
  constructor() {

  }
  getData(response, displayData, error) {
    $.get(`URLHERE`)
    .then(function(response){
      displayData(response);
    }).fail(function(error) {
      throw(error);
    });
  }
}
