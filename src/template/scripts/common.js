$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	$('.callback .input__wrap').mask('(000) 000-00-00');

	var countsStatus = false;

	$(window).on('load resize scroll', function() {
		if ( $(window).scrollTop() > 0 && countsStatus == false){
			$('.counts__item').each(function(index, el) {
				var count = $(this).attr('data-count');
				$(this).animateNumber({
					number: count,step: 1,
					numberStep: function(now, tween) {
			      var floored_number = now.toFixed(1),
			          target = $(tween.elem);

			      target.text(floored_number + ' %');
			    }
				}, 5000)
			});
			countsStatus = true;
		}
	});
	$('.portfolio__nav a').click(function(event) {
		event.preventDefault();
		var filter = $(this).attr('data-filter');
		$(filter).addClass('portfolio__item_show');
	});


	var workList = $('.work__list'),
			workDots = $('.work__dots'),
			workCurrent = $('.counter__current'),
			workTotal = $('.counter__total'),
			workLength = $('.work__item').length;

	workTotal.text(workLength < 10 ? "0" + workLength : workLength);
	workList.slick({
		slidesToShow: 1,
		fade: true,
		dots: true,
		adaptiveHeight: true,
		appendDots: workDots
	})

	workList.on('afterChange', function(event, slick, direction){
	  workCurrent.text(direction + 1);
	});


	var top = $('.top__list');
	top.slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		responsive: [{
			breakpoint: 1250,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false
			}
		}]
	})

	var portfolioSelected = $('.portfolio__nav li:first-of-type a').attr('data-filter');

	function portfolioEach() {
		$('.portfolio__item').each(function(index, el) {
			var col = $(this).parents('.portfolio__col');
			if ($(this).hasClass(portfolioSelected.replace('.', ''))) {
				$(this).removeClass('portfolio__item_hide');
				col.removeClass('portfolio__col_hide');
			} else{
				$(this).addClass('portfolio__item_hide');
				col.addClass('portfolio__col_hide');
			}
		});
	}
	portfolioEach();

	$('.portfolio__nav a').click(function(event) {
		var filter = $(this).attr('data-filter').replace('.', ''),
				li = $(this).parents('li');
				portfolioSelected = filter;

		if (!li.hasClass('selected')) {
			$('.portfolio__nav li').removeClass('selected');
			li.addClass('selected');
			portfolioEach();
		}
	});


	var nav = $('.nav__list');
			hum = $('.hum'),
			humClass = 'hum_toggle',
			socials = $('.socials'),
			socialsClass = 'socials_toggle';

	hum.click(function(event) {
		hum.toggleClass(humClass);
		nav.slideToggle(300);
		socials.toggleClass(socialsClass);
	});

	$(window).on('resize', function(event) {
		if ($(window).width() > 767) {
			hum.removeClass(humClass);
			nav.removeAttr('style');
			socials.removeClass(socialsClass);
		}
	});
});
