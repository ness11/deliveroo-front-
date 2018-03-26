$(document).ready(function(){
    var jqxhr = $.getJSON( "restaurants.json", function() {
        console.log( "success" );
      })
})