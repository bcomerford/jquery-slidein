$(document).ready(function() {
  var el = $("div.out"),
	  options = {
		direction: "left",
		pause: 1000
	  };
  
  init(el, options);
});

function init(el, options) {
  //Setting up default options and user options
	var d = options.direction.toString();
  
  //Initializing original placements of elements
  el.css({ "left" : window.screen.availWidth + "px" });
  var num = .1;
  el.each(function() {
    $(this).css("opacity", .6 - num);
	num = num + .1;
  });
  
  //Making call to slide function
  slideIn(el);
}

function slideIn(el) {
	var time = 200;
	el.each(function() {
	  $(this).animate({left: "0px", opacity: "1"}, 800 + time, "swing");
	  time = time + 200;
	});
}