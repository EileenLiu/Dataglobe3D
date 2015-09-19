$(document).ready(function($) {
		//Menu animation	
    
    $( "#navList" ).append( ' <li><a class="nav" href="#">Favorites</a><ul class="listTab"><li><a href="#">Will be populated</a></li><li><a href="#">Will be populated</a></li><li><a href="#">Will be populated</a></li></ul></li>' 
                          );

		$('#navList ul').css({display: "none"}); //Fix Opera
 
		$('#navList li').hover(function() {  
                $(this).addClass('addPosition');
		$(this).find('a').stop().animate({'width' : "280"});
   		$(this).find('ul:first').css({visibility : "visible", display : "none"}).show(400);
 
  		}, function() {
    		$(this).find('ul:first').css({visibility : "hidden"}).hide(400);
   		$(this).find('a').stop().animate({'width' : "250"});
                $(this).removeClass('addPosition');
			});
    console.log("hi");
		});