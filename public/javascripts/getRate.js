function getRate(){
    // Get the values from the form

    var type = $('#type').val();
    var weight = $('#weight').val();
    
    calculateCost(type, weight);
  
  }
  
function calculateCost(type, weight) {
    var cost = 0.0;

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

    }
    
    $('#cost').append('$' + cost);
      
}

/* 
cost.empty();
    cost.append();
    
flats
1	$1.00
2	1.20
3	1.40
4	1.60
5	1.80
6	2.00
7	2.20
8	2.40
9	2.60
10	2.80
11	3.00
12	3.20
13	3.40

first-class
1	$3.80	
2	3.80	
3	3.80	
4	3.80	
5	4.60	
6	4.60	
7	4.60	
8	4.60	
9	5.30	
10	5.30	
11	5.30
12	5.30
13	5.90 

stamped
1	$0.55
2	0.70
3	0.85
3.5	1.00

metered
1	$0.50
2	0.65
3	0.80
3.5	0.95

*/