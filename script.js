$(document).ready(function() {

  // initialize when document is ready
  $('#category-description #living-room').addClass('hover-color');
  $('#interior-1').addClass('slideIn show');
  $('#interior-1 img').addClass('slideIn');

  var currPropId = 'prop-1';

  $('#' + currPropId).addClass('scaled show');

  $('#category-description div').hover(function() {
    var hoveredDivId = $(this).attr('id');
  
    $('#category-description div').each(function() {
      var divId = $(this).attr('id');
      
      if (divId !== hoveredDivId) {
        $(this).removeClass('hover-color');
        if (divId === 'living-room')      {$('#interior-1').removeClass('slideIn show'); $('#interior-1 img').removeClass('slideIn');}
        else if (divId === 'home-office') {$('#interior-2').removeClass('slideIn show'); $('#interior-2 img').removeClass('slideIn');}
        else if (divId === 'gaming-room') {$('#interior-3').removeClass('slideIn show'); $('#interior-3 img').removeClass('slideIn');}
      }
    });

    $(this).addClass('hover-color');
    if (hoveredDivId === 'living-room')      {$('#interior-1').addClass('slideIn'); $('#interior-1 img').addClass('slideIn');}
    else if (hoveredDivId === 'home-office') {$('#interior-2').addClass('slideIn'); $('#interior-2 img').addClass('slideIn');}
    else if (hoveredDivId === 'gaming-room') {$('#interior-3').addClass('slideIn'); $('#interior-3 img').addClass('slideIn');}
  });

  $('#before-btn').click(function() {
    $('#' + currPropId).removeClass('scaled show');
    var currPropNumber = parseInt(currPropId.split('-')[1]);
    currPropNumber = (currPropNumber - 1) % 4;
    currPropId = 'prop-' + (currPropNumber === 0 ? 4 : currPropNumber);
    console.log(currPropId)
    $('#' + currPropId).addClass('scaled show');
  });

  $('#after-btn').click(function() {
    $('#' + currPropId).removeClass('scaled show');
    var currPropNumber = parseInt(currPropId.split('-')[1]);
    currPropNumber = (currPropNumber + 1) % 4;
    currPropId = 'prop-' + (currPropNumber === 0 ? 4 : currPropNumber);
    console.log(currPropId)
    $('#' + currPropId).addClass('scaled show');
  });

  $('#newsletter-form img').click(function() {
    $('#newsletter-form input').val('');
  });
});