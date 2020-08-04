'use strict';

const section = document.querySelector(".scroll-effect-section");
let currentPos = window.pageYOffset;

const update = () => {
	const newPos = window.pageYOffset;
	const diff = newPos - currentPos;
	const speed = diff * 0.2;
	section.style.transform = `skewY(${speed}deg)`;

	currentPos = newPos;

	requestAnimationFrame(update);
};

update();
