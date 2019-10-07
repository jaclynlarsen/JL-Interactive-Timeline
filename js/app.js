$(document).foundation()

/* main variables */
var panel, num, innerContent, $wrapper = $('.wrapper');

/* wrapper width */
function init(){
  panel = $(window).width();
  num = $('.panel').length;
  innerContent = panel*num;
  $wrapper.width(innerContent);
}

/* set wrapper width */
init();

/* if screen is resized, recalculate wrapper and panel width */
$(window).resize(function(){
  init();
  // send scroller back to the start
  $wrapper.css('transform','translate(0,0)');
});

// handle clicks
$('li').click(function(){ 
  var curr = $(this).index();
  scroll(curr);
});

// handle scrolling
function scroll(curr){
  $wrapper.css('transform','translate('+(panel*curr)*-1+'px,0)');
}
