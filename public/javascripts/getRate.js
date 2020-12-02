function getRate(){
    // Get the values from the form

    var type = $('#type').val();
    var weight = $('#weight').val();
    console.log('Calculating rate for parcel type: '+ type);
    console.log('Weight: '+ weight);
    
    calculateCost(type, weight);
  
  }
  
function calculateCost(type, weight) {
    var cost = $('#cost');

    if (type == "stamped") {
        switch (weight){
          case '<= 1': 
            cost = 0.55;
          case '<= 2':
            cost = 0.7;
          case '<= 3':
            cost = 0.85;
          case '<= 3.5':
            cost = 1.0;
        }
        console.log('Cost: '+ cost);  
    } else if (type == "metered") {
        switch (weight){
          case '<= 1': 
            cost = 0.5;
          case '<= 2':
            cost = 0.65;
          case '<= 3':
            cost = 0.8;
          case '<= 3.5':
            cost = 0.95;
        } 
        console.log('Cost: '+ cost);  
    } else if (type == "flats") {
        switch (weight){
          case '<= 1': 
            cost = 1.0;
          case '<= 2':
            cost = 1.2;
          case '<= 3':
            cost = 1.4;
          case '<= 4':
            cost = 1.6;
          case '<= 5':
            cost = 1.8;
          case '<= 6':
            cost = 2.0;
          case '<= 7':
            cost = 2.2;
          case '<= 8':
            cost = 2.4;
          case '<= 9':
            cost = 2.6;
          case '<= 10':
            cost = 2.8;
          case '<= 11':
            cost = 3.0;
          case '<= 12':
            cost = 3.2;
          case '<= 13':
            cost = 3.4;
        }
        console.log('Cost: '+ cost);

    } else if (type == "first-class") {
        switch (weight){
          case '<= 4':
            cost = 3.8;
          case '<= 8':
            cost = 4.6;
          case '<= 12':
            cost = 5.3;
          case '<= 13':
            cost = 5.9;
        }
        console.log('Cost: '+ cost);
    }
    console.log('Your total cost is: '+ cost);
    $('#cost').append('<h3>$' + cost + '</h3>');
      
}

