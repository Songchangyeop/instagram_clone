'use strict';

const headerMenu = document.querySelector('.header__menu-modal');
const myProfile = document.querySelector('.myprofile-img');

document.addEventListener('click', (e) => {
	if (e.target.classList[0] !== 'myprofile-img') {
		headerMenu.classList.add('invisible');
		return;
	}

	if (headerMenu.classList[1] == 'invisible') {
		headerMenu.classList.remove('invisible');
	} else {
		headerMenu.classList.add('invisible');
	}
});
