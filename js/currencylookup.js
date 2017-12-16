import { apiKeyCurrency } from "./../.env";

export class CurrencyLookup {
  constructor() {
  }
  getCurrencyData(response, displayCurrencyData, error) {
    $.get(`http://apilayer.net/api/live?access_key=${apiKeyCurrency}&currencies=${response}`)
    .then(function(response){
      displayCurrencyData(response);
      console.log(resonse);
    }).fail(function(error) {
      throw(error);
    });
  }
}
