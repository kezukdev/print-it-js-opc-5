const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

document.body.onload = function () {
	let position = 0;
	container = document.getElementById("banner");
	const arrow_left = document.getElementById("arrow_left");
	const arrow_right = document.getElementById("arrow_right");
	arrow_left.addEventListener("click", clickLeftArrow);
	arrow_right.addEventListener("click", clickRightArrow);
	function updateSlide() {
		const imageSlide = document.querySelector(".banner-img");
		const tagLine = document.querySelector("#banner p");
		imageSlide.setAttribute ("src","./assets/images/slideshow/" + slides[position].image);
		tagLine.innerHTML = slides[position].tagLine;
		const dotSelected = document.querySelector(".dot_selected");
		dotSelected.classList.remove('dot_selected');
		const updateDotSelected = document.querySelector(".dots :nth-child("+(position+1)+")");
		updateDotSelected.classList.add("dot_selected");
	}
		
	function clickLeftArrow () {
		position -= 1;
		if (position < 0) {
			position = nbrSlides - 1;
		}	
		updateSlide();
	}
		
	function clickRightArrow () {
		position += 1;
		if (position >= nbrSlides) {
			position = 0;

		}
		updateSlide();
	}	

	let elementDots = document.querySelector(".dots");
	let nbrSlides = slides.length;
	for (let i = 0; i < nbrSlides; i++) { 
		let newDot = document.createElement("div");
		elementDots.appendChild(newDot);
		newDot.classList.add('dot');
		if (i===position) {
			newDot.classList.add('dot_selected');
		} 		
	} 
} 