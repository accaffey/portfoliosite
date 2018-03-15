
// carousel for main photos/vidoes
var elem = document.querySelector('.carousel');
var flkty = new Flickity(elem,{
	cellSelector: '.cell',
	cellAlign: 'left',
	wrapAround: true,
	draggable: true
});

// carousel for bottom text
var elem2 = document.querySelector('.carouselb');
var flkty = new Flickity(elem2,{
	cellSelector: '.cellb',
	cellAlign: 'left',
	wrapAround: true,
	asNavFor: '.carousel',
	pageDots: false,
	prevNextButtons: false
	

});



var elem3 = document.querySelector('.carouselc');
var flkty = new Flickity(elem3,{
	cellSelector: '.cellc',
	cellAlign: 'left',
	wrapAround: true,
	draggable: true,
	adaptiveHeight: true,

});


var elem4 = document.querySelector('.carouseld');
var flkty = new Flickity(elem4,{
	cellSelector: '.celld',
	cellAlign: 'left',
	wrapAround: true,
	asNavFor: '.carouselc',
	pageDots: false,
	prevNextButtons: false,
});

var elem5 = document.querySelector('.carousele');
var flkty = new Flickity(elem5,{
	cellSelector: '.celle',
	cellAlign: 'left',
	wrapAround: true,
	draggable: true
});


var elem6 = document.querySelector('.carouself');
var flkty = new Flickity(elem6,{
	cellSelector: '.cellf',
	cellAlign: 'left',
	wrapAround: true,
	asNavFor: '.carousele',
	pageDots: false,
	prevNextButtons: false
});


var elem7 = document.querySelector('.carouselg');
var flkty = new Flickity(elem7,{
	cellSelector: '.cellg',
	cellAlign: 'left',
	wrapAround: true,
	draggable: true,
	pageDots: false,
	prevNextButtons: false
});


var elem8 = document.querySelector('.carouselh');
var flkty = new Flickity(elem8,{
	cellSelector: '.cellh',
	cellAlign: 'left',
	wrapAround: true,
	asNavFor: '.carouselg',
	pageDots: false,
	prevNextButtons: false
	
});




















