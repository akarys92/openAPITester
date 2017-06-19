var updatePage = function( resp ) {
  var body = JSON.stringify(resp);
  $( '#body').text( body );
};

// ... the AJAX request fails
var printError = function( req, status, err ) {
  console.log( 'something went wrong: ', status);
};

// GET
$('#get').click(function(){
  var headers = {
    "Content-Type": "application/json"
    //Auth stuff here...
  };
  
  var ajaxGETOptions = {
    url: 'http://localhost:8888/test',
    type: 'GET',
    headers: headers,
    dataType:'json',
    success: updatePage,
    error: printError
  };
    $.ajax(ajaxGETOptions);
});
// POST
$('#post').click(function(){
  var body = $("#json").val();
  var headers = {
    "Content-Type": "application/json"
    //Auth stuff here...
  };

  var ajaxPOSTOptions = {
    url: 'http://localhost:8888/test',
    type: 'POST',
    headers: headers,
    dataType:'json',
    data: body,
    success: updatePage,
    error: printError
  };
    $.ajax(ajaxPOSTOptions);
});
