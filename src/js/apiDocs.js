console.log('apiDocs started');
// navbar



$(window).on("load resize scroll",function(e){

$("#navInner").stick_in_parent();
$(".setLang").stick_in_parent();
var widthss = $(".method-example").outerWidth();

$(".setLang").width(widthss);



});

    hljs.initHighlightingOnLoad();



//smoothscroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  console.log('smoothscroll done');

// Scroll spy - http://jsfiddle.net/mekwall/up4nu/
  // Cache selectors
var lastId,
    topMenu = $(".docsNav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }

});


///load json
//
// $.ajax({
//     url: "apiDocs.json",
//     dataType: "json",
//     success: function(data) {
//         console.log(data);
//         $('body').append(data.employees[0].firstName);
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//         console.log('ERROR', textStatus, errorThrown);
//     }
// });
//


//// tabs

$(document).ready(function(){

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');



    // console.log("[data-tab='" + tab_id + "']");

    $('.tabs li').each(function() {
      $(this).find("[data-tab='" + tab_id + "']").removeClass('current');
      $(this).find("[data-tab='" + tab_id + "']").addClass('current');
    });

    $('.tab-content').removeClass('current');



	})

})


// 
//
// $(document).ready(function(){
//
// 	$('ul.tabs li').click(function(){
// 		var tab_id = $(this).attr('data-tab');
//
//     $('ul.tabs li').removeClass('current');
//     $('.tab-content').removeClass('current');
//
//
//       $('ul.tabs li').find("[data-tab='" + tab_id + "']").addClass('current');
//       // $("."+tab_id).find("[data-tab='" + tab_id + "']").addClass('current');
//
// 		// $(this).addClass('current');
// 		$("."+tab_id).addClass('current');
// 	})
//
// })

$(document).ready(function(){

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$('[data-tab="'+tab_id+'"]').addClass('current');
	})

})


//
// $(document).ready(function(){
//
// 	$('ul.tabs li').click(function(){
// 		var tab_id = $(this).attr('data-tab');
//
// 		$('ul.tabs li').removeClass('current');
// 		$('.tab-content').removeClass('current');
//
// 		$(this).addClass('current');
// 		$("#"+tab_id).addClass('current');
// 	})
//
// })
