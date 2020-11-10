$(document).ready(function(){
	/*sliders*/
	$('.section-slider__row,.parteners-slider__row').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
		prevArrow:'<button type="button" class="slick-prev arrow arrow1"><img src="./img/left.svg" alt=""></button>',
		nextArrow:'<button type="button" class="slick-next arrow arrow2"><img src="./img/right.svg" alt=""></button>',
		
		
	});
	$('.reviews').slick({
		arrows:true,
		dots:false,
		slidesToShow:3,
		prevArrow:'<button type="button" class="slick-prev arrow arrow1"><img src="./img/left.svg" alt=""></button>',
		nextArrow:'<button type="button" class="slick-next arrow arrow2"><img src="./img/right.svg" alt=""></button>',
		responsive:[
			{
				breakpoint: 1700,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow:1
				}
			}
		]
		
	});
	$('.elements-baners').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		
		
	});
	
	$('.card-slider__images').slick({
		
		slidesToShow:1,
		asNavFor: '.card-slider__control',
		arrows:false,
	});
	$('.card-slider__control').slick({
		
		slidesToShow:5,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		transformsEnabled:false,
		arrows:false,
		asNavFor: '.card-slider__images',
		
		
		
	});
	$('.related-products').slick({
		
		slidesToShow:1,
		vertical: false,
		verticalSwiping: false,
		
		dots:true,
		arrows:false,
		
		
		
		
	});
	   
		
	/*spoler */
	 $('.section-spoler__name').click(function(event) {
      if($('.section-spoler__items').hasClass('one')){
        $('.section-spoler__name').not($(this)).removeClass('active');
        $('.section-spoler__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
	});
	/*tabs */
	
		$("ul.tabs__caption").on("click", "li:not(.active)", function() {
		  $(this)
			.addClass("active")
			.siblings()
			.removeClass("active")
			.closest("div.tabs")
			.find("div.tabs__content")
			.removeClass("active")
			.eq($(this).index())
			.addClass("active");
		});
		//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});


let message = "salut";
let els = "privet" ;
 if (2 > 3){
	console.log(message);
 } else {
	console.log(els);
 }
 
