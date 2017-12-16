import { apiKeyCurrency } from "./../.env";

export class CurrencyLookup {
  constructor() {
  }
  getData(response, displayData, error) {
    $.get(`http://apilayer.net/api/live?access_key=${apiKeyCurrency}&currencies=${response}&format=1`).then(function(response){

      displayData(response);
      console.log(resonse);
    }).fail(function(error) {
      throw(error);
    });
  }
}
