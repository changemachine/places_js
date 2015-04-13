$(document).ready(function(){
  $('form#place_name').focus();
  $('form#place-form').submit(function(event) {
    var placeName = $('input#place_name').val();
    var season = $('input#season').val();
    var review = $('textarea#review').val();
    var trip = {placeName: placeName, season: season, review: review };

    $('ul#place-list').append("<li><span class='place'>" + trip.placeName + "</span></li>");


    $('#place-list').show();
    event.preventDefault();
  });

});
