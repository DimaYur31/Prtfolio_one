// ======================================================= определение тачскрина
isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};
let body = document.querySelector('body');
if (isMobile.any()) {
	body.classList.add('_mobile');
} else {
	body.classList.add('_PC');
}
// =======================================================================

// ===================================================анимация шапки
const burger = document.querySelector('.burger');
const nav = document.querySelector('.byrger__wrapper');

window.addEventListener('scroll', function () {
	const header = document.querySelector('header');
	header.classList.toggle("sticky", window.scrollY > 0)

});

// --------------------------------------- бургер
burger.onclick = clik;
function clik() {
	burger.classList.toggle('_active');
	nav.classList.toggle('_active');
}

// ===========================================================слайдер
let slides = document.querySelectorAll(".mySlides");
let dots = document.querySelectorAll(".dot");
let slideIndex = 0;
let time;

function clikSlide(n) {
	slideIndex = n;
	clearTimeout(time);
	showSlides();
}

showSlides();
function showSlides() {

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (j = 0; j < dots.length; j++) {
		dots[j].classList.remove("active")
	}


	if (slideIndex >= slides.length) { slideIndex = 0 }


	slides[slideIndex].style.display = "block";
	dots[slideIndex].classList.add("active");
	slideIndex++;

	time = setTimeout(showSlides, 5000);
}
// ==============================================================================
function toggle(n) {
	n.classList.toggle('ON');
}