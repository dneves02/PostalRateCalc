function getRate(){
    // Get the values from the form

    var type = $('#type').val();
    var weight = $('#weight').val();
    
    calculateCost(type, weight);
  
  }
  
function calculateCost(type, weight) {
    var cost = 0.0;

    if (type == "stamped") {
      switch (weight)
      case (< 1){
        cost = 0.55;
      } 
    } else if (type == "metered") {
      cost = 
    } else if (type == "flats") {
      cost = 
    } else if (type == "first-class") {
      cost = 
    }
    var cost = $('#cost'); 
}

/* 
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
*/