/*отправка почты*/
function calc()
	{	
	var name = $('#name').val(),
		phone = $('#phone').val(),
		ch='';
		$('.checkbox:checked').each(function(){
			ch="&checkbox[]="+$(this).val()+ch;
		})

		   $.ajax({
			type: "POST",
			url: "/send.php",
			data: "name="+name+"&phone="+phone+ch,
			success: function(html) {
				$("#result").arcticmodal();
				$(".result-text").empty();
				$(".result-text").append(html);
			}
		});
	}
/*конец отправки почты*/

/*Скрипт для меню*/
$(window).scroll(function(){
    var r=$(document).scrollTop();
        e=50;
    if(r>e){
        $(".main-nav").addClass("locked");
    }
    else{
        $(".main-nav").removeClass("locked");
        $(".main-nav").removeAttr("style");
    };
});
/**/

/*Отключает наведение при скролле влияет на скорость*/
	var body = document.body,timer;
		window.addEventListener('scroll', function() {
		  clearTimeout(timer);
		  if(!body.classList.contains('disable-hover')) {
			body.classList.add('disable-hover')
		  }
		  
		  timer = setTimeout(function(){
			body.classList.remove('disable-hover')
		  },500);
		}, false);

/**/

$(function(){
	$(".bxSlider").bxSlider({
		pager:1,
		controls:1
	});

	$(".bx-partners").bxSlider({
		auto:0,
		pause:3000,
		controls:1,
		slideWidth: 320,
	    minSlides: 3,
	    maxSlides: 4,
	    slideMargin: 20,
	    moveSlides:1,
	    pager:0
	});

	/*Макска для телефона*/
	$("#phone").mask("+7 (999) 999-99-99",{placeholder:" "});

	/*Скрипт для модальных окон*/
	$('.popap_box').click(function() {
		$('#modalbox_' + $(this).data('body')).arcticmodal();
	});


	/* яндекс карта*/
    /*ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [51.1362,71.4346],
            zoom: 17,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Название'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/place-arrow.png',
            // Размеры метки.
            iconImageSize: [100, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [40, -40]
            
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
    });*/
    /**/
})