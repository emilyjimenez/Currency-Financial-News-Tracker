import { apiKeyCurrency } from "./../.env";

export class CurrencyLookup {
  constructor() {
  }
  getCurrencyData(response, displayCurrencyData, error) {
    let sourceCurrency = "USD";
    let converter = sourceCurrency.concat(response);
    $.get(`http://apilayer.net/api/live?access_key=${apiKeyCurrency}&source=${sourceCurrency}&currencies=${response}&format=1`).then(function(response){
      displayCurrencyData(response, converter);
    }).fail(function(error) {
      throw(error);
    });
  }
}
