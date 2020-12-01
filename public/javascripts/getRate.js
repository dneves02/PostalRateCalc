function getRate(){
    // Get the value from the search box
    var searchString = $('#txtSearch').val();

    var type = "";
    var weight = 0;
    var cost = 0;

    console.log('Searching for: ' + searchString);
  
    // Set up the parameters to send to the API
    var params = { s: searchString, apikey: '66f670e1' };
  
    // Use jQuery to make the get request
    $.get('https://www.omdbapi.com/', params, function(data, status) {
      // For debugging purposes, make a note that we're back
      console.log('Back from server with the following results:');
      console.log(status);
      console.log(data);
  
      updateResultList(data);
    });
  }
  
  function updateResultList(data) {
    if (data.Search && data.Search.length > 0) {
      var resultList = $('#ulResults');
      resultList.empty();
      
      // you could use a forEach here as well...
      for (var i = 0; i < data.Search.length; i++) {
        var title = data.Search[i].Title;
        resultList.append('<li><p>' + title + '</p></li>');
      }
    }
}