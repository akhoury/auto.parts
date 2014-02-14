$(function() {
  if (!window.ap)
    var ap = ap = {};

  $.get('/data/cars.json')
    .done(function(data){
      ap.cars = data;
      Object.keys(ap.cars).forEach(function(year, i){
        console.log(year);
        $('select#year').append($('<option />').val('y- ' + year).addClass('year').text(year));
      });
    })
    .fail(function(e){
      console.warn('could\'nt fetch cars.json', e);
    })
});