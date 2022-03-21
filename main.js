function CBR_XML_Daily_Ru(rates) {
    function trend(current, previous) {
      if (current > previous) return ' ▲';
      if (current < previous) return ' ▼';
      return '';
    }

      
    let USDrate = rates.Valute.USD.Value.toFixed(2).replace('.', ',');
    let USD = document.getElementById('USD');
    USD.innerHTML = USD.innerHTML.replace('00,0000', USDrate);
    USD.innerHTML += trend(rates.Valute.USD.Value, rates.Valute.USD.Previous);
    
    let EURrate = rates.Valute.EUR.Value.toFixed(2).replace('.', ',');
    let EUR = document.getElementById('EUR');
    EUR.innerHTML = EUR.innerHTML.replace('00,0000', EURrate);
    EUR.innerHTML += trend(rates.Valute.EUR.Value, rates.Valute.EUR.Previous);

    
    // let USDrat = rates.Valute.USD.Value.toFixed(2).replace('.', ',');
    // let US = document.getElementById('lastUSD');
    // US.innerHTML = US.innerHTML.replace('00,0000', USDrat);
    // // US.innerHTML += trend(rates.Valute.USD.Value, rates.Valute.USD.Previous);
  
    // let EURrat = rates.Valute.EUR.Value.toFixed(2).replace('.', ',');
    // let EU = document.getElementById('lastEUR');
    // EU.innerHTML = EU.innerHTML.replace('00,0000', EURrat);
    // // EU.innerHTML += trend(rates.Valute.EUR.Value, rates.Valute.EUR.Previous);
  }

  // function result(){
  //   let ress = document.getElementById('res')
  //   ress.innerHTML =  
  //   return USDrate - USDrat;
  // }
