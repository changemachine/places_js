$(document).ready(function(){
  $('form#place_name').focus();
  $('form#place-form').submit(function(event) {
    var placeName = $('input#place_name').val();
    var season = $('input#season').val();
    var review = $('textarea#review').val();
    var trip = {placeName: placeName, season: season, review: review };

    $('ul#place-list').append("<li><span class='place'>" + trip.placeName + "</span></li>");

    $('.place').last().click(function() {
      $('#show-place').toggle();
      $('#show-place h2').text(trip.placeName);
      $('.place-name').text(trip.placeName);
      $('.season').text(trip.season);
      $('.review').text(trip.review);
    });

    $('#place-list').show();
    event.preventDefault();
  });

});
