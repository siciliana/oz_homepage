$(document).ready(function() {
  $("a.grouped_elements").fancybox({
      'transitionIn'  :   'elastic',
      'transitionOut' :   'elastic',
      'speedIn'       :   600,
      'speedOut'      :   200,
      'overlayShow'   :   false
  });
    $("a.grouped_elements")
    .attr('rel', 'gallery')
    .fancybox({
        padding : 0
    });

	$(".fancybox").fancybox({
	    helpers : {
	        overlay : {
	            css : {
	                'background' : 'rgba(58, 42, 45, 0.95)'
	            }
	        }
	    }
	});

});